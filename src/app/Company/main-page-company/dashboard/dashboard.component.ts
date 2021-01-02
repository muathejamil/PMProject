import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  bigCharts = [];
  cards = [];
  pie = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.bigCharts = this.dashboardService.bigCharts();
    this.cards = this.dashboardService.cards();
    this.pie = this.dashboardService.pie();
  }
}
