import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTeamsComponent } from './company-teams.component';

describe('CompanyTeamsComponent', () => {
  let component: CompanyTeamsComponent;
  let fixture: ComponentFixture<CompanyTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
