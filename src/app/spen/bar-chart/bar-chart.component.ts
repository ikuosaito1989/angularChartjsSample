import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { chartDataSets } from './params/bar-chart-data-sets';
import { chartLabels } from './params/bar-chart-labels';
import { chartOptions } from './params/bar-chart-options';
import { BarColors } from './params/bar-colors.enum';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  @Input()
  data: number[];
  @Input()
  interval: number;
  @Input()
  selectedIndex: number;

  public barChartOptions: ChartOptions = chartOptions;
  public barChartData: ChartDataSets[] = chartDataSets;
  public barChartLabels: Label[] = chartLabels;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  constructor() {}

  ngOnInit() {
    this.barChartData[0].data = this.data;
    const xAxesMax = this.interval * this.data.length;
    const yAxesMax = Math.max(...this.data) + 10;
    this.barChartOptions.scales.xAxes[0].ticks.max = (xAxesMax - this.interval).toString();
    this.barChartOptions.scales.xAxes[1].ticks.max = xAxesMax.toString();
    this.barChartOptions.scales.yAxes[0].ticks.max = yAxesMax;
    this.setColors();
    this.setLabels();
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent; active: any }): void {
    if (active.length > 0) {
      alert(`${active[0]._index + 1}番目のグラフがクリックされました。`);
    }
  }

  private setColors() {
    const colors: string[] = [];
    for (let i = 0; i < this.data.length; i++) {
      const color = i === this.selectedIndex - 1 ? BarColors.Enabled : BarColors.Disableed;
      colors.push(color);
      this.barChartData[0].backgroundColor = colors;
      this.barChartData[0].hoverBackgroundColor = colors;
    }
  }

  private setLabels() {
    for (let i = 0; i < this.data.length + 1; i++) {
      this.barChartLabels.push((this.interval * i).toString());
    }
  }
}
