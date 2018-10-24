import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { mockTrips, mockServerResponse } from 'src/mocks/tests/data-mock';

import { environment } from '../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { TripService } from './trip.service';

describe('TripService', () => {
  let httpTestingController: HttpTestingController;
  let service: TripService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TripService]
    });

    service = TestBed.get(TripService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of trips', () => {
    service.getTrips().subscribe(trips => {
      expect(trips).toEqual(mockTrips);
    });

    const req = httpTestingController.expectOne(`${environment.tripsURL}trips`);

    expect(req.request.method).toEqual('GET');

    req.flush(mockServerResponse);

    httpTestingController.verify();
  });

  it('should return error when server responds with error', () => {
    const mockError = { status: 404, statusText: 'Not Found' };

    service.getTrips().subscribe(
      trips => {},
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(mockError.status);
        expect(error.statusText).toEqual(mockError.statusText);
      }
    );

    const req = httpTestingController.expectOne(`${environment.tripsURL}trips`);

    expect(req.request.method).toEqual('GET');

    req.flush('error', mockError);

    httpTestingController.verify();
  });

  it('should return trip by its id', () => {
    service.getTrip('1').subscribe(trip => {
      expect(trip).toEqual(mockTrips[0]);
    });

    const req = httpTestingController.expectOne(`${environment.tripsURL}trips`);

    expect(req.request.method).toEqual('GET');

    req.flush(mockServerResponse);

    httpTestingController.verify();
  });

  it('should return empty table when trip id is wrong', () => {
    service.getTrip('2023').subscribe(trip => {
      expect(trip).toBeUndefined();
    });

    const req = httpTestingController.expectOne(`${environment.tripsURL}trips`);

    expect(req.request.method).toEqual('GET');

    req.flush(mockServerResponse);

    httpTestingController.verify();
  });
});
