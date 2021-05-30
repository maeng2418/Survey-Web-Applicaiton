import React, { useState } from 'react';
import * as S from './AdminTemplateStyles';
import { Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Header, SideBar } from 'components';

const AdminTemplate: React.FC = ({}) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  return (
    <S.AdminTemplate>
      <Header isSideBarOpened={open} onOpenSideBar={() => toggleDrawer(true)} />
      <SideBar open={open} onClose={() => toggleDrawer(false)} />
    </S.AdminTemplate>
  );
};

export default AdminTemplate;
