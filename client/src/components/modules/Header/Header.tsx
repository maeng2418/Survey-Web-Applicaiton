import React from 'react';
import { IHeaderProps } from 'module-props';
import * as S from './HeaderStyles';
import { Toolbar, IconButton } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequest } from 'store/slices/user';
import { State } from 'store';

const Header: React.FC<IHeaderProps> = ({ isSideBarOpened, onOpenSideBar }) => {
  const theme = useTheme();
  const user = useSelector((state: State) => state.user);
  const dispatch = useDispatch();

  const onClickLogoutBtn = () => dispatch(logoutRequest({}));

  return (
    <S.Header position="sticky" open={isSideBarOpened} theme={theme}>
      <Toolbar>
        {isSideBarOpened ? null : (
          <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={onOpenSideBar}>
            <MenuIcon />
          </IconButton>
        )}
        <S.Title variant="h6" color="inherit" noWrap>
          Dashboard
        </S.Title>
        <S.Welcome variant="subtitle1">{user.username}님 환영합니다!</S.Welcome>
        <S.LogoutBtn size="large" variant="outlined" onClick={onClickLogoutBtn}>
          LOGOUT
        </S.LogoutBtn>
      </Toolbar>
    </S.Header>
  );
};

export default Header;
