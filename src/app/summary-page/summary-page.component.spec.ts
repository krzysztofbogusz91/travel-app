import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryPageComponent } from './summary-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SummaryService } from 'src/app/summary-page/summary.service';
import { MockSummaryService } from 'mocks/tests/mock-services';
import { of } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

describe('SummaryPageComponent', () => {
  let component: SummaryPageComponent;
  let fixture: ComponentFixture<SummaryPageComponent>;
  let summaryService: SummaryService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [SummaryPageComponent],
      providers: [{ provide: SummaryService, useClass: MockSummaryService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryPageComponent);
    component = fixture.componentInstance;
    summaryService = TestBed.get(SummaryService);
    fixture.detectChanges();
  });

  it('should create', () => {
    component.summary$ = of(null);
    expect(component).toBeTruthy();
  });
});
