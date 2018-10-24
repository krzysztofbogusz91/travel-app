import { TestBed } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';
import {
  mockDatesRange,
  mockTripApiResponse,
  mockDatesRangeForAllTrips,
  mockDatesRangeForNoTrips
} from 'mocks/tests/data-mock';
import { of } from 'rxjs';

describe('DashboardService', () => {
  let service: DashboardService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardService]
    });
    service = TestBed.get(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should filter trip list by dates', done => {
    const dataRange = mockDatesRange;
    const stream = of(mockTripApiResponse);
    const shouldReturnName = mockTripApiResponse[2].name;
    const filtered = service.filter(dataRange, stream);

    filtered.subscribe(trips => {
      expect(trips.length).toEqual(1);
      expect(trips[0].name).toEqual(shouldReturnName);
      done();
    });
  });

  it('should return all trips that fits in the range', done => {
    const dataRange = mockDatesRangeForAllTrips;
    const stream = of(mockTripApiResponse);

    const filtered = service.filter(dataRange, stream);

    filtered.subscribe(trips => {
      expect(trips.length).toEqual(mockTripApiResponse.length);
      done();
    });
  });

  it('should return empty arr', done => {
    const dataRange = mockDatesRangeForNoTrips;
    const stream = of(mockTripApiResponse);

    const filtered = service.filter(dataRange, stream);

    filtered.subscribe(trips => {
      expect(trips.length).toEqual(0);
      expect(trips).toEqual([]);
      done();
    });
  });
});
