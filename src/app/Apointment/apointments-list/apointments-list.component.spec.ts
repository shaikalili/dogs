import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApointmentsListComponent } from './apointments-list.component';

describe('ApointmentsListComponent', () => {
  let component: ApointmentsListComponent;
  let fixture: ComponentFixture<ApointmentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApointmentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApointmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
