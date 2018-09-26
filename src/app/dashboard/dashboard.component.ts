import { Component, OnInit } from '@angular/core';
import { TripDateRange } from '../shared/models/TripDateRange';
import { Observable } from 'rxjs';

import { Trip } from '../shared/models/Trip';
import { HttpStatusService } from '../core/http/http-status.service';
import { TripService } from './../shared/trip.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  datesRange: TripDateRange;

  trips$: Observable<Trip[]>;

  constructor(private tripService: TripService) {}

  ngOnInit() {
    this.trips$ = this.tripService.getTrips();
  }

  onDatesChange($event): void {
    this.datesRange = $event;
  }
}
