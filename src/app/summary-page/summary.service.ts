import { Injectable } from '@angular/core';
import { TripFormService } from 'src/app/trip-details/trip-form/trip-form.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  summary$: Observable<any>;
  constructor(private tripFormService: TripFormService) {
    this.summary$ = this.tripFormService.form$;
  }
}
