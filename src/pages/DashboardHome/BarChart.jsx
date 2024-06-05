import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Sales',
        data: [500, 700, 400, 600], // Replace with your actual sales data
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
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
    <div className="max-w-4xl mx-auto p-16  rounded-lg">
      <h2 className="text-2xl text-center font-bold mb-4  text-yellow-500">Last Month's Sales</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
