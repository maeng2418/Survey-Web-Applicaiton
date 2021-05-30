import styled, { css } from 'styled-components';
import { styled as materialStyled, Theme } from '@material-ui/core/styles';
import { palette, theme } from 'styled-tools';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';

export const AdminTemplate = styled.div``;

export const Header = styled(AppBar)<{ isSideBarOpened: boolean; theme: Theme }>`
  display: flex;
  align-content: center;
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
  margin-left: ${({ isSideBarOpened }) => (isSideBarOpened ? '18rem' : 0)};
  width: ${({ isSideBarOpened }) => (isSideBarOpened ? 'calc(100% - 18rem)' : '100%')};
  transition: ${({ theme, isSideBarOpened }) =>
    isSideBarOpened
      ? theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        })
      : theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        })};
`;

export const Title = materialStyled(Typography)({
  flex: 1,
});

export const Welcome = materialStyled(Typography)({
  marginRight: '1rem',
});

export const LogoutBtn = materialStyled(Button)({});
