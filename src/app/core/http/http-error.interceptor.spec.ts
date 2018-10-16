import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpErrorInterceptor } from 'src/app/core/http/http-error.interceptor';
import { CommunicateService } from 'src/app/shared/communicate/communicate.service';

describe('HttpErrorInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;
  let communicateService: CommunicateService;

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
        }
      ]
    });
    http = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
    communicateService = TestBed.get(CommunicateService);
  });

  it('should call show method with error msg when request return error', async () => {
    const url = 'wrong_api';
    spyOn(communicateService, 'show').and.callThrough();

    http.get(url).subscribe(() => {
      expect(communicateService.show).toHaveBeenCalledWith('error msg');
    });

    httpMock.expectOne(url).flush({ error: 'error msg' }, { status: 404, statusText: 'error msg' });
  });

  it('should not to call show method when request is correct', async () => {
    const url = 'some_api';
    spyOn(communicateService, 'show').and.callThrough();

    http.get(url).subscribe(() => {
      expect(communicateService.show).not.toHaveBeenCalled();
    });

    httpMock.expectOne(url).flush({ data: 'mock data' });
  });
});
