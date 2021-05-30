import React from 'react';
import * as S from './DashboardTemplateStyles';
import { Container, Grid, Paper } from '@material-ui/core';
const DashboardTemplate: React.FC = () => {
  return (
    <S.DashboardTemplate>
      <S.Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper>차트</Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper>누적</Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper>최근목록</Paper>
          </Grid>
        </Grid>
      </S.Container>
    </S.DashboardTemplate>
  );
};

export default DashboardTemplate;
