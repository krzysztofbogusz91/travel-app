import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpRequest
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommunicateService } from 'src/app/shared/communicate.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private communicateService: CommunicateService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        this.communicateService.show('error msg');
        return of(error);
      })
    );
  }
}
