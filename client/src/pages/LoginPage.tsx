import React from 'react';
import { LoginTemplate } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from 'store/slices/user';
import { UserReq } from 'dtos';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();

  const onClickSubmitBtn = (values: UserReq) => {
    dispatch(loginRequest(values));
  };

  return <LoginTemplate onClickSubmitBtn={onClickSubmitBtn} />;
};

export default LoginPage;
