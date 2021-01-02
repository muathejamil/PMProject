import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
type=""
  constructor(private http: HttpClient) {}

  registarEmployee(
    name: string,
    email: string,
    password: string,
    cmpanyid: string,
    Specialty:string
  ) {
    console.log(Specialty);
   return this.http
      .post(
        'http://localhost:3000/api/Employee',
        { name, email, password, cmpanyid,Specialty }
      )
  }



  getLoginres(email:string,password:string) {
   return this.http
    .post(
      'http://localhost:3000/api/LogIn',
      {email, password}
    )
}
registarFreelancer(name: string,
  email: string,
  password: string,
  Specialty:string){
    console.log(Specialty);
    return this.http.post(
      'http://localhost:3000/api/Freelancer',
      { name, email, password ,Specialty}
    )
  }
registarManager(name: string,
  email: string,
  password: string,
  ){
   return this.http.post(
      'http://localhost:3000/api/Manager',
      { name, email, password }
    )
  }
  assigntype(type:string){
this.type=type;
  }
  gettype(){
    return this.type;
  }
}
