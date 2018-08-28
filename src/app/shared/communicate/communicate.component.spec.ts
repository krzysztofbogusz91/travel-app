import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicateComponent } from './communicate.component';

describe('ComunicateComponent', () => {
  let component: ComunicateComponent;
  let fixture: ComponentFixture<ComunicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
