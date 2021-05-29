import React from 'react';
import { MainTemplate } from 'components';

const MainPage: React.FC = () => {
  const onClickLoginBtn = () => {
    console.log('login');
  };

  const onClickSurveyBtn = () => {
    console.log('survey');
  };

  return <MainTemplate onClickLoginBtn={onClickLoginBtn} onClickSurveyBtn={onClickSurveyBtn} />;
};

export default MainPage;
