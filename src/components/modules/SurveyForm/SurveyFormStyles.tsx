import styled, { css } from 'styled-components';
import { Paper, Grid } from '@material-ui/core';

export const SurveyForm = styled(Paper)`
  padding: 24px;
`;

export const Title = styled.div`
  margin-bottom: 54px;
`;

export const Content = styled(Grid)`
  margin-bottom: 24px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;

  & svg {
    margin-right: 8px;
  }
`;
