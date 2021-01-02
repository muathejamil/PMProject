import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project.model';
import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/shared/employee.service';
import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';
import { Router,NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css'],
})
export class ProjectsListComponent implements OnInit {
  projectList: Project;

  projList: Project[] = [];
  emp:any

  private postsSub: Subscription;

  constructor(private router:Router, public service: ProjectService, private empService: EmployeeService,
    ) {}

  ngOnInit() {
    this.postsSub = this.service
      .getProjectList()
      .subscribe((prjs: any[]) => {
        this.projList = prjs;
        for(let i=0;i<this.projList.length;i++){
          this.empService.getone(this.projList[i].projectManager).subscribe((data)=>{
            this.emp=data;
            this.projList[i].ManagerName=this.emp.employee.name
          })
          this.projList[i].numOfTask=this.projList[i].Tasks.length;
        }
      });
  }
  edit(prj:any){
    const navigationExtras: NavigationExtras = {
      state: {
       project:prj
      }
    };
    this.router.navigate(['/companyHeader/PROJECTS/Update'], navigationExtras);
  }
}
