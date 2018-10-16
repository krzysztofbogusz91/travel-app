import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripFormComponent } from './trip-form.component';
import { RouterTestingModule } from '@angular/router/testing';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { mockTripApiResponse } from 'mocks/tests/data-mock';
import { of } from 'rxjs';
import { CurrentTripProviderService } from 'src/app/trip-details/current-trip-provider.service';
import { TripFormService } from 'src/app/trip-details/trip-form/trip-form.service';

describe('TripFormComponent', () => {
  let component: TripFormComponent;
  let fixture: ComponentFixture<TripFormComponent>;
  let tripFormService: TripFormService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      providers: [CurrentTripProviderService, TripFormService],
      declarations: [TripFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripFormComponent);
    component = fixture.componentInstance;
    tripFormService = TestBed.get(TripFormService);
    fixture.detectChanges();
    component.trip$ = of(mockTripApiResponse[1]);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain chosen trip data', done => {
    component.trip$.subscribe(data => {
      expect(data).not.toBeUndefined();
      done();
    });
  });

  it('should contain reactive form element', () => {
    expect(component.travelForm).toBeTruthy();
  });

  it('trip Details upgrade should be falsy', () => {
    const travelFormControls = component.travelForm.controls;
    const tripDetails = travelFormControls.tripDetails.controls['upgrade'];

    expect(tripDetails.value).toBeFalsy();
  });

  it('should submit form', () => {
    const submitFormSpy = spyOn(tripFormService, 'submitFormEmitter');
    component.onSubmit();
    expect(submitFormSpy).toHaveBeenCalled();
    expect(submitFormSpy).toHaveBeenCalledWith(component.travelForm.value);
  });
});
