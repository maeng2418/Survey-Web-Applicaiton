import styled from 'styled-components';
import { Container as MaterialContainer, Grid } from '@material-ui/core';

export const SurveyReportTemplate = styled.div`
  padding-left: 57px;
`;

export const Container = styled(MaterialContainer)`
  padding: 32px 24px;
`;

export const UpperGridItem = styled(Grid)`
  height: 240px;
`;

export const BottomGridItem = styled(Grid)`
  position: relative;
  height: 45vh;
`;
