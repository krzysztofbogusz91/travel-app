import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, DatePickerComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
