import { Injectable } from '@angular/core';
import { TripService } from './../shared/trip.service';
import { Observable } from 'rxjs';
import { Trip } from 'src/app/shared/models/Trip';

@Injectable({
  providedIn: 'root'
})
export class CurrentTripProviderService {
  public currentTripId: string;

  constructor(private tripService: TripService) {}

  public setId(id: string): void {
    this.currentTripId = id;
  }

  public getCurrentTrip(): Observable<Trip> {
    return this.tripService.getTrip(this.currentTripId);
  }
}
