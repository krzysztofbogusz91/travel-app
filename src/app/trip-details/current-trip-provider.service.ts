import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TripService } from 'src/app/trip-details/trip.service';
import { Trip } from 'src/app/shared/models/trip.interface';

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
