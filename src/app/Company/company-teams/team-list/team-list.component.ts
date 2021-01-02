import { Component, OnInit } from '@angular/core';
import { TeamService } from '../shared/team.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../company-projects/shared/project.service';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit {
  teamList;
  TeamListe: any[];

  private teamSub: Subscription;
  private empsub:Subscription;
  constructor(
    public teamService: TeamService,
    private empService: EmployeeService,
    private router: Router,
    private projService: ProjectService,
    private route:Router
  ) {}
  emp:any;
  emp1:{name:String,id:string}
  ngOnInit() {
    this.teamSub = this.teamService.getTeamList().subscribe((team: any[]) => {
      this.TeamListe = team;
      for (let i = 0; i < this.TeamListe.length; i++) {
        this.TeamListe[i].NumOfTasks = this.TeamListe[i].Tasks.length;
        this.TeamListe[i].NumOfProjects = this.TeamListe[i].Projects.length;
        for (let j = 0; j < this.TeamListe[i].Employees.length; j++) {
          this.empService.getone(this.TeamListe[i].Employees[j]).subscribe(
            (data)=> {this.emp= data
            this.TeamListe[i].EmployeesNames[j] =this.emp.employee.name;
          } );
          this.empService.getone(this.TeamListe[i].SuperVisor).subscribe(
            (data)=> {this.emp= data
            this.TeamListe[i].SuperVisorName =this.emp.employee.name;
          } );

        }
      }


    });

  }
  openForEdit(teamID: string) {
    //this.router.navigate(['/team/edit/'+ Fire]);
    //here we should take an id so we can edit the team

    this.route.navigate(['companyHeader/TEAMS/editTeam/' + teamID]);
  }
}
