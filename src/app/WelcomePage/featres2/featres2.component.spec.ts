import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Featres2Component } from './featres2.component';

describe('Featres2Component', () => {
  let component: Featres2Component;
  let fixture: ComponentFixture<Featres2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Featres2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Featres2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
