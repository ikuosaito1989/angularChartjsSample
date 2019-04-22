import { ChartDataSets } from 'chart.js';
export const chartDataSets: ChartDataSets[] = [
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
