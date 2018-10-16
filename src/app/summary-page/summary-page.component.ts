import { Component, OnInit } from '@angular/core';
import { TripFormService } from 'src/app/trip-details/trip-form/trip-form.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {
  summary$: Observable<any>;
  constructor(private tripFormService: TripFormService) {}

  ngOnInit() {
    this.summary$ = this.tripFormService.form$;
  }
}
