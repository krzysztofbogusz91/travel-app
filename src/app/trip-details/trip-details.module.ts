import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDetailsComponent } from './trip-details.component';
import { RouterModule } from '@angular/router';
import { TripFormComponent } from './trip-form/trip-form.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TripDetailsComponent, TripFormComponent],
  exports: [TripDetailsComponent]
})
export class TripDetailsModule {}
