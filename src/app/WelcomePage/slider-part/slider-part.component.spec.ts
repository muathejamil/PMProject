import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPartComponent } from './slider-part.component';

describe('SliderPartComponent', () => {
  let component: SliderPartComponent;
  let fixture: ComponentFixture<SliderPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
