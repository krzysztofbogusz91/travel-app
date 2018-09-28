import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripFormComponent } from './trip-form.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TripFormComponent', () => {
  let component: TripFormComponent;
  let fixture: ComponentFixture<TripFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TripFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
