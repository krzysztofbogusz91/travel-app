import { Component, Input } from '@angular/core';
import { Trip } from '../../shared/models/trip.interface';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent {
  @Input()
  trip: Trip;
}
