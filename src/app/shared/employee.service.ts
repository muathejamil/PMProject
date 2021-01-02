import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { Emp } from '../Company/company-projects/shared/emp.model';
import { Team } from '../Employee/employee-team/teamtoprint.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  EmployeeIdFOREmpPage:any
  formData: Employee;
  list: Employee[];
  EmployeeList: Emp[];
  TeamList:Team[]
  emp: any;
  employee1:any;

  private employeeUpdated = new Subject<Emp[]>();
  private TeamUpdated = new Subject<Team[]>();
  constructor(private http: HttpClient) {}

  postEmployee(
    name: string,
    email: string,
    password: string,
    Specialty: string,
    cmpanyid: string
  ) {
   return this.http
      .post<{ message: string; employees: any }>(
        'http://localhost:3000/api/Employee',
        { name, email, password, Specialty, cmpanyid }
      )

  }
  refreshList() {
    /**to connect with the backEnd */
  }

  putEmployee() {
    /**to connect with the backEnd to update employee */
  }

  getEmployeeUpdateListener() {
    return this.employeeUpdated.asObservable();
  }
  getTeamsUpdateListener() {
    return this.TeamUpdated.asObservable();
  }
  getEmployyList() {
    this.http
      .get<{ message: string; employees: any }>(
        'http://localhost:3000/api/Employee'
      )
      .pipe(
        map((postData) => {
          return postData.employees.map((employee) => {
            return {
              EmployeeName: employee.name,
              EmployeeID: employee._id,
              EmployeePosition: employee.specality,
              email:employee.email
            };
          });
        })
      )
      .subscribe((transformedPosts) => {
        this.EmployeeList = transformedPosts;
        this.employeeUpdated.next([...this.EmployeeList]);
      });
    return this.employeeUpdated.asObservable();
  }
  deleteEmployee(id: string) {
    this.http
      .delete('http://localhost:3000/api/Employee/' + id)
      .subscribe(() => {
        const updatedPosts = this.EmployeeList.filter(
          (employee) => employee.EmployeeID !== id
        );
        this.EmployeeList = updatedPosts;
        this.employeeUpdated.next([...this.EmployeeList]);
      });
  }
  getone(id: String){
    return this.http.get('http://localhost:3000/api/Employee/' +id);

  }
  getone1(id: String){
    return this.http.get('http://localhost:3000/api/Employee/' +id).toPromise();

  }
  getprojectsList(id:string){//get projects for one employee
    return this.http.post('http://localhost:3000/api/Employee/projects' ,{id});

  }
  gettasksList(id:string){//get tasks for one employee
    return this.http.post('http://localhost:3000/api/Employee/tasks' ,{id})


  }
  getTeamsList(id:string){//get tasks for one employee
   return this.http.post('http://localhost:3000/api/Employee/Teams' ,{id})

  }
}
