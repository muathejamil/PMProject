import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Emp } from '../company-projects/shared/emp.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-company-employee',
  templateUrl: './company-employee.component.html',
  styleUrls: ['./company-employee.component.css'],
})
export class CompanyEmployeeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
