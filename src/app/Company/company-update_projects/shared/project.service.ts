import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { ProjectTask } from './project-task.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { OnInit } from '@angular/core';
import { TaskTeam } from '../project/TaskTeam.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService implements OnInit {
  formData: Project;
  projectTask: ProjectTask[];
  detalisTaskArray: TaskTeam[];
  private prjs: Project[] = [];
  private prjsUpdated = new Subject<Project[]>();
  constructor(private http: HttpClient) {}
  ngOnInit() {}

  saveOrUpdateProject() {
    //call when we want to insert the project to data base
  }

  getProjectByID(id: string): any {
    // function to return specific data based on the id
    return this.http.get('http://localhost:3000/api/prj/' + id).toPromise();
  }

  getProjectList() {
    this.http
      .get<{ message: string; prjs: any }>('http://localhost:3000/api/prj')
      .pipe(
        map((postData) => {
          return postData.prjs.map((prj) => {
            return {
              projectName: prj.name,
              stDate: prj.startdate,
              endDate: prj.enddate,
              projectManager: prj.supervisrId,
              projectID: prj._id,
              ManagerName: '',
              Tasks: prj.tasks,
            };
          });
        })
      )
      .subscribe((transformedPosts) => {
        this.prjs = transformedPosts;
        this.prjsUpdated.next([...this.prjs]);
      });
    return this.prjsUpdated.asObservable();
  }
  getPostUpdateListener() {
    return this.prjsUpdated.asObservable();
  }

  addprj(
    name: String,
    startdate: String,
    enddate: String,
    supervisrId: String
  ) {
    return this.http.post('http://localhost:3000/api/prj', {
      name,
      startdate,
      enddate,
      supervisrId,
    });
  }

  addtask(
    name: string,
    startdate: string,
    enddate: string,
    employee: any,
    teams: any,
    priority: number,
    dependOn: any,
    projectId: string
  ) {
    return this.http.post('http://localhost:3000/api/Task', {
      name,
      startdate,
      enddate,
      employee,
      teams,
      priority,
      dependOn,
      projectId,
    });
  }
  Updatetask( id:string,
    name: string,
    startdate: Date,
    enddate: string,
    emplyee: any,
    teams: any,
    priority: number,
    dependOn: any){
      console.log(startdate)
      return this.http.post('http://localhost:3000/api/Task/update', {
        id,
        name,
        startdate,
        enddate,
        emplyee,
        teams,
        priority,
        dependOn,

      });

  }
  getemployeeList(id: string) {
    //will return list of employees working on one project
    return this.http.post('http://localhost:3000/prj/Employees', { id });
  }
}
