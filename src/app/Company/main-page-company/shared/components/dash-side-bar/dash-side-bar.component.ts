import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-side-bar',
  templateUrl: './dash-side-bar.component.html',
  styleUrls: ['./dash-side-bar.component.css'],
})
export class DashSideBarComponent implements OnInit {
  name = 'user';
  email = 'email@user.com';
  constructor() {}

  ngOnInit(): void {}
}
