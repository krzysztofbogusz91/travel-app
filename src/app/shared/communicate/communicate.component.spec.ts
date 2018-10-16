import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicateComponent } from './communicate.component';
import { CommunicateService } from 'src/app/shared/communicate/communicate.service';

describe('CommunicateComponent', () => {
  let component: CommunicateComponent;
  let fixture: ComponentFixture<CommunicateComponent>;
  let communicateService: CommunicateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommunicateComponent],
      providers: [CommunicateService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicateComponent);
    component = fixture.componentInstance;
    communicateService = TestBed.get(CommunicateService);
    component.hide();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service method hide when communicate hide method is called', () => {
    spyOn(communicateService, 'hide');
    component.hide();
    expect(communicateService.hide).toHaveBeenCalled();
  });
});
