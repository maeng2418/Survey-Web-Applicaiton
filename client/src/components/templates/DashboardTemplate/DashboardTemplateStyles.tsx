import styled from 'styled-components';
import { Container as MaterialContainer, Grid } from '@material-ui/core';

export const DashboardTemplate = styled.div`
  padding-left: 57px;
`;

export const Container = styled(MaterialContainer)`
  padding: 32px 24px;
`;

export const UpperGrid = styled(Grid)`
  height: 35vh;
`;

export const BottomGrid = styled(Grid)`
  height: 45vh;
`;
