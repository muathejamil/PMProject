import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashSideBarComponent } from './dash-side-bar.component';

describe('DashSideBarComponent', () => {
  let component: DashSideBarComponent;
  let fixture: ComponentFixture<DashSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
