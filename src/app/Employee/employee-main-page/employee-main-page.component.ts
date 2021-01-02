import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-main-page',
  templateUrl: './employee-main-page.component.html',
  styleUrls: ['./employee-main-page.component.css'],
})
export class EmployeeMainPageComponent implements OnInit {
  sideBarStatus;
  constructor() {}

  ngOnInit() {}

  onSlide(event) {
    this.sideBarStatus = event;
  }
}
