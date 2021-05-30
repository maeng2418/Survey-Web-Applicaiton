import styled from 'styled-components';
import { Theme } from '@material-ui/core/styles';
import { AppBar, Typography, Button } from '@material-ui/core';

export const AdminTemplate = styled.div``;

export const Header = styled(AppBar)<{ open: boolean; theme: Theme }>`
  display: flex;
  align-content: center;
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
  margin-left: ${({ open }) => (open ? '260px' : 0)};
  width: ${({ open }) => (open ? 'calc(100% - 260px)' : '100%')};
  transition: ${({ theme, open }) =>
    open
      ? theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        })
      : theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        })};
`;

export const Title = styled(Typography)`
  flex: 1;
`;

export const Welcome = styled(Typography)`
  margin-right: 16px;
`;

export const LogoutBtn = styled(Button)``;
