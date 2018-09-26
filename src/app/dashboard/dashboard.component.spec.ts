import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { DashboardComponent } from './dashboard.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DashboardService } from './dashboard.service';
import { Trip } from '../shared/models/Trip';
import { of } from 'rxjs/internal/observable/of';
import { SharedModule } from 'src/app/shared/shared.module';
import { mockTripApiResponse, mockDatesRange } from 'mocks/tests/data-mock';
import { TripComponent } from './trip/trip.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

class MockDashboardService {
  trips: Trip[] = mockTripApiResponse;

  getTrips() {
    return of(this.trips);
  }
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let dashboardService: DashboardService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule, SharedModule, BsDatepickerModule.forRoot()],
      declarations: [DashboardComponent, TripComponent, DatePickerComponent],
      providers: [{ provide: DashboardService, useClass: MockDashboardService }]
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
      component.onDatesChange(mockDatesRange);
      expect(component.datesRange).toEqual(mockDatesRange);
    });
  });
});
