import { ChartOptions } from 'chart.js';
export const chartOptions: ChartOptions = {
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
