import styled from 'styled-components';
import { Theme } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';

export const SideBar = styled(Drawer)<{ open: boolean; theme: Theme }>`
  & > div {
    width: ${({ open }) => (open ? '260px' : '57px')};
    transition: ${({ theme, open }) =>
      open
        ? theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          })
        : theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          })};
  }
  flex: 0;
  white-space: nowrap;
`;
