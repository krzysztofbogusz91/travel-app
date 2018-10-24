import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { TripDateRange } from 'src/app/shared/models/trip-date-range.interface';
import { Trip } from 'src/app/shared/models/trip.interface';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatesFilterProviderService {
  private _dateRange$: BehaviorSubject<TripDateRange>;
  public dateRange$: Observable<TripDateRange>;

  startRange: TripDateRange = {
    startDate: new Date('1 Jan 1999'),
    endDate: new Date('1 Jan 2020')
  };

  constructor() {
    this._dateRange$ = new BehaviorSubject<TripDateRange>(this.startRange);
    this.dateRange$ = this._dateRange$.asObservable();
  }

  filter(stream$: Observable<Trip[]>): Observable<Trip[]> {
    return combineLatest([stream$, this.dateRange$]).pipe(
      map(([trip, range]: [Trip[], TripDateRange]) => this.checkIfDateFitsRange(trip, range))
    );
  }

  checkIfDateFitsRange(trips: Trip[], range: TripDateRange): Trip[] {
    return trips.filter(trip => {
      const startRange = range.startDate.getTime();
      const endRange = range.endDate.getTime();
      const tripStart = new Date(trip.startDate).getTime();
      const tripEnd = new Date(trip.endDate).getTime();

      if (tripStart >= startRange && tripEnd <= endRange) {
        return trip;
      }
    });
  }

  updateDateRange(dates) {
    if (dates) {
      this._dateRange$.next(dates);
    }
  }
}
