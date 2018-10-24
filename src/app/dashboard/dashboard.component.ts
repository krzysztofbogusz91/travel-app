import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TripService } from 'src/app/trip-details/trip.service';
import { TripDateRange } from '../shared/models/trip-date-range.interface';
import { Trip } from '../shared/models/trip.interface';

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

  onDatesChange($event: TripDateRange): void {
    this.datesRange = $event;
  }
}
