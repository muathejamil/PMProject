import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widgets-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
})
export class AreaComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;
  constructor() {}
  @Input() data = [];
  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area',
      },
      title: {
        text: 'Projects Functionality',
      },
      subtitle: {
        text: '',
      },

      tooltip: {
        split: true,
        valueSuffix: ' millions',
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabeld: true,
      },
      series: this.data,
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }
}
