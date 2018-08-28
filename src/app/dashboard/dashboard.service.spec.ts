import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { mockTripApiResponse } from 'mocks/tests/data-mock';
import { DashboardService } from './dashboard.service';
import { environment } from '../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http';

describe('DashboardService', () => {
  let httpTestingController: HttpTestingController;
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DashboardService]
    });

    service = TestBed.get(DashboardService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getTrips', () => {
    it('should return list of trips', () => {
      const mockTrips = mockTripApiResponse;

      service.getTrips().subscribe(trips => {
        expect(trips).toEqual(mockTrips);
      });

      const req = httpTestingController.expectOne(
        `${environment.tripsURL}trips`
      );

      expect(req.request.method).toEqual('GET');

      req.flush(mockTrips);

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

      const req = httpTestingController.expectOne(
        `${environment.tripsURL}trips`
      );

      expect(req.request.method).toEqual('GET');

      req.flush('error', mockError);

      httpTestingController.verify();
    });
  });
});
