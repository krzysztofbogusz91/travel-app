import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicateComponent } from 'src/app/shared/communicate/communicate.component';
import { TripService } from './trip.service';

@NgModule({
  imports: [CommonModule],
  declarations: [CommunicateComponent],
  exports: [CommunicateComponent]
})
export class SharedModule {}
