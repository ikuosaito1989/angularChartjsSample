import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // 凡例を非表示
    legend: { display: false },
    tooltips: {
      // ツールチップ非表示
      enabled: false,
    },
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [
        {
          // 棒グラフのメモリラベル。
          // maxを80に設定することで棒グラフは（0,20,40,60,80）の位置に設定される
          display: false,
          barPercentage: 0.7,
          ticks: {
            max: '80',
          },
        },
        {
          // 棒グラフのメモリラベル。
          // maxを100に設定することでラベルは（0,20,40,60,80, 100）の位置に設定される
          display: true,
          ticks: {
            max: '100',
          },
          // 縦線消す
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          // グリッド線表示可否
          display: true,
          // 一番左の線を消す
          gridLines: {
            drawBorder: false,
          },
          ticks: {
            max: 70,
            // ラベルを非表示にするので必要ないけど一応
            beginAtZero: true,
            // callbackでY軸のラベルを消す
            callback: function() {
              return '';
            },
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartLabels: Label[] = ['0', '20', '40', '60', '80', '100'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    {
      data: [10, 40, 60, 20, 5],
      hoverBackgroundColor: [
        'rgba(238, 238, 238, 0.8)',
        'rgba(238, 238, 238, 0.8)',
        'rgba(0, 159, 232, 0.8)',
        'rgba(238, 238, 238, 0.8)',
        'rgba(238, 238, 238, 0.8)',
      ],
      // 1個1個色を設定する必要がありそう
      backgroundColor: [
        'rgba(238, 238, 238, 0.8)',
        'rgba(238, 238, 238, 0.8)',
        'rgba(0, 159, 232, 0.8)',
        'rgba(238, 238, 238, 0.8)',
        'rgba(238, 238, 238, 0.8)',
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}

  // events
  public chartClicked({ event, active }: { event: MouseEvent; active: any }): void {
    if (active.length > 0) {
      const chart = active[0];
      alert(`${chart._index}番目のグラフがクリックされました。`);
    }
  }
}
