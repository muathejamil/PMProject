import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FreeLancerService {
  FREEIdFOREmpPage:string;
  constructor(private http: HttpClient) {}
  gettasksList(id:string){//get tasks for one employee
    return this.http.post('http://localhost:3000/api/Freelancer/tasks' ,{id}).toPromise()

  }
  getTeamsList(id:string){//get tasks for one employee
   return this.http.post('http://localhost:3000/api/Freelancer/Teams' ,{id}).toPromise()

  }
 getone(id:string){
  return this.http.get('http://localhost:3000/api/Freelancer/' +id)

 }
}
