import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class HttpStatusService {
  private requestInProgress$: BehaviorSubject<boolean>;

  constructor() {
    this.requestInProgress$ = new BehaviorSubject(false);
  }

  setHttpIsPending(requestInProgress: boolean): void {
    this.requestInProgress$.next(requestInProgress);
  }

  getHttpStatus(): Observable<boolean> {
    return this.requestInProgress$.asObservable();
  }
}
