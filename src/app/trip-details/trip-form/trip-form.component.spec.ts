import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { TripFormComponent } from './trip-form.component';
import { CurrentTripProviderService } from 'src/app/trip-details/current-trip-provider.service';
import { TripFormService } from 'src/app/trip-details/trip-form/trip-form.service';
import { MockTripFormService } from 'mocks/tests/mock-services';
import { mockTripApiResponse } from 'mocks/tests/data-mock';

describe('TripFormComponent', () => {
  let component: TripFormComponent;
  let fixture: ComponentFixture<TripFormComponent>;
  let tripFormService: TripFormService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      providers: [CurrentTripProviderService, { provide: TripFormService, useClass: MockTripFormService }],
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

  it('should contain reactive form element', done => {
    component.travelForm$ = component.updateFormWithTrip(component.trip$);
    component.travelForm$.subscribe(form => {
      expect(form).toBeTruthy();
      done();
    });
  });

  it('trip Details upgrade should be falsy', done => {
    component.createForm().subscribe(template => {
      const travelFormControls = template.controls;
      const tripDetails = travelFormControls.tripDetails.controls['upgrade'];

      expect(tripDetails.value).toBeFalsy();
      done();
    });
  });

  it('should submit form', () => {
    const submitSpy = spyOn(tripFormService, 'submitFormEmitter');
    component.onSubmit();
    expect(submitSpy).toHaveBeenCalled();
    expect(submitSpy).toHaveBeenCalledWith(component.travelFormTemplate.value);
  });

  it('should not validate empty form', done => {
    component.createForm().subscribe(template => {
      expect(template.invalid).toBeTruthy();
      done();
    });
  });

  it('should validate form', done => {
    component.createForm().subscribe(template => {
      const travelFormControls = template.controls;
      travelFormControls.personalData.controls['email'].setValue('mac@adf');
      travelFormControls.personalData.controls['firstName'].setValue('John');
      travelFormControls.personalData.controls['lastName'].setValue('Doe');
      expect(template.valid).toBeTruthy();
      done();
    });
  });

  it('should validate email', done => {
    component.createForm().subscribe(template => {
      const travelFormControls = template.controls;
      travelFormControls.personalData.controls['email'].setValue('macadf');
      travelFormControls.personalData.controls['firstName'].setValue('John');
      travelFormControls.personalData.controls['lastName'].setValue('Doe');
      expect(template.valid).toBeFalsy();
      done();
    });
  });

  it('should update total price when upgrated', done => {
    component.createForm(mockTripApiResponse[1]).subscribe(template => {
      template.value.tripDetails.upgrade = true;
      component.updateTripPrice(mockTripApiResponse[1].price);
      expect(template.value.tripDetails.price).toEqual('2200$');
      done();
    });
  });

  it('should not update total price when upgrated is unmarked', done => {
    component.createForm(mockTripApiResponse[1]).subscribe(template => {
      template.value.tripDetails.upgrade = false;
      component.updateTripPrice(mockTripApiResponse[1].price);
      expect(template.value.tripDetails.price).toEqual('2000$');
      done();
    });
  });

  it('should update form with trip details', done => {
    component.travelForm$ = component.updateFormWithTrip(component.trip$);
    component.travelForm$.subscribe(form => {
      expect(form.value.tripDetails.tripName).toEqual(mockTripApiResponse[1].name);
      expect(form.value.tripDetails.price).toEqual(mockTripApiResponse[1].price);
      done();
    });
  });
});
