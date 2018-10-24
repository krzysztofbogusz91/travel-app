import { of } from 'rxjs/internal/observable/of';
import { TravelFormTemplate } from 'src/app/shared/models/travel-form-template.interface';

export class MockSummaryService {
  summary$ = of(null);
}

export class MockTripFormService {
  public submitFormEmitter(param: TravelFormTemplate | boolean) {}
}

export class MockStatusService {
  setHttpIsPending() {
    return of(true);
  }
  getHttpStatus() {
    return false;
  }
}
