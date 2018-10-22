import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/shared/models/trip.interface';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';
import { CurrentTripProviderService } from './current-trip-provider.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  trip$: Observable<Trip>;
  id: string;

  constructor(private currentTripProviderService: CurrentTripProviderService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.currentTripProviderService.setId(this.id);
    this.trip$ = this.currentTripProviderService.getCurrentTrip();
  }
}
