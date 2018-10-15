import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Trip } from 'src/app/shared/models/Trip';
import { Observable } from 'rxjs';
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

  travelForm = new FormGroup({
    tripDetails: new FormGroup({
      upgrade: new FormControl(false)
    }),
    personalData: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('')
    })
  });

  constructor(
    private currentTripProviderService: CurrentTripProviderService,
    private tripFormService: TripFormService
  ) {}

  ngOnInit() {
    this.trip$ = this.currentTripProviderService.getCurrentTrip();
  }

  onSubmit() {
    this.tripFormService.submitFormEmmiter(this.travelForm.value);
  }
}
