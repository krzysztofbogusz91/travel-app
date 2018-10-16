import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CommunicateService } from './communicate.service';

describe('CommunicateService', () => {
  let service: CommunicateService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommunicateService]
    });
    service = TestBed.get(CommunicateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('show method', () => {
    const msg = 'msg';

    it('should change initial state when called show and display msg', async () => {
      service.show(msg);

      service.state$.subscribe(stream => {
        expect(stream.message).toEqual(msg);
        expect(stream.state).toBeTruthy();
      });
    });

    it('should change state to false after 3s and hide msg', fakeAsync(() => {
      service.show(msg);
      tick(3001);

      service.state$.subscribe(stream => {
        expect(stream.message).not.toEqual(msg);
        expect(stream.state).toBeFalsy();
      });
    }));
  });

  it('should change state when called hide', async () => {
    service.hide();
    service.state$.subscribe(stream => {
      expect(stream.state).toBeFalsy();
    });
  });
});
