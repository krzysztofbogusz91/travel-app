import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryPageComponent } from './summary-page.component';
import { TripFormService } from 'src/app/shared/trip-form.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('SummaryPageComponent', () => {
  let component: SummaryPageComponent;
  let fixture: ComponentFixture<SummaryPageComponent>;
  let tripFormService: TripFormService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [SummaryPageComponent],
      providers: [TripFormService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryPageComponent);
    component = fixture.componentInstance;
    tripFormService = TestBed.get(TripFormService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
