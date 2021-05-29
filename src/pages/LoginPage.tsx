import React from 'react';
import { LoginTemplate } from 'components';

const MainPage: React.FC = () => {
  const data = {
    id: 'id',
    password: 'password',
  };
  const onClickSubmitBtn = () => {
    console.log('submit');
  };

  return <LoginTemplate onClickSubmitBtn={onClickSubmitBtn} data={data} />;
};

export default MainPage;
