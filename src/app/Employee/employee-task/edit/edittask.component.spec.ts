import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { edittask } from './edittask.component';

describe('ProjectTaskComponent', () => {
  let component: edittask;
  let fixture: ComponentFixture<edittask>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ edittask ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(edittask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
