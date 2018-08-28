import { TestBed } from '@angular/core/testing';

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

  it('should change state when called show', async () => {
    const msg = 'msg';
    service.show(msg);

    service.state$.subscribe(stream => {
      expect(stream.message).toEqual(msg);
    });
  });

  it('should change state when called hide', async () => {
    service.hide();
    service.state$.subscribe(stream => {
      expect(stream.state).toBeFalsy();
    });
  });
});
