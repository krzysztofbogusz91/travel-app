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
import { catchError } from '../../../../node_modules/rxjs/operators';

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

  it('should retrun observable of error when http request has an error', done => {
    const url = 'url';
    const myError = { status: 404, statusText: 'bad request' };

    http
      .get(url)
      .pipe(catchError((error) => of(error.status)))
      .subscribe(error => {
        expect(error).toBe(404);
        done();
      });

    httpMock.expectOne(url).flush('error', myError);
  });
});
