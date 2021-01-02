import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeWidgetsComponent } from './employee-widgets.component';

describe('EmployeeWidgetsComponent', () => {
  let component: EmployeeWidgetsComponent;
  let fixture: ComponentFixture<EmployeeWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
