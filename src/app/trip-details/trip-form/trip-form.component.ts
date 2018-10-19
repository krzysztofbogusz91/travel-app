import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Trip } from 'src/app/shared/models/Trip';
import { Observable, of } from 'rxjs';
import { CurrentTripProviderService } from './../current-trip-provider.service';
import { EventEmitter } from 'events';
import { TripFormService } from 'src/app/trip-details/trip-form/trip-form.service';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.css']
})
export class TripFormComponent implements OnInit {
  @Output()
  travelRequest = new EventEmitter();

  trip$: Observable<Trip>;
  travelForm: FormGroup;

  constructor(
    private currentTripProviderService: CurrentTripProviderService,
    private tripFormService: TripFormService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.trip$ = this.currentTripProviderService.getCurrentTrip();
    this.createForm();
  }

  createForm() {
    this.travelForm = this.fb.group({
      tripDetails: this.fb.group({
        upgrade: [false],
        price: ['']
      }),
      personalData: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.email, Validators.required]]
      })
    });
  }

  createReactiveForm(trip: Observable<Trip>): Observable<FormGroup> {
    return of(
      this.fb.group({
        tripDetails: this.fb.group({
          upgrade: [false],
          price: ['']
        }),
        personalData: this.fb.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.email, Validators.required]]
        })
      })
    );
  }

  onSubmit() {
    this.tripFormService.submitFormEmitter(this.travelForm.value);
  }
}
