import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = () => {
  const data = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Revenue (Dollars)',
        data: [1200, 1500, 800, 1800, 2200, 2000, 2500, 2100, 2400, 2700, 2900, 3100], // Replace with your actual revenue data
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-16 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-yellow-500">Yearly Revenue Data</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
