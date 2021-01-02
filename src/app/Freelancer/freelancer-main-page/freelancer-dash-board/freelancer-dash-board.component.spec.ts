import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerDashBoardComponent } from './freelancer-dash-board.component';

describe('FreelancerDashBoardComponent', () => {
  let component: FreelancerDashBoardComponent;
  let fixture: ComponentFixture<FreelancerDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
