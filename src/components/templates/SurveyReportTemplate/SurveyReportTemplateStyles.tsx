import styled from 'styled-components';
import { Container as MaterialContainer, Grid } from '@material-ui/core';

export const SurveyReportTemplate = styled.div`
  padding-left: 57px;
`;

export const Container = styled(MaterialContainer)`
  padding: 32px 24px;
`;

export const UpperGridItem = styled(Grid)`
  height: 24vh;
`;

export const BottomGridItem = styled(Grid)`
  height: 45vh;
`;
