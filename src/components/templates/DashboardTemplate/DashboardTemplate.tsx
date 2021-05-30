import React from 'react';
import { IDashboardTemplateProps } from 'template-props';
import * as S from './DashboardTemplateStyles';
import { Container, Grid, Paper } from '@material-ui/core';
import { LineChart, Participation, SurveyList } from 'components';

const DashboardTemplate: React.FC<IDashboardTemplateProps> = ({
  chartData,
  participationCount,
  surveyData,
  onClickModify,
  onClickReport,
  onClickLog,
  onClickTitle,
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
            <SurveyList
              title={'최근 등록된 설문'}
              data={surveyData}
              onClickModify={onClickModify}
              onClickReport={onClickReport}
              onClickLog={onClickLog}
              onClickTitle={onClickTitle}
            />
          </Grid>
        </Grid>
      </S.Container>
    </S.DashboardTemplate>
  );
};

export default DashboardTemplate;
