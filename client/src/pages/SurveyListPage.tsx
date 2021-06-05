import React from 'react';
import { AdminTemplate, SurveyListTemplate } from 'components';
import moment from 'moment';

const SurveyListPage: React.FC = () => {
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
      <SurveyListTemplate surveyData={surveyData} />
    </AdminTemplate>
  );
};

export default SurveyListPage;
