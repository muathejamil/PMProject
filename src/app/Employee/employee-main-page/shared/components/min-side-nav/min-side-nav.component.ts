import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-min-side-nav',
  templateUrl: './min-side-nav.component.html',
  styleUrls: ['./min-side-nav.component.css'],
})
export class MinSideNavComponent implements OnInit {
  name = 'user';
  email = 'email@user.com';
  constructor() {}

  ngOnInit(): void {}
}
