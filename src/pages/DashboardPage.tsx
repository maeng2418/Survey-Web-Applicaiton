import React from 'react';
import { AdminTemplate, DashboardTemplate } from 'components';
import moment from 'moment';

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

  const surveyData = [
    {
      id: 0,
      date: moment().format('YYYY-MM-DD'),
      title: '테스트 설문지1',
      count: 32,
    },
    {
      id: 1,
      date: moment().format('YYYY-MM-DD'),
      title: '테스트 설문지2',
      count: 27,
    },
    {
      id: 2,
      date: moment().format('YYYY-MM-DD'),
      title: '테스트 설문지3',
      count: 12,
    },
    {
      id: 3,
      date: moment().format('YYYY-MM-DD'),
      title: '테스트 설문지4',
      count: 23,
    },
  ];

  return (
    <AdminTemplate>
      <DashboardTemplate chartData={chartData} participationCount={34000} surveyData={surveyData} />
    </AdminTemplate>
  );
};

export default DashboardPage;
