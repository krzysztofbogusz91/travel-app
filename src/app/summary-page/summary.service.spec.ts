import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs/internal/observable/of';
import { MockTripFormService } from 'src/mocks/tests/mock-services';
import { TripFormService } from 'src/app/trip-details/trip-form/trip-form.service';
import { SummaryService } from './summary.service';

describe('SummaryService', () => {
  let httpTestingController: HttpTestingController;
  let service: SummaryService;
  let tripFormService: TripFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [SummaryService, { provide: TripFormService, useClass: MockTripFormService }]
    });
    service = TestBed.get(SummaryService);
    tripFormService = TestBed.get(SummaryService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should allow to receive form summary', done => {
    const form = null;
    service.summary$ = of(null);
    service.summary$.subscribe(stream => {
      expect(stream).toEqual(form);
      done();
    });
  });
});
