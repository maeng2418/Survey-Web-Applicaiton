import React from 'react';
import { MainTemplate } from 'components';
import { useHistory } from 'react-router-dom';

const MainPage: React.FC = () => {
  const history = useHistory();

  const onClickLoginBtn = () => {
    history.push('/login');
  };

  const onClickSurveyBtn = () => {
    console.log('survey');
  };

  return <MainTemplate onClickLoginBtn={onClickLoginBtn} onClickSurveyBtn={onClickSurveyBtn} />;
};

export default MainPage;
