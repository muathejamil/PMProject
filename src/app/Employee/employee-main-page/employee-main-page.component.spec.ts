import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMainPageComponent } from './employee-main-page.component';

describe('EmployeeMainPageComponent', () => {
  let component: EmployeeMainPageComponent;
  let fixture: ComponentFixture<EmployeeMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
