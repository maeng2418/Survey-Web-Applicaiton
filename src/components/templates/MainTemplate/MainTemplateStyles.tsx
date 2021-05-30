import styled from 'styled-components';
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

export const LoginBtn = styled(Button)`
  margin-right: 24px;
  font-size: 24px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65vw;
`;

export const SurveyBtn = styled(Button)`
  width: 380px;
  margin-top: 64px;
  font-weight: bold;

  /* 태블릿 */
  @media (max-width: 1024px) {
    width: 280px;
  }

  /* 모바일 */
  @media (max-width: 768px) {
    width: 200px;
  }
`;
