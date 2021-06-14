import styled from 'styled-components';
import { Container } from '@material-ui/core';

export const SurveyTemplate = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const Content = styled(Container)`
  flex: 1;
  padding: 32px 24px;
`;

export const Footer = styled.footer`
  display: flex;
  padding-bottom: 64px;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > button {
    width: 200px;
    font-size: 20px;
  }
`;
