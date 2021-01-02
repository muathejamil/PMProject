import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/shared/employee.service';
import { FreeLancerService } from 'src/app/Freelancer/FreeLancer.service';
import { CompanyService } from 'src/app/Company/creat_company/Company.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() gettype = new EventEmitter();

  employeeChecked = false;
  freelancerchecked=false;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.email]);
  replay:any;
  Type='';


  constructor(private loginsevices:LoginService,private route: Router,private toaster: ToastrService
    ,private employeeservices:EmployeeService,private Freeservice:FreeLancerService,
    private companyservice:CompanyService
    ) {}

  ngOnInit(): void {}
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  get2ErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.password.hasError('password') ? 'Not a valid password' : '';
  }

  onEmployeeSituation(str: string) {
    if (str == 'employee') return (this.employeeChecked = true);
    else if(str=='freelancer')(this.freelancerchecked = true)
    else return (this.employeeChecked = false);
  }

  onLoginSubmit(form: NgForm) {
   // console.log(form.value.userEmail);
    //console.log(form.value.userPassword);
    this.loginsevices.getLoginres(form.value.userEmail,form.value.userPassword).subscribe(
      (data)=>{
        this.replay=data;

       // console.log( this.replay.message);
       // console.log( this.replay.type);
       // console.log( this.replay.token);
      //  console.log( this.replay.user);
          this.Type=this.replay.type;
          this.gettype.emit(this.replay.type);


          if(this.replay.type=="Manager"){
          this.route.navigate(['/companyHeader/HOME/dash']);
            this.companyservice.ManagerID=this.replay.user._id;
            if(this.replay.user.company){
              this.companyservice.CompanyID=this.replay.user.company;
            }
        }
          else if(this.replay.type=="Employee"){
            this.route.navigate(['/EMPHeader']);
            if(this.replay.user._id!=null){
            this.employeeservices.EmployeeIdFOREmpPage=this.replay.user._id;
            this.companyservice.CompanyID=this.replay.user.cmpanyid;

            }
         }
         else if(this.replay.type=="Freelancer"){
          this.route.navigate(['/FLHeader']);
          this.Freeservice.FREEIdFOREmpPage=this.replay.user._id;

         }


          else{
            this.toaster.show("Or Sign Up","It seems like you entered wrong email or passowrd");
          }
      }
    )

  }
  onSignupSubmit(form2: NgForm) {
    if(form2.value.userType=="Manager"){
      this.loginsevices.registarManager((form2.value.firstName+" "+form2.value.lastName)
      ,form2.value.userEmail,form2.value.confirmPassword).subscribe((data)=>{
        console.log(data);
      })
    }
    else if(form2.value.userType=="Employee"){
      //console.log(form2.value.firstName);
   // console.log(form2.value.lastName);
   console.log(form2.value.confirmPassword)
      this.loginsevices.registarEmployee((form2.value.firstName+" "+form2.value.lastName)
     ,form2.value.userEmail,form2.value.confirmPassword,form2.value.companyID,form2.value.Specialty).subscribe((data)=>{
       console.log(data);
       console.log("1300");
      })
    }
    else if(form2.value.userType=="Freelancer"){
      this.loginsevices.registarFreelancer((form2.value.firstName+" "+form2.value.lastName)
      ,form2.value.userEmail,form2.value.confirmPassword,form2.value.Specialty).subscribe((data)=>{
        console.log(data);
        console.log("1300");
       })
    }
    /*console.log(form2.value.userEmail);
    console.log(form2.value.userPassword);

    console.log(form2.value.userType);
    console.log(form2.value.companyID);
    console.log(form2.value.comfirmPassword);*/
  }
}
