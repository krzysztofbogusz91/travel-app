import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SummaryService } from 'src/app/summary-page/summary.service';
import { TravelFormTemplate } from 'src/app/shared/models/travel-form-template.interface';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {
  summary$: Observable<TravelFormTemplate | boolean>;
  constructor(private summaryService: SummaryService) {}

  ngOnInit() {
    this.summary$ = this.summaryService.summary$;
  }
}
