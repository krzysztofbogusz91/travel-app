import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TripFormService {
  _form$: Subject<any> = new Subject();
  form$: Observable<any> = this._form$.asObservable();

  constructor(private router: Router) {}

  submitFormEmmiter(form) {
    console.log(form);
    this._form$.next(form);
    this.router.navigate(['/']);
  }
}
