import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpRequest
} from '@angular/common/http';
import { HttpStatusService } from './http-status.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommunicateService } from '../../shared/communicate.service';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private communicateService: CommunicateService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('error interceptor works')
    return next.handle(req).pipe(
     catchError(error => of(error))
    );
  }
}
