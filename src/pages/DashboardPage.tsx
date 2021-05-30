import React from 'react';
import { AdminTemplate, DashboardTemplate } from 'components';

const DashboardPage: React.FC = () => {
  const chartData = [
    { time: '00:00', amount: 0 },
    { time: '03:00', amount: 300 },
    { time: '06:00', amount: 600 },
    { time: '09:00', amount: 800 },
    { time: '12:00', amount: 1500 },
    { time: '15:00', amount: 2000 },
    { time: '18:00', amount: 2400 },
    { time: '21:00', amount: 2400 },
    { time: '24:00' },
  ];
  return (
    <AdminTemplate>
      <DashboardTemplate chartData={chartData} />
    </AdminTemplate>
  );
};

export default DashboardPage;
