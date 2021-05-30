import React from 'react';
import * as S from './SideBarStyles';
import { ISideBarProps } from 'module-props';
import { Toolbar, IconButton, Divider, List } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftOutlined';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { useTheme } from '@material-ui/core/styles';

import { ListItemButton } from 'components';

const SideBar: React.FC<ISideBarProps> = ({ open, onClose }) => {
  const theme = useTheme();

  const itemList = [
    { title: 'Dashboard', icon: <DashboardIcon />, onClick: () => console.log('click') },
    { title: 'Survey List', icon: <AssignmentIcon />, onClick: () => console.log('click') },
    { title: 'Report', icon: <BarChartIcon />, onClick: () => console.log('click') },
  ];

  return (
    <S.SideBar variant="permanent" anchor="left" theme={theme} open={open}>
      <Toolbar>
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {itemList.map((item, idx) => {
          return (
            <ListItemButton key={idx} title={item.title} icon={item.icon} onClick={item.onClick} />
          );
        })}
      </List>
    </S.SideBar>
  );
};

export default SideBar;
