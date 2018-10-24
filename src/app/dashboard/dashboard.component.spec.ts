import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { DashboardComponent } from './dashboard.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DatesFilterProviderService } from './dates-filter-provider.service';
import { Trip } from '../shared/models/trip.interface';
import { of } from 'rxjs/internal/observable/of';
import { SharedModule } from 'src/app/shared/shared.module';
import { mockTrips, mockDatesRange } from 'mocks/tests/data-mock';
import { TripComponent } from './trip/trip.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

class MockDashboardService {
  trips: Trip[] = mockTrips;

  getTrips() {
    return of(this.trips);
  }
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let dashboardService: DatesFilterProviderService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule, SharedModule, BsDatepickerModule.forRoot()],
      declarations: [DashboardComponent, TripComponent, DatePickerComponent],
      providers: [{ provide: DatesFilterProviderService, useClass: MockDashboardService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    dashboardService = TestBed.get(DatesFilterProviderService);
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have set component datesRange property', () => {
    component.onDatesChange(mockDatesRange);
    expect(component.datesRange).toEqual(mockDatesRange);
  });
});
