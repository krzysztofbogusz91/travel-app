import { TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpStatusInterceptor } from './http-status.interceptor';
import { HttpStatusService } from './http-status.service';
import { httpInterceptorProviders } from '.';
import { catchError } from '../../../../node_modules/rxjs/operators';
import { of } from 'rxjs';

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

  it('should call setHttpStatus when request is pending', fakeAsync(() => {
    const url = 'some_api';
    spyOn(httpStatusService, 'setHttpIsPending').and.callThrough();

    http
    .get(url)
    .subscribe(() => {});

    httpMock.expectOne(url).flush({ resp: 'data' });

    tick(400);
    expect(httpStatusService.setHttpIsPending).toHaveBeenCalledWith(true);
    tick(100);
    expect(httpStatusService.setHttpIsPending).toHaveBeenCalledWith(false);
    tick(100);
    expect(httpStatusService.setHttpIsPending).toHaveBeenCalledTimes(6);
  }));
});
