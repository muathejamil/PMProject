import { Component, OnInit } from '@angular/core';
import { TeamService } from '../shared/team.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TeamEmployeeComponent } from '../team-employee/team-employee.component';
import { NgForm } from '@angular/forms';
import { Emp } from '../../company-projects/shared/emp.model';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  isValid: boolean = true;
  selectedEmployee: any;
  teamManagerList: Emp[] = [];
  teamEmployeeList: Emp[] = [];
  employeeTeam: Emp[] = [];
  EmployeeIDs: string[] = [];
  private employeesSub: Subscription;
  private managerSub: Subscription;

  constructor(
    public teamService: TeamService,
    private dialog: MatDialog,
    private toaster: ToastrService,
    public employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.employeeTeam = this.employeeService.EmployeeList;
    //call employee service to add them to employee list
    this.employeesSub = this.employeeService
      .getEmployyList()
      .subscribe((employee: Emp[]) => {
        this.teamManagerList = employee;
      });

    this.restFrom();
  }
  restFrom(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.teamService.teamForm = {
      teamName: '',
      teamID: null,
      managerID: null,
      teamEmp: '',
      teamTask: null,
      managerName: '',
    };
    //this.teamService.teamEmployee = [];
  }

  addOrEditEmployee(TeamEmployeeIndex, teamID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    dialogConfig.data = { TeamEmployeeIndex, teamID };

    this.dialog.open(TeamEmployeeComponent, dialogConfig);
  }

  onDeleteEmployee(employeeID: number, index: number) {
    this.teamEmployeeList.splice(index, 1);
  }

  validationForm() {
    this.isValid = true;
    if (this.teamService.teamForm.managerID == null) this.isValid = false;
    else if (this.teamService.teamEmployee.length == 0) this.isValid = false;
    return this.isValid;
  }

  onSubmit(form: NgForm) {
    for (let i = 0; i < this.teamEmployeeList.length; i++) {
      this.EmployeeIDs.push(this.teamEmployeeList[i].EmployeeID);
    }
    let unique = [...new Set(this.EmployeeIDs)];
    this.teamService.postTeam(
      form.value.teamName,
      form.value.teamManager,
      unique
    );
    //post the data to web api call saveOrUpdate Function
    this.toaster.success('Added Successfully');
    this.restFrom();
    this.teamEmployeeList = [];
  }
  onSubmitEmployee() {
    for (let index = 0; index < this.teamManagerList.length; index++) {
      if (this.teamManagerList[index].EmployeeID == this.selectedEmployee)
        this.teamEmployeeList.push(this.teamManagerList[index]);
    }
  }
}
