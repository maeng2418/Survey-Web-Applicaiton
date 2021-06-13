import React from 'react';
import { AdminTemplate, SurveyReportTemplate } from 'components';

const SurveyReportPage: React.FC = () => {
  const chartData = [
    { label: '00:00', amount: 0 },
    { label: '03:00', amount: 300 },
    { label: '06:00', amount: 600 },
    { label: '09:00', amount: 800 },
    { label: '12:00', amount: 1500 },
    { label: '15:00', amount: 2000 },
    { label: '18:00', amount: 2400 },
    { label: '21:00', amount: 2400 },
    { label: '24:00' },
  ];

  return (
    <AdminTemplate>
      <SurveyReportTemplate
        todayParticipationCount={32}
        totalParticipationCount={1024}
        chartData={chartData}
      />
    </AdminTemplate>
  );
};

export default SurveyReportPage;
