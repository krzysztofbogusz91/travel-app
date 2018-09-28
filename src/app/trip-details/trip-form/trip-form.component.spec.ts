import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripFormComponent } from './trip-form.component';
import { RouterTestingModule } from '@angular/router/testing';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { mockTripApiResponse } from 'mocks/tests/data-mock';
import { of } from 'rxjs';

describe('TripFormComponent', () => {
  let component: TripFormComponent;
  let fixture: ComponentFixture<TripFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [TripFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.trip$ = of(mockTripApiResponse[1]);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain reactive form element', () => {
    expect(component.travelForm).toBeTruthy();
  });

  it('should contain chosen trip data', done => {
    component.trip$.subscribe(data => {
      expect(data).not.toBeUndefined();
      done();
    });
  });
});
