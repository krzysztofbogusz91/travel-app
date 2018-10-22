import { Injectable } from '@angular/core';
import { TripFormService } from 'src/app/trip-details/trip-form/trip-form.service';
import { Observable } from 'rxjs/internal/Observable';
import { TravelFormTemplate } from 'src/app/shared/models/travel-form-template.interface';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  summary$: Observable<TravelFormTemplate | boolean>;
  constructor(private tripFormService: TripFormService) {
    this.summary$ = this.tripFormService.form$;
  }
}
