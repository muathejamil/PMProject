import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page-company',
  templateUrl: './main-page-company.component.html',
  styleUrls: ['./main-page-company.component.css'],
})
export class MainPageCompanyComponent implements OnInit {
  sideBarStatus;
  constructor() {}

  ngOnInit(): void {}
  onTrigger(event) {
    this.sideBarStatus = event;
  }
}
