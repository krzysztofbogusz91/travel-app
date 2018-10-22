import { TestBed } from '@angular/core/testing';

import { TripFormService } from './trip-form.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { formMock } from 'mocks/tests/mocks';
import { TravelFormTemplate } from 'src/app/shared/models/travel-form-template.interface';

describe('TripFormService', () => {
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
    spyOn((service as any).router, 'navigate');

    service.submitFormEmitter(formMock);

    service.form$.subscribe((stream: TravelFormTemplate) => {
      expect(stream.personalData.email).toEqual(formMock.personalData.email);
      done();
    });
  });

  it('should redirect to summary page', () => {
    const navigateSpy = spyOn((service as any).router, 'navigate');
    service.submitFormEmitter(formMock);
    expect(navigateSpy).toHaveBeenCalledWith(['/summary']);
  });
});
