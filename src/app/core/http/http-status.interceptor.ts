import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpRequest
} from '@angular/common/http';
import { HttpStatusService } from 'src/app/core/http/http-status.service';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

@Injectable()
export class HttpStatusInterceptor implements HttpInterceptor {
  constructor(private httpStatusService: HttpStatusService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(() =>
        setTimeout(() => {
          this.httpStatusService.setHttpIsPending(true);
        })
      ),
      finalize(() =>
        setTimeout(() => this.httpStatusService.setHttpIsPending(false), 500)
      )
    );
  }
}
