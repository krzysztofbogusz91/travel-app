import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpStatusService } from 'src/app/core/http/http-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading$: Observable<boolean>;
  constructor(private httpStatusService: HttpStatusService) {}
  ngOnInit() {
    this.isLoading$ = this.httpStatusService.getHttpStatus();
  }
}
