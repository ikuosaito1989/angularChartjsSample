import { Component, Input, OnInit } from '@angular/core';
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
  @Input()
  data: number[];
  @Input()
  labels: string[];
  @Input()
  interval: number;
  @Input()
  max: number;
  @Input()
  selectedIndex: number;

  public barChartOptions: ChartOptions = chartOptions;
  public barChartData: ChartDataSets[] = chartDataSets;
  public barChartLabels: Label[] = chartLabels;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  constructor() {}

  ngOnInit() {
    // this.barChartData[0].data = this.data;
    // this.barChartLabels = this.labels;
    // this.barChartOptions.scales.xAxes[0].ticks.max = (this.max - this.interval).toString();
    // this.barChartOptions.scales.xAxes[1].ticks.max = this.max.toString();
    // this.barChartData[0].backgroundColor[this.selectedIndex] = 'rgba(0, 159, 232, 0.8)';
    // this.barChartData[0].hoverBackgroundColor[this.selectedIndex] = 'rgba(0, 159, 232, 0.8)';
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent; active: any }): void {
    if (active.length > 0) {
      alert(`${active[0]._index + 1}番目のグラフがクリックされました。`);
    }
  }
}
