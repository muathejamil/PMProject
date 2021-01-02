import { Component, OnInit } from '@angular/core';
import { LoginService } from './WelcomePage/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  type:any;
  constructor(private loginsevices :LoginService) { }


  title = 'Project';
}
