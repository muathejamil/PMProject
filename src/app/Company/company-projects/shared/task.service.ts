import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  TaskList: any[];
  private TaskListUpdated=new Subject<any[]>();

  constructor(private http: HttpClient) { }

  gettasksList(id:string) {//get list of tasks for one peoject
    return this.http
      .post(
        'http://localhost:3000/api/prj/Tasks',{id}
      )

  }
    getone(id:string){
      return this.http
      .get(
        'http://localhost:3000/api/prj/Tasks/'+id
      )
    }


    report(id:string,report:any,status :string,Finished:string){
      return this.http
      .post(
        'http://localhost:3000/api/Task/Reports',{id,report,status,Finished})
    }

}
