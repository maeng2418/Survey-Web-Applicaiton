import React from 'react';
import { AdminTemplate, SurveyListTemplate } from 'components';

const SurveyListPage: React.FC = () => {
  return (
    <AdminTemplate>
      <SurveyListTemplate surveyData={[]} />
    </AdminTemplate>
  );
};

export default SurveyListPage;
