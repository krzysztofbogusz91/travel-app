import { TestBed } from '@angular/core/testing';

import { DatesFilterProviderService } from './dates-filter-provider.service';
import {
  mockDatesRange,
  mockTrips,
  mockDatesRangeForAllTrips,
  mockDatesRangeForNoTrips
} from 'src/mocks/tests/data-mock';
import { of } from 'rxjs';

describe('DashboardService', () => {
  let service: DatesFilterProviderService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatesFilterProviderService]
    });
    service = TestBed.get(DatesFilterProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should filter trip list by dates', done => {
    const dataRange = mockDatesRange;
    const stream = of(mockTrips);
    const shouldReturnName = mockTrips[2].name;

    service.updateDateRange(dataRange);
    const filtered = service.filter(stream);

    filtered.subscribe(trips => {
      expect(trips.length).toEqual(1);
      expect(trips[0].name).toEqual(shouldReturnName);
      done();
    });
  });

  it('should return all trips that fits in the range', done => {
    const dataRange = mockDatesRangeForAllTrips;
    const stream = of(mockTrips);

    service.updateDateRange(dataRange);
    const filtered = service.filter(stream);

    filtered.subscribe(trips => {
      expect(trips.length).toEqual(mockTrips.length);
      done();
    });
  });

  it('should return empty arr', done => {
    const dataRange = mockDatesRangeForNoTrips;
    const stream = of(mockTrips);

    service.updateDateRange(dataRange);
    const filtered = service.filter(stream);

    filtered.subscribe(trips => {
      expect(trips.length).toEqual(0);
      expect(trips).toEqual([]);
      done();
    });
  });
});
