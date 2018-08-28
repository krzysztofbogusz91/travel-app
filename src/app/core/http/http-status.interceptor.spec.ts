import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpStatusInterceptor } from 'src/app/core/http/http-status.interceptor';
import { HttpStatusService } from 'src/app/core/http/http-status.service';

describe('HttpStatusInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;
  let httpStatusService: HttpStatusService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpStatusInterceptor,
          multi: true
        },
        HttpStatusService
      ]
    });
    http = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
    httpStatusService = TestBed.get(HttpStatusService);
  });

  beforeEach(() => {
    spyOn(httpStatusService, 'setHttpIsPending').and.callThrough();
    spyOn(httpStatusService, 'getHttpStatus').and.callThrough();
  });

  it('should call setHttpIsPending when any http request is pending', () => {
    const url = 'some-url';
    http.get(url).subscribe(() => {
      expect(httpStatusService.setHttpIsPending).toHaveBeenCalled();
    });
    const req = httpMock.expectOne(url);
    req.flush('done');
  });
});
