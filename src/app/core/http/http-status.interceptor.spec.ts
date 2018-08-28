import { TestBed} from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpStatusInterceptor } from './http-status.interceptor';
import { HttpStatusService } from './http-status.service';
import { httpInterceptorProviders } from '.';

describe('HttpStatusInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;
  let httpStatusService: HttpStatusService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpClient,
        HttpStatusService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpStatusInterceptor,
          multi: true
        },
        httpInterceptorProviders
      ]
    });
    http = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
    httpStatusService = TestBed.get(HttpStatusService);
  });
});
