import { TestBed } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  let service: DashboardService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardService]
    });
    service = TestBed.get(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
