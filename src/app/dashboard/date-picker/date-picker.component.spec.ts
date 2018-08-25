import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DatePickerComponent } from "./date-picker.component";
import { FormsModule } from "node_modules/@angular/forms";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

describe("DatePickerComponent", () => {
  let component: DatePickerComponent;
  let fixture: ComponentFixture<DatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, BsDatepickerModule.forRoot()],
      declarations: [DatePickerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
