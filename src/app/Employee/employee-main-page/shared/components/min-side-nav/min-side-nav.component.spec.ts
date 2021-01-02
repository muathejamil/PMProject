import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinSideNavComponent } from './min-side-nav.component';

describe('MinSideNavComponent', () => {
  let component: MinSideNavComponent;
  let fixture: ComponentFixture<MinSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
