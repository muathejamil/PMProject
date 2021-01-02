import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponentsComponent } from './employee-components.component';

describe('EmployeeComponentsComponent', () => {
  let component: EmployeeComponentsComponent;
  let fixture: ComponentFixture<EmployeeComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
