import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


export default function BarChart() {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturdday', 'Sunday'];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Visitors Chart',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Visitors',
        data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      // {
      //   label: 'Expense',
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
  };
  return (
    <div className='w-screen max-w-5xl'>
      <Bar options={options} data={data} className='w-full' />;
    </div>
  );
}
