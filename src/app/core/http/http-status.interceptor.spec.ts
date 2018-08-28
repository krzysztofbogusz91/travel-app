import { TestBed, tick, fakeAsync, flush } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpStatusInterceptor } from 'src/app/core/http/http-status.interceptor';
import { HttpStatusService } from 'src/app/core/http/http-status.service';
import { httpInterceptorProviders } from 'src/app/core/http';
import { of } from 'rxjs/internal/observable/of';

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
