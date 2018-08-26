import { Component, OnInit } from '@angular/core';
import { TripDateRange } from '../shared/models/TripDateRange';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  datesRange: TripDateRange;

  constructor() { }

  ngOnInit() {
  }

  onDatesChange($event): void{
    this.datesRange = $event
  }

}
