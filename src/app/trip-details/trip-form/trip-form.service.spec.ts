import { TestBed } from '@angular/core/testing';

import { TripFormService } from './trip-form.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('TripFormService', () => {
  const msg = { msg: 'works' };
  let httpTestingController: HttpTestingController;
  let service: TripFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      providers: [TripFormService]
    });
    service = TestBed.get(TripFormService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should stream form on submit', done => {
    service.form$.subscribe(stream => {
      expect(stream).toEqual(msg);
      done();
    });
    service.submitFormEmitter(msg);
  });

  it('should redirect to summary page', () => {
    const navigateSpy = spyOn((service as any).router, 'navigate');
    service.submitFormEmitter(msg);
    expect(navigateSpy).toHaveBeenCalledWith('/trip-summary');
  });
});
