import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDetailsComponent } from './trip-details.component';
import { RouterModule } from '@angular/router';
import { TripFormComponent } from './trip-form/trip-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [TripDetailsComponent, TripFormComponent],
  exports: [TripDetailsComponent, TripFormComponent]
})
export class TripDetailsModule {}
