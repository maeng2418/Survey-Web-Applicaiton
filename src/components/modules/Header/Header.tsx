import React from 'react';
import { IHeaderProps } from 'module-props';
import * as S from './HeaderStyles';
import { Toolbar, IconButton } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const Header: React.FC<IHeaderProps> = ({ isSideBarOpened, onOpenSideBar }) => {
  const theme = useTheme();

  return (
    <S.Header position="sticky" open={isSideBarOpened} theme={theme}>
      <Toolbar>
        {isSideBarOpened || (
          <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={onOpenSideBar}>
            <MenuIcon />
          </IconButton>
        )}
        <S.Title variant="h6" color="inherit" noWrap>
          Dashboard
        </S.Title>
        <S.Welcome variant="subtitle1">김명성님 환영합니다!</S.Welcome>
        <S.LogoutBtn size="large" variant="outlined">
          LOGOUT
        </S.LogoutBtn>
      </Toolbar>
    </S.Header>
  );
};

export default Header;
