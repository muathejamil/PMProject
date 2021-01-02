import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freelancer-main-page',
  templateUrl: './freelancer-main-page.component.html',
  styleUrls: ['./freelancer-main-page.component.css'],
})
export class FreelancerMainPageComponent implements OnInit {
  sideBarStatus;
  constructor() {}

  ngOnInit(): void {}
  onSlide(event) {
    this.sideBarStatus = event;
  }
}
