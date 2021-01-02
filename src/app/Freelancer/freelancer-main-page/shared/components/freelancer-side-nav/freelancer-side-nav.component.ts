import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freelancer-side-nav',
  templateUrl: './freelancer-side-nav.component.html',
  styleUrls: ['./freelancer-side-nav.component.css'],
})
export class FreelancerSideNavComponent implements OnInit {
  name = 'user';
  email = 'email@user.com';
  constructor() {}

  ngOnInit(): void {}
}
