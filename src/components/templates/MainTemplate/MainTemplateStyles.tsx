import styled from 'styled-components';
import { styled as materialStyled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import backgroundImg from 'assets/images/intro-bg.jpeg';

export const MainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  height: 72px;
  padding: 20px 0;
`;

export const LoginBtn = materialStyled(Button)({
  marginRight: '2rem',
  fontSize: '1.5rem',
});

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65vw;
`;

export const SurveyBtn = materialStyled(Button)({
  fontSize: '1.2rem',
  width: '30rem',
  marginTop: '4rem',
  fontWeight: 'bold',
});
