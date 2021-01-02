import { Injectable } from '@angular/core';
import { Team } from './team.model';
import { TeamEmployee } from './team-employee.model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Emp } from '../../company-projects/shared/emp.model';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  teamForm: Team;

  teamEmployee: Emp[] = [
    { EmployeeName: 'tamer', EmployeeID: '1111', EmployeePosition: 'compiler' ,email:"tariq.s.salman@gmail.com" },
  ];

  teamList: Team[];
  private teamUpdated = new Subject<Team[]>();

  constructor(private http: HttpClient) {}

  saveOrUpdateTeam() {
    //to save the whole record using Post
  }

  getTeamList() {
    this.http
      .get<{ message: string; Teams: any }>('http://localhost:3000/api/team')
      .pipe(
        map((postData) => {
          return postData.Teams.map((team) => {
            return {
              teamName: team.name,
              teamID: team._id,
              Employees: team.Employees,
              EmployeesNames:[],
              NumOfProjects:0,
              NumOfTasks:0,
              SuperVisor: team.superVisor,
              SuperVisorName:"",
              Tasks: team.tasks,
              Projects: team.projects,
            };
          });
        })
      )
      .subscribe((transformedPosts) => {
        this.teamList = transformedPosts;
        this.teamUpdated.next([...this.teamList]);
      });
    return this.teamUpdated.asObservable();
  }
  postTeam(name: string, superVisor: string, Employees: string[]) {
   console.log(name)
   console.log(superVisor)
   console.log(Employees)

    this.http
      .post<{ message: string; Id: any }>('http://localhost:3000/api/team', {
        name,
        superVisor,
        Employees,
      })
      .subscribe();
  }
  getone(id:string){
return this.http.get('http://localhost:3000/api/team/'+id)
  }
  updateteamemployee(id:string,employees:string[],uniqueemployee:string[],ManagerID:string,name:string){
    return this.http.post('http://localhost:3000/api/team/updateEmployee',{id,employees,uniqueemployee,ManagerID,name});

  }
}
