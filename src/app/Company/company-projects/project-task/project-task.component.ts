import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectTask } from '../shared/project-task.model';
import { Task } from '../shared/task.model';
import { NgForm } from '@angular/forms';
import { ProjectService } from '../shared/project.service';
import { TeamService } from '../../company-teams/shared/team.service';
import { Team } from '../../company-teams/shared/team.model';
import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/shared/employee.service';
import { TaskService } from '../shared/task.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-project-task',
  templateUrl: './project-task.component.html',
  styleUrls: ['./project-task.component.css'],
})
export class ProjectTaskComponent implements OnInit {
  formData: ProjectTask;
  taskList: Task[] = [{ taskID: 123, taskName: 'muath' }];

  isValid: boolean = true;
  TaskList:[];
  taskres:any;
  teamList: Team[] = [];
  employeeList:any=[];
  private teamSub: Subscription;
  private employeesSub: Subscription
  constructor(
    public employeeService: EmployeeService,
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public dialogRef: MatDialogRef<ProjectTaskComponent>,
    public projectService: ProjectService,
    private teamService: TeamService,
    private taskService:TaskService

  ) {}

  ngOnInit() {
    this.teamSub = this.teamService.getTeamList().subscribe((team: Team[]) => {
      this.teamList = team;
    });
      this.taskService.gettasksList(this.data.projectID).subscribe((data)=>{
        this.taskres=data;
        this.TaskList=this.taskres.Tasks;
})
    this.employeesSub = this.employeeService
      .getEmployyList()
      .subscribe((employee: any[]) => {
        this.employeeList = employee;
      });
    //console.log(this.data.projectID);
    if (this.data.projectTaskIndex == null)
      this.formData = {
        projectTaskID: null,
        projectID: this.data.projectID,
        taskID: 0,
        taskName: '',
        taskNumber: 0,
        teamName: '',
        teamID: null,
        employeename:null,
        task:null,
        depend:null,
        taskname:null,
        stDate:null,
        endDate:null
      };
    else
      this.formData = Object.assign(
        {},
        this.projectService.projectTask[this.data.projectTaskIndex]
      );
  }
  onSubmit(form: NgForm) {
    const startdate="12-6-2020"
    const enddate="12-7-2020"
    var depend=[]
    var emp=[]
    var team=[]



    if(form.value.teamName!=null)team.push(form.value.teamName);
    if(form.value.employeename!=null)emp.push(form.value.employeename);
    if(form.value.task!=null)depend.push(form.value.task);
    console.log(form.value);
   // console.log(emp);
    this.projectService.addtask(form.value.taskname,form.value.stDate,form.value.endDate,emp,
   team,form.value.depend,depend,this.data.projectID).subscribe((data)=>{
       console.log(data);
     })



     if (this.validateForm(form.value)) {
      if (this.data.projectTaskIndex == null){
      //console.log(form.value)
        this.projectService.projectTask.push(form.value);}
      else
        this.projectService.projectTask[this.data.projectTaskIndex] =
          form.value;
      this.dialogRef.close();
    }
  }

  validateForm(formData: ProjectTask) {
    this.isValid = true;
    if (formData.taskID == 0) this.isValid = false;
    else if (formData.teamName == null) this.isValid = false;

    return this.isValid;
  }
}
