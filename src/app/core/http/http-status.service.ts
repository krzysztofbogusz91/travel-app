import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class HttpStatusService {
  private _requestInProgress$: BehaviorSubject<boolean>;
  requestInProgress$: Observable<boolean>;
  constructor() {
    this._requestInProgress$ = new BehaviorSubject(false);
    this.requestInProgress$ = this._requestInProgress$.asObservable();
  }

  setHttpIsPending(requestInProgress: boolean): void {
    this._requestInProgress$.next(requestInProgress);
  }

  getHttpStatus(): Observable<boolean> {
    return this.requestInProgress$;
  }
}
