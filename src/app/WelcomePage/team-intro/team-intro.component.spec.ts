import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamIntroComponent } from './team-intro.component';

describe('TeamIntroComponent', () => {
  let component: TeamIntroComponent;
  let fixture: ComponentFixture<TeamIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
