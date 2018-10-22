import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommunicateState } from 'src/app/shared/models/communicate-state.interface';

@Injectable({
  providedIn: 'root'
})
export class CommunicateService {
  comState = {
    show: true,
    hide: false
  };

  private _state$: BehaviorSubject<CommunicateState>;
  state$: Observable<CommunicateState>;

  constructor() {
    this._state$ = new BehaviorSubject<CommunicateState>({
      state: this.comState.hide
    });
    this.state$ = this._state$.asObservable();
  }

  show(message: string): void {
    this._state$.next({ message, state: this.comState.show });
    setTimeout(() => {
      this._state$.next({ state: this.comState.hide });
    }, 3000);
  }

  hide(): void {
    this._state$.next({ state: this.comState.hide });
  }
}
