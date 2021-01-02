import { Component, OnInit } from '@angular/core';
import { TeamService } from '../shared/team.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TeamEmployeeComponent } from '../team-employee/team-employee.component';
import { NgForm } from '@angular/forms';
import { Emp } from '../../company-projects/shared/emp.model';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/shared/employee.service';
import { ActivatedRoute } from '@angular/router';
import { EditTeamModel } from './edit-team.model';

@Component({
  selector: 'app-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css'],
})
export class EditTeamComponent implements OnInit {
  isValid: boolean = true;
  selectedEmployee: any;
  teamManagerList: Emp[] = [];
  teamEmployeeList: Emp[] = [];
  teamEmployeeFitchedList: EditTeamModel[];
  employeeTeam: Emp[] = [];
  EmployeeIDs: string[] = [];
  respTeam: any;
  respEmployee: any;
  fitchedEmployeeIDs: string[] = [];
  teamIdForUpdate:string
  temp: EditTeamModel={
    name: "string",
    DOB: "string",
    salary: "string",
    age: "string",
    specality: "string",
    projects: ["1"],
    tasks: ["1"],
    subtasks: ["string"],
    teams: ["string"],
    cmpanyid: "string",
    email: "string",
    password: "string",
    Reports: ["string"],
    Reportstosee: ["string"],
    EmployeeID: "string",
    _id:"string"

  };
  uniqueemployee:string[]=[];
  private employeesSub: Subscription;
  private managerSub: Subscription;

  constructor(
    public teamService: TeamService,
    private dialog: MatDialog,
    private toaster: ToastrService,
    public employeeService: EmployeeService,
    private routeLink: ActivatedRoute
  ) {}

  ngOnInit() {
    this.employeeTeam = this.employeeService.EmployeeList;
    //call employee service to add them to employee list
    this.employeesSub = this.employeeService
      .getEmployyList()
      .subscribe((employee: Emp[]) => {
        this.teamManagerList = employee;
      });
     this.teamIdForUpdate = this.routeLink.snapshot.paramMap.get('id');
    this.teamService.getone(this.teamIdForUpdate).subscribe((res) => {
      this.respTeam = res;
      this.teamService.teamForm.teamName = this.respTeam.team.name;
      this.teamService.teamForm.managerName = this.respTeam.team.superVisor;
      this.teamEmployeeFitchedList = [];
      this.fitchedEmployeeIDs = [];
      this.fitchedEmployeeIDs.push(this.respTeam.team.Employees);

      for (let i = 0; i < this.respTeam.team.Employees.length; i++) {
        this.employeeService
          .getone(this.respTeam.team.Employees[i])
          .subscribe((res4) => {
            this.respEmployee = res4;
            this.teamEmployeeFitchedList.push(this.respEmployee.employee);
          });
        //this.teamEmployeeFitchedList[i].EmployeeID = this.respTeam.team.Employees[i];
      }
     // console.log(this.teamEmployeeFitchedList);
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
    this.teamEmployeeFitchedList.splice(index, 1);
  }

  validationForm() {
    this.isValid = true;
    if (this.teamService.teamForm.managerID == null) this.isValid = false;
    else if (this.teamService.teamEmployee.length == 0) this.isValid = false;
    return this.isValid;
  }

  onSubmit(form: NgForm) {

    for (let i = 0; i < this.teamEmployeeFitchedList.length; i++) {
      if(this.teamEmployeeFitchedList[i].EmployeeID !=null){
      this.EmployeeIDs.push(this.teamEmployeeFitchedList[i].EmployeeID);
      this.uniqueemployee.push(this.teamEmployeeFitchedList[i].EmployeeID)
    }
      else{
        let T=this.teamEmployeeFitchedList[i]
        this.EmployeeIDs.push(T._id)
      }
    }
    let unique = [...new Set(this.EmployeeIDs)];
    console.log(unique)
    this.teamService.updateteamemployee(this.teamIdForUpdate,
      unique,this.uniqueemployee,form.value.teamManager,form.value.teamName
    ).subscribe((data)=>{
     console.log(data)
    })
    //post the data to web api call saveOrUpdate Function
    this.toaster.success('Added Successfully');
    this.restFrom();
    this.teamEmployeeList = [];
  }
  onSubmitEmployee() {

    for (let index = 0; index < this.teamManagerList.length; index++) {
      if (this.teamManagerList[index].EmployeeID == this.selectedEmployee) {
        //console.log(this.teamManagerList[index])
        this.temp.EmployeeID = this.teamManagerList[index].EmployeeID;
        this.temp.name = this.teamManagerList[index].EmployeeName;
        this.temp.specality = this.teamManagerList[index].EmployeePosition;
        this.teamEmployeeFitchedList.push(this.temp);
      }
   }
  //  console.log(this.teamEmployeeFitchedList);
  }

}
