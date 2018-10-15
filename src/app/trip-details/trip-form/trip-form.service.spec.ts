import { TestBed, inject } from '@angular/core/testing';

import { TripFormService } from './trip-form.service';
import { CurrentTripProviderService } from 'src/app/trip-details/current-trip-provider.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('TripFormService', () => {
  let httpTestingController: HttpTestingController;
  let service: TripFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      providers: [TripFormService]
    });
    service = TestBed.get(TripFormService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
