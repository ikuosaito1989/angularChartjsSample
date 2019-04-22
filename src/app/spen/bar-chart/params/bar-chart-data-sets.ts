import { ChartDataSets } from 'chart.js';
const enableColor = 'rgba(0, 159, 232, 0.8)';
const disableColor = 'rgba(238, 238, 238, 0.8)';

export const chartDataSets: ChartDataSets[] = [
  {
    data: [10, 40, 60, 20, 5],
    // 1個1個色を設定する必要がありそう
    hoverBackgroundColor: [disableColor, disableColor, disableColor, disableColor, disableColor],
    backgroundColor: [disableColor, disableColor, disableColor, disableColor, disableColor],
  },
];
