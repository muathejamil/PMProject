import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerTaskComponent } from './freelancer-task.component';

describe('FreelancerTaskComponent', () => {
  let component: FreelancerTaskComponent;
  let fixture: ComponentFixture<FreelancerTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
