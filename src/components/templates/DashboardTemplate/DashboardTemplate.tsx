import React from 'react';
import { IDashboardTemplateProps } from 'template-props';
import * as S from './DashboardTemplateStyles';
import { Grid } from '@material-ui/core';
import { Chart, Participation, SurveyList } from 'components';

const DashboardTemplate: React.FC<IDashboardTemplateProps> = ({
  chartData,
  participationCount,
  surveyData,
}) => {
  return (
    <S.DashboardTemplate>
      <S.Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Chart */}
          <S.UpperGrid item xs={12} md={8}>
            <Chart title={'Today'} data={chartData} />
          </S.UpperGrid>
          {/* Total Participation */}
          <S.UpperGrid item xs={12} md={4}>
            <Participation title={'누적 참여자 수'} participationCount={participationCount} />
          </S.UpperGrid>
          {/* Recent Survey */}
          <S.BottomGrid item xs={12}>
            <SurveyList title={'최근 등록된 설문'} data={surveyData} />
          </S.BottomGrid>
        </Grid>
      </S.Container>
    </S.DashboardTemplate>
  );
};

export default DashboardTemplate;
