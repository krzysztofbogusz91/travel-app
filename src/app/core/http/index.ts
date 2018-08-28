import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpStatusInterceptor } from './http-status.interceptor';
import { HttpErrorInterceptor } from 'src/app/core/http/http-error.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpStatusInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
];
