import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { DashboardComponent } from './dashboard.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { TripComponent } from './trip/trip.component';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule, SharedModule, BsDatepickerModule.forRoot()],
  declarations: [DashboardComponent, DatePickerComponent, TripComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {}
