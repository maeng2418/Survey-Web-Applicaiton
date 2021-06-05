import React, { useState, useEffect } from 'react';
import { MainTemplate } from 'components';
import { useHistory, useParams } from 'react-router-dom';

const MainPage: React.FC = () => {
  const history = useHistory();
  const [type, setType] = useState('main');
  const { surveyIdx } = useParams<{ surveyIdx?: string }>();

  useEffect(() => {
    if (history.location.pathname.includes('/join')) {
      setType('join');
    } else {
      history.replace('/');
    }
  }, []);

  const onClickLoginBtn = () => {
    history.push('/login');
  };

  const onClickSurveyBtn = () => {
    console.log(surveyIdx);
  };

  return (
    <MainTemplate
      type={type === 'join' ? 'join' : 'main'}
      onClickMainBtn={type === 'join' ? onClickSurveyBtn : onClickLoginBtn}
    />
  );
};

export default MainPage;
