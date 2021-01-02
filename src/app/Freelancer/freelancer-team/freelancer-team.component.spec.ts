import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerTeamComponent } from './freelancer-team.component';

describe('FreelancerTeamComponent', () => {
  let component: FreelancerTeamComponent;
  let fixture: ComponentFixture<FreelancerTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
