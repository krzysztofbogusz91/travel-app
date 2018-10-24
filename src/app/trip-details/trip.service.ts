import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Trip } from 'src/app/shared/models/trip.interface';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  constructor(private http: HttpClient) {}

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${environment.tripsURL}trips`).pipe(
      map(this.transformToTrip),
      tap(console.log),
      shareReplay(1)
    );
  }

  getTrip(id): Observable<Trip> {
    return this.getTrips().pipe(map(data => data.filter(trip => trip.id === id)[0]));
  }

  transformToTrip(trips): Trip[] {
    return trips.map(trip => {
      trip.startDate = new Date(trip.startDate);
      trip.endDate = new Date(trip.endDate);
      return trip;
    });
  }
}
