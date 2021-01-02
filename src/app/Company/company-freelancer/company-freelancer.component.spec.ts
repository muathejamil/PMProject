import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFreelancerComponent } from './company-freelancer.component';

describe('CompanyFreelancerComponent', () => {
  let component: CompanyFreelancerComponent;
  let fixture: ComponentFixture<CompanyFreelancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyFreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
