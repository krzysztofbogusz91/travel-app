import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/shared/trip.service';
import { Trip } from 'src/app/shared/models/Trip';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';
import { HttpStatusService } from 'src/app/core/http/http-status.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  trip$: Observable<Trip>;
  id: string;

  constructor(private tripService: TripService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.trip$ = this.tripService.getTrip(this.id);
  }
}
