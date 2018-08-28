import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { httpInterceptorProviders } from '.';
import { HttpErrorInterceptor } from 'src/app/core/http/http-error.interceptor';
import { CommunicateService } from 'src/app/shared/communicate.service';

describe('HttpErrorInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpClient,
        CommunicateService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorInterceptor,
          multi: true
        },
        httpInterceptorProviders
      ]
    });
    http = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
  });
});
