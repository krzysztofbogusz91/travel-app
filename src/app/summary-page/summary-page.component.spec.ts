import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryPageComponent } from './summary-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SummaryService } from 'src/app/summary-page/summary.service';

describe('SummaryPageComponent', () => {
  let component: SummaryPageComponent;
  let fixture: ComponentFixture<SummaryPageComponent>;
  let summaryService: SummaryService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [SummaryPageComponent],
      providers: [SummaryService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryPageComponent);
    component = fixture.componentInstance;
    summaryService = TestBed.get(SummaryService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
