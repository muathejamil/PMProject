import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';
import { Emp } from '../../company-projects/shared/emp.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employeeList: Emp[] = [];
  private employeesSub: Subscription;
  constructor(public service: EmployeeService) {}

  ngOnInit() {
    this.service.refreshList();
    this.service.getEmployyList();
    this.employeesSub = this.service
      .getEmployeeUpdateListener()
      .subscribe((employee: Emp[]) => {
        this.employeeList = employee;
      });
  }

  populateForm(emp: Employee) {
    this.service.formData = emp;
  }
  onDelete(ID: string) {
    //call api for delete operation
    this.service.deleteEmployee(ID);
    this.service.getEmployeeUpdateListener().subscribe((employee: Emp[]) => {
      this.employeeList = employee;
    });
  }
}
