import { TestBed } from '@angular/core/testing';
import { HttpStatusService } from './http-status.service';

describe('DashboardService', () => {
  let service: HttpStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpStatusService]
    });

    service = TestBed.get(HttpStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setHttpIsPending', () => {
    it('should stream given data as observable', async() => {
      service.setHttpIsPending(true);
      service.requestInProgress$.subscribe(requestStatus => {
        expect(requestStatus).toBeTruthy();
      });
    });
  });

  describe('getHttpStatus', () => {
    it('should subscribe to getStatus and return false', () => {
      service.getHttpStatus().subscribe(status => {
        expect(status).toBeFalsy();
      });
    });
  });
});
