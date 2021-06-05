import styled from 'styled-components';
import { Typography, Grid } from '@material-ui/core';
import backgroundImg from 'assets/images/intro-bg.jpeg';

export const LoginTemplate = styled(Grid)`
  width: 100vw;
  height: 100vh;
`;

export const ImageContainer = styled(Grid)`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled(Grid)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginTypograph = styled(Typography)`
  font-size: 30px;
  font-weight: bold;
  margin-top: 16px;
`;
