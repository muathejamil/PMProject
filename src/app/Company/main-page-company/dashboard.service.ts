import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}

  bigCharts() {
    return [
      {
        name: 'Project 1',
        data: [502, 635, 809, 947, 1402, 3634, 5268],
      },
      {
        name: 'Project 2',
        data: [106, 107, 111, 133, 221, 767, 1766],
      },
      {
        name: 'Project 3',
        data: [163, 203, 276, 408, 547, 729, 628],
      },
      {
        name: 'Project 4',
        data: [18, 31, 54, 156, 339, 818, 1201],
      },
      {
        name: 'Project 5',
        data: [2, 2, 2, 6, 13, 30, 46],
      },
    ];
  }

  cards() {
    return [70, 71, 39, 66];
  }
  pie() {
    return [
      {
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true,
      },
      {
        name: 'Internet Explorer',
        y: 11.84,
      },
      {
        name: 'Firefox',
        y: 10.85,
      },
      {
        name: 'Edge',
        y: 4.67,
      },
      {
        name: 'Safari',
        y: 4.18,
      },
      {
        name: 'Sogou Explorer',
        y: 1.64,
      },
      {
        name: 'Opera',
        y: 1.6,
      },
      {
        name: 'QQ',
        y: 1.2,
      },
      {
        name: 'Other',
        y: 2.61,
      },
    ];
  }
}
