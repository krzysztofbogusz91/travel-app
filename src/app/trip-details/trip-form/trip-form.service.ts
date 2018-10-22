import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { TravelFormTemplate } from 'src/app/shared/models/travel-form-template.interface';

@Injectable({
  providedIn: 'root'
})
export class TripFormService {
  _form$: BehaviorSubject<TravelFormTemplate | boolean>;
  form$: Observable<TravelFormTemplate | boolean>;

  constructor(private router: Router) {
    this._form$ = new BehaviorSubject(false);
    this.form$ = this._form$.asObservable();
  }

  submitFormEmitter(form: TravelFormTemplate) {
    this._form$.next(form);
    this.router.navigate(['/summary']);
  }
}
