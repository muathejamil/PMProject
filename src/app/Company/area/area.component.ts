import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-widgets-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
})
export class AreaComponent implements OnInit {
  public data: Object[];
  public projectField: Object;
  public eventMarkers: any;

  ngOnInit() {
    this.eventMarkers = [
      {
        day: '04/04/2019',
        label: 'Research phase',
      },
    ];
    this.data = [
      {
        ProjectID: 1,
        ProjectName: 'Project1',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        tasks: [
          {
            ProjectID: 2,
            ProjectName: 'Task1',
            StartDate: new Date('04/02/2019'),
            Duration: 3,
            Progress: 30,
          },
          {
            ProjectID: 3,
            ProjectName: 'Task2',
            StartDate: new Date('04/02/2019'),
            Duration: 3,
          },
          {
            ProjectID: 4,
            ProjectName: 'Task3',
            StartDate: new Date('04/02/2019'),
            Duration: 3,
            Predecessor: '2',
            Progress: 30,
          },
        ],
      },
      {
        ProjectID: 5,
        ProjectName: 'Concept Approval',
        StartDate: new Date('04/02/2019'),
        Duration: 0,
        Predecessor: '3,4',
      },
    ];
    this.projectField = {
      id: 'ProjectID',
      name: 'ProjectName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      child: 'tasks',
    };
  }
}
