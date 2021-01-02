import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerMinHeaderComponent } from './freelancer-min-header.component';

describe('FreelancerMinHeaderComponent', () => {
  let component: FreelancerMinHeaderComponent;
  let fixture: ComponentFixture<FreelancerMinHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerMinHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerMinHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
