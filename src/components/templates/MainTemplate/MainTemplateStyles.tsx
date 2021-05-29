import styled from 'styled-components';
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
