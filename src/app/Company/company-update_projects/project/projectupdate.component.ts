import { Component, OnInit, Output } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Emp } from '../shared/emp.model';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

import { Router, ActivatedRoute } from '@angular/router';

import { Task1 } from './newTask.model';
import { TaskTeam } from './TaskTeam.model';

import { TaskService } from '../shared/task.service';
import { Task } from '../shared/task.model';
import { TeamService } from '../../company-teams/shared/team.service';
import { ProjectUpdateTaskComponent } from '../project-task/project-Updatetask.component';
import { SeeReportscomponent } from '../../company-projects/seereports/SeeReports.component';

@Component({
  selector: 'app-projectupdate',
  templateUrl: './projectupdate.component.html',
  styleUrls: ['./projectupdate.component.css'],
})
export class ProjectUpdateComponent implements OnInit {
  employeeList: Emp[] = [];
  public lastProjectId: any;
  private employeesSub: Subscription;
  public projectID: any;
  Project: any;
  isValid: boolean = true;
  projectSubmited = false;
  tasksArray: Task1[] = [];
  respons: any;
  respons1: any;
  taskarray: Task1[] = [];
  detalisTaskArray: TaskTeam[] = [];
  ResevedProject:any

  constructor(
    public projService: ProjectService,
    private dialog: MatDialog,
    public employeeService: EmployeeService,
    private toaster: ToastrService,
    private router: Router,
    private currentRoute: ActivatedRoute,
    private taskService: TaskService,
    private teamService: TeamService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.ResevedProject = navigation.extras.state
console.log( this.ResevedProject)
    //ManagerName: "nader"
//Tasks: (4) ["5ec486ea2eb7232e68075d77", "5ec4879a2eb7232e68075d79", "5ec487ee2eb7232e68075d7a", "5ec4883e2eb7232e68075d7b"]
//endDate: "2020-05-29T21:00:00.000Z"
//numOfTask: 4
//projectID: "5ec4850f2eb7232e68075d75"
////projectManager: "5ebb1ee40da58c16842cb78f"
//projectName: "ALI PROJECT"
//stDate: "2020-05-11T21:00:00.000Z"
}



  ngOnInit() {
    this.projectID = this.ResevedProject.project.projectID
    this.lastProjectId=this.ResevedProject.project.projectID//passing the id of the project we want to update
    if (this.projectID == null)
      //new project added not update process
      this.restFrom();
    else {
      this.projService.formData=this.ResevedProject.project

        this.projService.formData.projectName = this.ResevedProject.project.projectName
        this.projService.formData.employeeID = this.ResevedProject.project.projectManager
        this.projService.formData.stDate = this.ResevedProject.project.stDate
        this.projService.formData.endDate = this.ResevedProject.project.endDate
        this.detalisTaskArray = this.ResevedProject.project.Tasks
        for (let i = 0; i < this.ResevedProject.project.Tasks.length; i++) {
        //this.projService.projectTask[i].taskID = res.project.tasks[i];
        this.taskarray.push(this.ResevedProject.project.Tasks[i]);

          this.taskService.getone(this.ResevedProject.project.Tasks[i]).subscribe((res1) => {
            this.respons = res1;
            this.detalisTaskArray[i] = this.respons.task;
            this.detalisTaskArray[i].TaskID = this.respons.task._id;
            this.detalisTaskArray[i].TaskName = this.respons.task.name;
            this.detalisTaskArray[i].TeamsName = this.respons.task.teams;
            this.detalisTaskArray[i].EmployeeId = this.respons.task.emplyee[0];
            this.detalisTaskArray[i].dependOn = this.respons.task.dependOn[0];
            this.detalisTaskArray[i].StartDate = this.respons.task.startdate;
            this.detalisTaskArray[i].EndDate = this.respons.task.enddate;
            this.detalisTaskArray[i].Finished=this.respons.task.Finished
            this.detalisTaskArray[i].Reports=this.respons.task.Reports
            this.detalisTaskArray[i].priority = this.respons.task.priority;
            this.detalisTaskArray[i].TeamID=this.respons.task.teams[0]

            // console.log(this.detalisTaskArray[i].TaskID);
            // console.log(this.detalisTaskArray[i].TaskName);
            for (let j = 0; j < this.respons.task.teams.length; j++) {
              this.teamService
                .getone(this.respons.task.teams[j])
                .subscribe((res) => {
                  this.respons1 = res;

                  this.detalisTaskArray[i].TeamsName[
                    j
                  ] = this.respons1.team.name;

                  // console.log(this.detalisTaskArray[i].TeamsName[j]);
                });
            }
          });

          //console.log(this.taskarray[i]);
        }

    }

    this.employeesSub = this.employeeService
      .getEmployyList()
      .subscribe((employee: Emp[]) => {
        this.employeeList = employee;
      });
  }


  restFrom(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.projService.formData = {
      projectID: null,
      projectNO: Math.floor(100000 + Math.random() * 900000).toString(),
      projectName: '',
      projectManager: '',
      employeeID: 0,
      numOfTask: null,
      stDate: null,
      endDate: null,
      ManagerName: '',
      Tasks: [],
    };
  }
  //for adding and deleting tasks
  addOrEditTask( projectID, taskID, ) {
    // if (projectID == null) {
    //   this.toaster.error(
    //     'Project Should be added then you can manage the tasks'
    //   );
    // } else {
    //taskID = this.taskarray[projectTaskIndex];

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    dialogConfig.data = { projectID, taskID };

    this.dialog.open(ProjectUpdateTaskComponent, dialogConfig).afterClosed().subscribe(()=>{
      this.ngOnInit()
    })
    //}
  }

  onDeleteTask(projectTaskID: number, Index: number) {
    this.projService.projectTask.splice(Index, 1);
    //projectTaskID for updating the whole record;
  }
  validationForm() {
    this.isValid = true;
    if (this.projService.formData.employeeID == 0) this.isValid = false;
    else if (this.projService.formData.projectName == '') this.isValid = false;

    return this.isValid;
  }

  onSubmit(form: NgForm) {
    if (this.validationForm()) {
      this.projectSubmited = true; //checking if a new project add or not
      this.projService
        .addprj(
          form.value.projectName,
          form.value.stDate,
          form.value.endDate,
          form.value.employeeID
        )
        .subscribe((data) => {
          this.projectID = data;
          this.projService.formData.projectID = this.projectID.id;
          //console.log(this.projectID.id);
        });

      this.toaster.success('Project Added Successfully');
      //this.route.navigate(['companyHeader/PROJECTS/projectList']);
      this.restFrom();
    }
  }
  SeeReports(task:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    dialogConfig.data = {task};

    this.dialog.open(SeeReportscomponent, dialogConfig).afterClosed().subscribe(()=>{
      this.ngOnInit()
    })

  }
}

