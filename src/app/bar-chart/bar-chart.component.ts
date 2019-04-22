import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { chartDataSets } from './params/bar-chart-data-sets';
import { chartLabels } from './params/bar-chart-labels';
import { chartOptions } from './params/bar-chart-options';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  public barChartOptions: ChartOptions = chartOptions;
  public barChartData: ChartDataSets[] = chartDataSets;
  public barChartLabels: Label[] = chartLabels;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  constructor() {}

  ngOnInit() {}

  // events
  public chartClicked({ event, active }: { event: MouseEvent; active: any }): void {
    if (active.length > 0) {
      const chart = active[0];
      alert(`${chart._index + 1}番目のグラフがクリックされました。`);
    }
  }
}
