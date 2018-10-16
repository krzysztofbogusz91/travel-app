import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TripService } from 'src/app/trip-details/trip.service';
import { TripDateRange } from '../shared/models/TripDateRange';
import { Trip } from '../shared/models/Trip';

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
