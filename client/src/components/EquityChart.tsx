import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const EquityChart = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const chartData = {
      labels: Array.from({ length: data[0].length }, (_, i) => `Trade ${i + 1}`),
      datasets: data.map((values, i) => ({
        label: `Equity ${i + 1}`,
        data: values,
        borderColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`,
        fill: false,
      })),
    };

    const chartOptions = {
      responsive: true,
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Number of Trades',
          },
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Equity',
          },
        }],
      },
    };

    const chart = new Chart(canvasRef.current, {
      type: 'line',
      data: chartData,
      options: chartOptions,
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return <canvas ref={canvasRef} />;
};

export default EquityChart;
