import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeReportscomponent } from './SeeReports.component';

describe('CompanyFreelancerComponent', () => {
  let component: SeeReportscomponent;
  let fixture: ComponentFixture<SeeReportscomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeReportscomponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeReportscomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
