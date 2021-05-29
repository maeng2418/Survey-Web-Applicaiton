import styled, { css } from 'styled-components';
import { styled as materialStyled } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

import { palette, theme } from 'styled-tools';
import backgroundImg from 'assets/images/intro-bg.jpeg';

export const LoginTemplate = materialStyled(Grid)({
  width: '100vw',
  height: '100vh',
});

export const ImageContainer = materialStyled(Grid)({
  backgroundImage: `url(${backgroundImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const FormContainer = materialStyled(Grid)({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const LoginTypograph = materialStyled(Typography)({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginTop: '1rem',
});
