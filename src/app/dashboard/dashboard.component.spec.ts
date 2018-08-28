import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { DashboardComponent } from './dashboard.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TripDateRange } from '../shared/models/TripDateRange';
import { DashboardService } from './dashboard.service';
import { HttpStatusService } from '../core/http/http-status.service';

import { Trip } from '../shared/models/Trip';
import { of } from 'rxjs/internal/observable/of';

const trips: Trip[] = [{ name: 'trip1' }, { name: 'trip2' }];

class MockDashboardService {
  getTrips() {
    return of(trips);
  }
}

class MockStatusService {
  setHttpIsPending() {
    return of(true);
  }
  getHttpStatus() {
    return null;
  }
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let dashboardService: DashboardService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, BsDatepickerModule.forRoot()],
      declarations: [DashboardComponent, DatePickerComponent],
      providers: [
        { provide: DashboardService, useClass: MockDashboardService },
        { provide: HttpStatusService, useClass: MockStatusService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    dashboardService = TestBed.get(DashboardService);
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onDatesChange', () => {
    it('should have set component datesRange property', () => {
      const mockDatesRange: TripDateRange = {
        startDate: new Date(2018, 11, 17, 3, 24, 0),
        endDate: new Date(2018, 12, 17, 3, 24, 0)
      };

      component.onDatesChange(mockDatesRange);
      expect(component.datesRange).toEqual(mockDatesRange);
    });
  });
});
