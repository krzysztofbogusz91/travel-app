import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDetailsComponent } from './trip-details.component';
import { RouterModule } from '@angular/router';
import { TripFormComponent } from './trip-form/trip-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [TripDetailsComponent, TripFormComponent],
  exports: [TripDetailsComponent]
})
export class TripDetailsModule {}
