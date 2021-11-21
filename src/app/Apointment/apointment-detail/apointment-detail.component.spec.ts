import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApointmentDetailComponent } from './apointment-detail.component';

describe('ApointmentDetailComponent', () => {
  let component: ApointmentDetailComponent;
  let fixture: ComponentFixture<ApointmentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApointmentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApointmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
