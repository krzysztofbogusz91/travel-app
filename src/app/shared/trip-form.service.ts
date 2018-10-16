import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TripFormService {
  _form$: BehaviorSubject<any> = new BehaviorSubject(false);
  form$: Observable<any> = this._form$.asObservable();

  constructor(private router: Router) {}

  submitFormEmitter(form) {
    this._form$.next(form);
    this.router.navigate(['/summary']);
  }
}
