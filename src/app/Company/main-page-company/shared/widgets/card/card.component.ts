import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;

  Highcharts = Highcharts;
  @Input() data = [];

  chartOptions = {};
  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundcolor: null,
        borderwidth: 0,
        margin: [2, 2, 2, 2],
        height: 60,
      },
      title: {
        text: null,
      },

      subtitle: {
        text: null,
      },
      xAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: [],
      },
      yAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: [],
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions',
      },

      exporting: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          data: this.data,
        },
      ],
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }
}
