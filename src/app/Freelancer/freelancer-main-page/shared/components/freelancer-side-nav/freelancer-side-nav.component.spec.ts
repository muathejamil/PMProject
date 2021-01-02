import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerSideNavComponent } from './freelancer-side-nav.component';

describe('FreelancerSideNavComponent', () => {
  let component: FreelancerSideNavComponent;
  let fixture: ComponentFixture<FreelancerSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
