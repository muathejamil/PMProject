import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Team } from 'src/app/Employee/employee-team/teamtoprint.model';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-employee-team',
  templateUrl: './employee-team.component.html',
  styleUrls: ['./employee-team.component.css'],
})
export class EmployeeTeamComponent implements OnInit {
  teamList:Team[]=[]
  teamres:any
  employee:any
  check:boolean=false;

  private employeesSub: Subscription;
  constructor(public empservices:EmployeeService) {}

  ngOnInit(){
    console.log(this.empservices.EmployeeIdFOREmpPage)

  this.empservices.getTeamsList(this.empservices.EmployeeIdFOREmpPage).subscribe((team)=>{
    this.teamres=team;
    this.teamList=this.teamres.Teams;
    for(let i=0;i<this.teamres.Teams.length;i++){
      this.teamList[i].EmployeeName =[];
    }
    for(let i=0;i<this.teamres.Teams.length;i++){
      this.teamList[i].TeamName=this.teamres.Teams[i].name;
      this.teamList[i].ManagerID=this.teamres.Teams[i].superVisor;
      this.teamList[i].EmployeeIDs=this.teamres.Teams[i].Employees;


      for(let j=0;j<this.teamList[i].EmployeeIDs.length;j++){
        this.empservices.getone(this.teamList[i].EmployeeIDs[j]).subscribe((data)=>{

          this.employee=data;
          this.teamList[i].EmployeeName.push(this.employee.employee.name);
          console.log(this.employee.employee.name);
        })
      }
      this.empservices.getone(this.teamres.Teams[i].superVisor).subscribe((data)=>{
        this.employee=data
        this.teamList[i].Managername=this.employee.employee.name



      })



    }
    });


}

}
