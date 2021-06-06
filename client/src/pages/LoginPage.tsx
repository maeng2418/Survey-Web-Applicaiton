import React from 'react';
import { LoginTemplate } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from 'store/slices/user';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();

  const data = {
    id: 'id',
    password: 'password',
  };
  const onClickSubmitBtn = () => {
    dispatch(loginRequest({ email: 'maeng2418@naver.com', password: '1234' }));
  };

  return <LoginTemplate onClickSubmitBtn={onClickSubmitBtn} data={data} />;
};

export default LoginPage;
