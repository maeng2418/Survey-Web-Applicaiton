import styled, { css } from 'styled-components';
import { styled as materialStyled } from '@material-ui/core/styles';
import { palette, theme } from 'styled-tools';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';

export const AdminTemplate = styled.div``;

export const Header = materialStyled(AppBar)({
  display: 'flex',
  alignContent: 'center',
});

export const Title = materialStyled(Typography)({
  flex: 1,
});

export const Welcome = materialStyled(Typography)({
  marginRight: '1rem',
});

export const LogoutBtn = materialStyled(Button)({});
