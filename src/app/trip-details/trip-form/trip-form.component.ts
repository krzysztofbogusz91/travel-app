import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.css']
})
export class TripFormComponent implements OnInit {
  @Output()
  close = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  onCloseClick(): void {
    this.close.emit(true);
  }
}
