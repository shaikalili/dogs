import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApointmentComponent } from './my-apointment.component';

describe('MyApointmentComponent', () => {
  let component: MyApointmentComponent;
  let fixture: ComponentFixture<MyApointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyApointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
