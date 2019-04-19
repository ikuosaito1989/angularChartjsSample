import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.scss"]
})
export class BarChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      // ツールチップ非表示
      enabled: false
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
            max: "80点"
          }
        },
        {
          // 棒グラフのメモリラベル。
          // maxを100に設定することでラベルは（0,20,40,60,80, 100）の位置に設定される
          display: true,
          ticks: {
            max: "100点"
          }
        }
      ],
      yAxes: [
        {
          // グリッド線表示可否
          display: true,
          ticks: {
            max: 70,
            // ラベルを非表示にするので必要ないけど一応
            beginAtZero: true,
            // callbackでY軸のラベルを消す
            callback: function() {
              return "";
            }
          }
        }
      ]
    },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end"
      }
    }
  };
  public barChartLabels: Label[] = [
    "0点",
    "20点",
    "40点",
    "60点",
    "80点",
    "100点"
  ];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    {
      data: [10, 40, 60, 20, 5],
      label: "人数",
      borderColor: "rgba(0, 159, 232, 0.7)",
      // 1個1個色を設定する必要がありそう
      backgroundColor: [
        "rgba(238, 238, 238, 0.8)",
        "rgba(238, 238, 238, 0.8)",
        "rgba(0, 159, 232, 0.8)",
        "rgba(238, 238, 238, 0.8)",
        "rgba(238, 238, 238, 0.8)"
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}

  // events
  public chartClicked({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40
    ];
    this.barChartData[0].data = data;
  }
}
