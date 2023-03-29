import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
import { Line } from 'react-chartjs-2';

type EquityChartProps = {
  data: number[][];
};

const EquityChart: React.FC<EquityChartProps> = ({ data }) => {
  const chartData = {
    labels: Array.from({ length: data[0].length }, (_, i) => `${i}`),
    datasets: data.map((values, i) => ({
      label: `Equity ${i + 1}`,
      data: values,
      borderColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`,
      fill: false,
    })),
  };

  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Number of Trades',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Equity',
        },
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default EquityChart;
