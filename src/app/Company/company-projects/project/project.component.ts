import { Component, OnInit, Output } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProjectTaskComponent } from '../project-task/project-task.component';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Emp } from '../shared/emp.model';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Team } from '../../company-teams/shared/team.model';
import { TeamService } from '../../company-teams/shared/team.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  employeeList: Emp[] = [];
  lastProjectId:any;
  private employeesSub: Subscription;
   projectID:any;

  isValid: boolean = true;

  constructor(
    public projService: ProjectService,
    private dialog: MatDialog,
    public employeeService: EmployeeService,
    private toaster: ToastrService
  ) {}

  ngOnInit() {
    this.restFrom();

    this.employeesSub = this.employeeService
      .getEmployyList()
      .subscribe((employee: Emp[]) => {
        this.employeeList = employee;
      });
  }
  restFrom(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.projService.formData = {
      projectID:null,
      projectNO: Math.floor(100000 + Math.random() * 900000).toString(),
      projectName: '',
      projectManager: '',
      employeeID: 0,
      numOfTask: null,
      stDate: null,
      endDate: null,
      ManagerName:'',
      Tasks:[]
    };
    this.projService.projectTask = [];
  }
  addOrEditTask(projectTaskIndex, projectID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '65%';
    dialogConfig.data = { projectTaskIndex, projectID };

    this.dialog.open(ProjectTaskComponent, dialogConfig);
  }

  onDeleteTask(projectTaskID: number, Index: number) {
    this.projService.projectTask.splice(Index, 1);
  }
  validationForm() {
    this.isValid = true;
    if (this.projService.formData.employeeID == 0) this.isValid = false;
    else if (this.projService.projectTask.length == 0) this.isValid = false;

    return this.isValid;
  }

  onSubmit(form: NgForm) {
    //if (this.validationForm())
    this.projService.addprj(
      form.value.projectName,
      form.value.stDate,
      form.value.endDate,
      form.value.employeeID
    ).subscribe((data)=>{
      this.projectID=data
    this.projService.formData.projectID=this.projectID.id;
    //console.log(this.projectID.id);
    })
    this.toaster.success();
  }
}
