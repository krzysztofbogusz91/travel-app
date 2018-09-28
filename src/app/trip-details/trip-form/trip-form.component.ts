import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Trip } from 'src/app/shared/models/Trip';
import { TripService } from './../../shared/trip.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.css']
})
export class TripFormComponent implements OnInit {
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

  constructor(private tripService: TripService) {}

  ngOnInit() {}
}
