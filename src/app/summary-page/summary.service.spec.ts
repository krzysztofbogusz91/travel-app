import { TestBed, inject } from '@angular/core/testing';

import { SummaryService } from './summary.service';
import { TripFormService } from 'src/app/trip-details/trip-form/trip-form.service';

describe('SummaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SummaryService, TripFormService]
    });
  });
});
