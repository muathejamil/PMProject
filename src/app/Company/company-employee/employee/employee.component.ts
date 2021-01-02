import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from '../../creat_company/Company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(public service: EmployeeService, private toastr: ToastrService,private CompanyServic:CompanyService,private router:Router) {}

  ngOnInit() {
    this.restForm();
  }

  restForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.formData = {
      EmployeeID: null,
      FullName: '',
      Position: '',
      EMPCode: '',
      Mobile: '',
      companyID: '',
      employeeEmail: '',
      employeePassword: '',
      Specialty:''
    };
  }
  onSubmit(form: NgForm) {
    if (form.value.EmployeeID == null) {
      this.insertRecord(form);
      this.restForm();
    } else {
      this.updateRecord(form);
      this.restForm();
    }
  }

  insertRecord(form: NgForm) {
    this.toastr.success('Inserted successfully', 'Employee');
    this.service.postEmployee(
      form.value.FullName,
      form.value.employeeEmail,
      form.value.employeePassword,
      form.value.Position,
      this.CompanyServic.CompanyID
    ).subscribe((data)=>{
      this.router.navigate(['/companyHeader/EMPLOYEES'])
    })
    console.log(form.value.FullName);
    console.log(form.value.employeeEmail);
    console.log(form.value.employeePassword);

    /*
     * // when we inserted here toastr message will appears
     */
    //this.service.refreshList(); //to refresh the list after added a new employee
  }
  updateRecord(form: NgForm) {
    /*this.toastr.success('Inserted successfully', 'Employee');
     * // when we inserted here toastr message will appears
     */
    //this.service.refreshList(); // to refresh the list after updated the employee
  }
}
