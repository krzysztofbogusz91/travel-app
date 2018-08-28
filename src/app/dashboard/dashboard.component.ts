import { Component, OnInit } from '@angular/core';
import { TripDateRange } from '../shared/models/TripDateRange';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import { Observable } from 'rxjs';

import { Trip } from 'src/app/shared/models/Trip';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  datesRange: TripDateRange;
  trips$: Observable<Trip[]> = this.dashboardService.getTrips();

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  }

  onDatesChange($event): void{
    console.log($event);
    this.datesRange = $event;
  }

}
