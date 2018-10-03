import { TestBed } from '@angular/core/testing';

import { CurrentTripProviderService } from './current-trip-provider.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TripService } from 'src/app/shared/trip.service';

describe('CurrentTripProviderService', () => {
  let service: CurrentTripProviderService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrentTripProviderService, TripService]
    });
    service = TestBed.get(CurrentTripProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change current id', () => {
    service.setId('2');

    expect(service.currentTripId).toEqual('2');
  });
});
