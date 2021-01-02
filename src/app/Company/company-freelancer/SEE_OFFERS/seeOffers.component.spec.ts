import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeOfferscomponent } from './seeOffers.component';

describe('CompanyFreelancerComponent', () => {
  let component: SeeOfferscomponent;
  let fixture: ComponentFixture<SeeOfferscomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeOfferscomponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeOfferscomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
