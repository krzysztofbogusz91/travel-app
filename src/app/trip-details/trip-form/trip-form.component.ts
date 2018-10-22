import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, of, combineLatest } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { Trip } from 'src/app/shared/models/trip.interface';
import { TripFormService } from 'src/app/trip-details/trip-form/trip-form.service';
import { CurrentTripProviderService } from 'src/app/trip-details/current-trip-provider.service';
import { TravelFormTemplate } from 'src/app/shared/models/travel-form-template.interface';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.css']
})
export class TripFormComponent implements OnInit {
  @Output()
  travelRequest: EventEmitter<TravelFormTemplate>;
  trip$: Observable<Trip>;
  travelForm$: Observable<FormGroup>;
  travelFormTemplate: FormGroup;

  constructor(
    private currentTripProviderService: CurrentTripProviderService,
    private tripFormService: TripFormService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.travelRequest = new EventEmitter();
    this.trip$ = this.currentTripProviderService.getCurrentTrip();
    this.travelForm$ = this.updateFormWithTrip(this.trip$);
  }

  createForm(trip: Trip | null = null): Observable<FormGroup> {
    const price: string = trip ? trip.price : null;
    const tripName: string = trip ? trip.name : null;
    this.travelFormTemplate = this.fb.group({
      tripDetails: this.fb.group({
        upgrade: [false],
        price: [price],
        tripName: [tripName]
      }),
      personalData: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.email, Validators.required]]
      })
    });

    return of(this.travelFormTemplate);
  }

  updateFormWithTrip(trip: Observable<Trip>): Observable<FormGroup> {
    const form = this.createForm();
    return combineLatest(trip, form).pipe(flatMap(combineTripAndForm => this.createForm(combineTripAndForm[0])));
  }

  updateTripPrice(tripPrice: string): string {
    const form = this.travelFormTemplate.value;
    const upgrade = form.tripDetails.upgrade;
    const price = upgrade ? `${parseFloat(tripPrice) + 200}$` : `${parseFloat(tripPrice)}$`;
    form.tripDetails.price = price;
    return price;
  }

  onSubmit(): void {
    this.tripFormService.submitFormEmitter(this.travelFormTemplate.value);
  }
}
