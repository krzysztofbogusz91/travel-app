import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TripDateRange } from 'src/app/shared/models/trip-date-range.interface';
import { Trip } from 'src/app/shared/models/trip.interface';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor() {}

  filter(dataRange: TripDateRange, stream: Observable<Trip[]>): Observable<Trip[]> {
    return stream.pipe(map(trips => this.checkIfDateFitsRange(trips, dataRange)));
  }

  checkIfDateFitsRange(trips: Trip[], range: TripDateRange): Trip[] {
    return trips.filter(trip => {
      const start = range.startDate.getTime();
      const end = range.endDate.getTime();
      const tripStart = new Date(trip.startDate).getTime();
      const tripEnd = new Date(trip.endDate).getTime();

      if (tripStart >= start && tripEnd <= end) {
        return trip;
      }
    });
  }
}
