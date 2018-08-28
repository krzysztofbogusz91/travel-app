import { Component, OnInit } from '@angular/core';
import { TripDateRange } from '../shared/models/TripDateRange';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import { Observable } from 'rxjs';

import { Trip } from 'src/app/shared/models/Trip';
import { HttpStatusService } from 'src/app/core/http/http-status.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  datesRange: TripDateRange;
  isLoading$: Observable<boolean>;
  trips$: Observable<Trip[]>;

  constructor(
    private dashboardService: DashboardService,
    private httpStatusService: HttpStatusService
  ) {}

  ngOnInit() {
    this.isLoading$ = this.httpStatusService.getHttpStatus();
    this.trips$ = this.dashboardService.getTrips();
  }

  onDatesChange($event): void {
    this.datesRange = $event;
  }
}
