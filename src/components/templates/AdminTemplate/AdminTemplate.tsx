import React, { useState } from 'react';
import * as S from './AdminTemplateStyles';
import { Header, SideBar } from 'components';

const AdminTemplate: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  return (
    <S.AdminTemplate>
      <Header isSideBarOpened={open} onOpenSideBar={() => toggleDrawer(true)} />
      <SideBar open={open} onClose={() => toggleDrawer(false)} />
      {children}
    </S.AdminTemplate>
  );
};

export default AdminTemplate;
