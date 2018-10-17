import { TestBed } from '@angular/core/testing';

import { SummaryService } from './summary.service';
import { TripFormService } from 'src/app/trip-details/trip-form/trip-form.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TripService } from 'src/app/trip-details/trip.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs/internal/observable/of';

describe('SummaryService', () => {
  const msg = { msg: 'works' };
  let httpTestingController: HttpTestingController;
  let service: SummaryService;
  let tripFormService: TripFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [SummaryService, TripFormService]
    });
    service = TestBed.get(SummaryService);
    tripFormService = TestBed.get(SummaryService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should allow to receive form summary', done => {
    service.summary$ = of(msg);
    service.summary$.subscribe(stream => {
      expect(stream).toEqual(msg);
      done();
    });
  });
});
