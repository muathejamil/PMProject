import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  CompanyID:string;
  ManagerID:string
  constructor(private http: HttpClient) {}
  CreatCompany(name:string,discription:string,Manager:string){
    return this.http.post('http://localhost:3000/api/Company' ,{name,discription,Manager})

  }
  getone(id:string){
    return this.http.get('http://localhost:3000/api/Company/'+id)

  }
}
