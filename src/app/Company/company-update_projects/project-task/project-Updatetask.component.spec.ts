import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUpdateTaskComponent } from './project-Updatetask.component';

describe('ProjectTaskComponent', () => {
  let component: ProjectUpdateTaskComponent;
  let fixture: ComponentFixture<ProjectUpdateTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectUpdateTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectUpdateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
