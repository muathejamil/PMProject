import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerFooterComponent } from './freelancer-footer.component';

describe('FreelancerFooterComponent', () => {
  let component: FreelancerFooterComponent;
  let fixture: ComponentFixture<FreelancerFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
