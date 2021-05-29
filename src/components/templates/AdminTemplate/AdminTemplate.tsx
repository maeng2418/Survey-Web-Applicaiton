import React from 'react';
import * as S from './AdminTemplateStyles';
import { Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Header } from 'components';

const AdminTemplate: React.FC = ({}) => {
  return (
    <S.AdminTemplate>
      <Header />
    </S.AdminTemplate>
  );
};

export default AdminTemplate;
