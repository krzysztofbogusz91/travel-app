import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { DashboardComponent } from './dashboard.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DatesFilterProviderService } from './dates-filter-provider.service';
import { Trip } from '../shared/models/trip.interface';
import { of } from 'rxjs/internal/observable/of';
import { SharedModule } from 'src/app/shared/shared.module';
import { mockTrips, mockDatesRange } from 'src/mocks/tests/data-mock';
import { TripComponent } from './trip/trip.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TripService } from 'src/app/trip-details/trip.service';
import { MockDashboardService } from 'src/mocks/tests/mock-services';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let dashboardService: DatesFilterProviderService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule, SharedModule, BsDatepickerModule.forRoot()],
      declarations: [DashboardComponent, TripComponent, DatePickerComponent],
      providers: [TripService, { provide: DatesFilterProviderService, useClass: MockDashboardService }]
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
    spyOn(dashboardService, 'updateDateRange');
    component.onDatesChange(mockDatesRange);
    expect(component.datesRange).toEqual(mockDatesRange);
  });
});
