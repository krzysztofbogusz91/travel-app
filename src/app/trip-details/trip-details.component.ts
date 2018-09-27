import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/shared/trip.service';
import { Trip } from 'src/app/shared/models/Trip';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  trip$: Observable<Trip>;
  id: string;
  showForm: boolean;

  constructor(private tripService: TripService, private route: ActivatedRoute) {
    this.showForm = false;
  }

  // TODO
  // add route change on open form;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.trip$ = this.tripService.getTrip(this.id);
  }

  openFormModal() {
    this.showForm = this.showForm ? false : true;
  }
}
