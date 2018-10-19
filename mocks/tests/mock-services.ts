import { of } from 'rxjs/internal/observable/of';

export class MockSummaryService {
  summary$ = of(null);
}

export class MockTripFormService {
  public submitFormEmitter(param) {}
}

export class MockStatusService {
  setHttpIsPending() {
    return of(true);
  }
  getHttpStatus() {
    return false;
  }
}
