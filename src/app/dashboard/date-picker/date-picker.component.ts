import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TripDateRange } from '../../shared/models/trip-date-range.interface';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  bsConfig: Partial<BsDatepickerConfig>;
  colorTheme = 'theme-dark-blue';
  startDate = new Date();
  rangeDates: Date[];
  endDate = new Date();

  @Output()
  rangeEmitter = new EventEmitter<TripDateRange>();

  constructor() {
    this.endDate.setDate(this.endDate.getDate() + 60);
    this.rangeDates = [this.startDate, this.endDate];
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
  }

  ngOnInit(): void {
    this.emitDateRangeToDashboard();
  }

  emitDateRangeToDashboard(): void {
    const dateRange = Object.assign({}, { startDate: this.rangeDates[0], endDate: this.rangeDates[1] });
    this.rangeEmitter.emit(dateRange);
  }
}
