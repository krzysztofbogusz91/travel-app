import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/shared/trip.service';
import { Trip } from 'src/app/shared/models/Trip';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  trip$: Observable<Trip>;
  id: string;

  constructor(private tripService: TripService, private route: ActivatedRoute) {}

  // TODO
  // add route change on open form;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.trip$ = this.tripService.getTrip(this.id);
  }
}
