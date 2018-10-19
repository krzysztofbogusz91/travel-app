import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SummaryService } from 'src/app/summary-page/summary.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {
  summary$: Observable<FormGroup>;
  constructor(private summaryService: SummaryService) {}

  ngOnInit() {
    this.summary$ = this.summaryService.summary$;
  }
}
