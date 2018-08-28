import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpStatusInterceptor } from 'src/app/core/http/http-status.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpStatusInterceptor, multi: true }
];
