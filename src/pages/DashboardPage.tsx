import React from 'react';
import { AdminTemplate, DashboardTemplate } from 'components';
const MainPage: React.FC = () => {
  return (
    <AdminTemplate>
      <DashboardTemplate />
    </AdminTemplate>
  );
};

export default MainPage;
