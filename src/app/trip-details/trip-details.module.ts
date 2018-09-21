import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDetailsComponent } from './trip-details.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TripDetailsComponent],
  exports: [TripDetailsComponent]
})
export class TripDetailsModule {}
