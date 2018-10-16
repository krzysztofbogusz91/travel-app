import { TestBed } from '@angular/core/testing';
import { CurrentTripProviderService } from './current-trip-provider.service';
import { TripService } from 'src/app/trip-details/trip.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs/internal/observable/of';

describe('CurrentTripProviderService', () => {
  let service: CurrentTripProviderService;
  let tripService: TripService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrentTripProviderService, TripService]
    });
    service = TestBed.get(CurrentTripProviderService);
    tripService = TestBed.get(TripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change current id', () => {
    service.setId('2');

    expect(service.currentTripId).toEqual('2');
  });

  it('should get current trip', done => {
    service.setId('2');

    spyOn(tripService, 'getTrip').and.returnValue(of(true));

    service.getCurrentTrip().subscribe(data => {
      expect(tripService.getTrip).toHaveBeenCalledWith(service.currentTripId);
      done();
    });
  });
});
