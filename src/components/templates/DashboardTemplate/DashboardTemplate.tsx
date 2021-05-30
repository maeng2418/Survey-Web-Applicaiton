import React from 'react';
import { IDashboardTemplateProps } from 'template-props';
import * as S from './DashboardTemplateStyles';
import { Container, Grid, Paper } from '@material-ui/core';
import { LineChart, Participation } from 'components';

const DashboardTemplate: React.FC<IDashboardTemplateProps> = ({
  chartData,
  participationCount,
}) => {
  return (
    <S.DashboardTemplate>
      <S.Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8}>
            <LineChart data={chartData} />
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4}>
            <Participation participationCount={participationCount} />
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
