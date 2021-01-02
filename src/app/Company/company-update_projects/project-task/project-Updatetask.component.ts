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
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TaskTeam } from '../project/TaskTeam.model';

@Component({
  selector: 'app-project-task',
  templateUrl: './project-Updatetask.component.html',
  styleUrls: ['./project-Updatetask.component.css'],
})
export class ProjectUpdateTaskComponent implements OnInit {
  formData: ProjectTask;
  NewtaskData: TaskTeam;
  taskList: Task[] = [{ taskID: 123, taskName: 'muath' }];

  isValid: boolean = true;
  TaskList: [];
  taskres: any;
  teamList: Team[] = [];
  employeeList: any = [];
  private teamSub: Subscription;
  private employeesSub: Subscription;
  task: any;
  constructor(
    public employeeService: EmployeeService,
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public dialogRef: MatDialogRef<ProjectUpdateTaskComponent>,
    public projectService: ProjectService,
    private teamService: TeamService,
    private taskService: TaskService,
    private toaster: ToastrService
  ) {}

  ngOnInit() {
  //  console.log(this.data)
    this.teamSub = this.teamService.getTeamList().subscribe((team: Team[]) => {
      this.teamList = team;
    });
    this.taskService.gettasksList(this.data.projectID).subscribe((data) => {
      this.taskres = data;
      this.TaskList = this.taskres.Tasks;
    });
    this.employeesSub = this.employeeService
      .getEmployyList()
      .subscribe((employee: any[]) => {
        this.employeeList = employee;
      });

    // if (this.data.taskID != null) {
    //   //this.taskService.getone(this.data.taskID)
    //   this.toaster.success('you r in edit operation');
    // }
    if (this.data.taskID!=null)
      this.formData = {
        projectTaskID: null,
        projectID: this.data.projectID,
        taskID: this.data.taskID.TaskID,
        taskName: this.data.taskID.TaskName,
        taskNumber: 0,
        teamName: this.data.taskID.TeamID,
        teamID: this.data.taskID.TeamID,
        employeename: this.data.taskID.EmployeeId,
        task: this.data.taskID.dependOn,
        depend: this.data.taskID.priority,//praiority
        taskname: this.data.taskID.TaskName,
        stDate: this.data.taskID.startdate,
        endDate: this.data.taskID.enddate,
      };
    else{
      this.formData = {
        projectTaskID: null,
        projectID: this.data.projectID,
        taskID: '',
        taskName: '',
        taskNumber: 0,
        teamName: '',
        teamID: null,
        employeename:null,
        task:null,
        depend:null,
        taskname:null,
        stDate:null,
        endDate:null}
    }

      ;

    // if (this.data.taskID != null) {
    //   console.log('aaaah ya zaman');
    // } else {
    //   //console.log(this.data.projectID);
    // }
  }
  onSubmit(form: NgForm) {


    var depend = [];
    var emp = [];
    var team = [];

    if(form.value.teamName!=null)team.push(form.value.teamName);
    if(form.value.employeename!=null)emp.push(form.value.employeename);
    if(form.value.task!=null)depend.push(form.value.task);

    //console.log(form.value);
    if(this.data.taskID==null){
      console.log( form.value.taskname,
        form.value.stDate,
        form.value.endDate,
        emp,
        team,
        form.value.depend,
        depend,
        this.data.projectID)
    this.projectService
      .addtask(
        form.value.taskname,
        form.value.stDate,
        form.value.endDate,
        emp,
        team,
        form.value.depend,
        depend,
        this.data.projectID
      )
      .subscribe((data) => {
       // console.log(data);
      });
    }
    else{//update
      console.log( this.data.taskID.TaskID,
        form.value.taskname,
        form.value.stDate,
        form.value.endDate,
        emp,
        team,
        form.value.depend,
        depend)
      this.projectService
      .Updatetask(
        this.data.taskID.TaskID,
        form.value.taskname,
        form.value.stDate,
        form.value.endDate,
        emp,
        team,
        form.value.depend,
        depend
      ).subscribe((data) => {
        //console.log(data);
      });

      }
    if (this.validateForm(form.value)) {
      if (this.data.projectTaskIndex == null) {
      } else
        this.projectService.projectTask[this.data.projectTaskIndex] =
          form.value;
      this.dialogRef.close();
    }


  }

  validateForm(formData: ProjectTask) {
    this.isValid = true;
    if (formData.taskID == '') this.isValid = false;
    else if (formData.teamName == null) this.isValid = false;

    return this.isValid;
  }
}
