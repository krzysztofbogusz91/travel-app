import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TripFormService {
  _form$: BehaviorSubject<any>;
  form$: Observable<any>;

  constructor(private router: Router) {
    this._form$ = new BehaviorSubject(false);
    this.form$ = this._form$.asObservable();
  }

  submitFormEmitter(form) {
    this._form$.next(form);
    this.router.navigate(['/summary']);
  }
}
