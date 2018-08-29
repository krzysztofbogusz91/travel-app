import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommunicateState } from 'src/app/shared/models/CommunicateState.interface';
import { CommunicateService } from 'src/app/shared/communicate.service';

@Component({
  selector: 'app-communicate',
  templateUrl: './communicate.component.html',
  styleUrls: ['./communicate.component.css']
})
export class CommunicateComponent implements OnInit {
  state$: Observable<CommunicateState>;
  constructor(private communicateService: CommunicateService) {}

  ngOnInit() {
    this.state$ = this.communicateService.state$;
  }

  hide(): void {
    this.communicateService.hide();
  }
}
