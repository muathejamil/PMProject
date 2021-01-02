import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerMainPageComponent } from './freelancer-main-page.component';

describe('FreelancerMainPageComponent', () => {
  let component: FreelancerMainPageComponent;
  let fixture: ComponentFixture<FreelancerMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
