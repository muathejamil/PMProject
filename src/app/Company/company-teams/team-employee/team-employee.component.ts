import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';
import { TeamEmployee } from '../shared/team-employee.model';
import { Emp } from '../../company-projects/shared/emp.model';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { TeamService } from '../shared/team.service';
import { Subscription } from 'rxjs';
import { templateJitUrl } from '@angular/compiler';
@Component({
  selector: 'app-team-employee',
  templateUrl: './team-employee.component.html',
  styleUrls: ['./team-employee.component.css'],
})
export class TeamEmployeeComponent implements OnInit {
  formData: Emp;
  isValid: boolean = true;

  private employeesSub: Subscription;
  //temp: Emp;
  employeeTeam: Emp[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialofRef: MatDialogRef<TeamEmployeeComponent>,
    public empService: EmployeeService,
    public teamService: TeamService
  ) {}

  ngOnInit() {
    this.employeeTeam = this.empService.EmployeeList;
    //call employee Service to bring list of employee
    if (this.data.TeamEmployeeIndex == null)
      this.formData = {
        EmployeeID: '',
        EmployeeName: '',
        EmployeePosition: '',
        email:''
      };
    else
      this.formData = Object.assign(
        {},
        this.teamService.teamEmployee[this.data.TeamEmployeeIndex]
      );
  }

  onSubmit(form: NgForm) {
    // if (this.validateForm(form.value)) {//
    // if (this.data.TeamEmployeeIndex == null) {    console.log(form.value);
    console.log(form.value);
    console.log(form.value.EmployeeName);

    console.log(form.value.employeeName.EmployeeID);
    console.log(form.value.employee);
    console.log(form.value.EmployeeID);
    console.log(form.value.employee.EmployeeID);

    this.teamService.teamEmployee.push(form.value.EmployeeName);

    //}
    //else
    ////this.teamService.teamEmployee[this.data.TeamEmployeeIndex] = form.value;
    // this.dialofRef.close();
    //}
  }
  validateForm(formData: TeamEmployee) {
    this.isValid = true;
    if (formData.employeeName == '') this.isValid = false;

    return this.isValid;
  }
}
