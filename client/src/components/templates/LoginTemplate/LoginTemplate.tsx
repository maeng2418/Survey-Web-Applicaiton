import React from 'react';
import * as S from './LoginTemplateStyles';
import { ILoginTemplateProps } from 'template-props';
import { Headline, LoginForm } from 'components';
import Hidden from '@material-ui/core/Hidden';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const LoginTemplate: React.FC<ILoginTemplateProps> = ({ onClickSubmitBtn }) => {
  return (
    <S.LoginTemplate container>
      <Hidden smDown>
        <S.ImageContainer item xs={12} md={7}>
          <Headline />
        </S.ImageContainer>
      </Hidden>
      <S.FormContainer item xs={12} md={5}>
        <PersonPinIcon fontSize="large" />
        <S.LoginTypograph variant={'h5'}>Login</S.LoginTypograph>
        <LoginForm onClickSubmitBtn={onClickSubmitBtn} />
      </S.FormContainer>
    </S.LoginTemplate>
  );
};

export default LoginTemplate;
