import React from 'react';
import * as S from './SideBarStyles';
import { ISideBarProps } from 'module-props';
import { Drawer, IconButton, Divider, List } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftOutlined';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';

import { ListItemButton } from 'components';

const SideBar: React.FC<ISideBarProps> = ({ open, onClose }) => {
  const itemList = [
    { title: 'Dashboard', icon: <DashboardIcon />, onClick: () => console.log('click') },
    { title: 'Survey List', icon: <AssignmentIcon />, onClick: () => console.log('click') },
    { title: 'Report', icon: <BarChartIcon />, onClick: () => console.log('click') },
  ];

  return (
    <Drawer anchor="left" open={open}>
      <S.List>
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </S.List>
      <Divider />
      <S.List>
        {itemList.map((item, idx) => {
          return (
            <ListItemButton key={idx} title={item.title} icon={item.icon} onClick={item.onClick} />
          );
        })}
      </S.List>
    </Drawer>
  );
};

export default SideBar;
