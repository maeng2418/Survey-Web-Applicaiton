import React from 'react';
import { ISurveyReportTemplateProps } from 'template-props';
import * as S from './SurveyReportTemplateStyles';
import { Grid } from '@material-ui/core';
import { Pwl, Participation, Chart, GraphSelect } from 'components';

const SurveyReportTemplate: React.FC<ISurveyReportTemplateProps> = ({
  chartData,
  todayParticipationCount,
  totalParticipationCount,
}) => {
  return (
    <S.SurveyReportTemplate>
      <S.Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Pwl />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={5}>
              <S.UpperGridItem item xs={12} md={6}>
                {/* TOTAL */}
                <Participation title="Total" participationCount={totalParticipationCount} />
              </S.UpperGridItem>
              <S.UpperGridItem item xs={12} md={6}>
                {/* TODAY */}
                <Participation title="Today" participationCount={todayParticipationCount} />
              </S.UpperGridItem>
              <S.BottomGridItem item xs={12}>
                {/* CHART */}
                <Chart data={chartData} title="Graph" />
              </S.BottomGridItem>
            </Grid>
          </Grid>
        </Grid>
      </S.Container>
    </S.SurveyReportTemplate>
  );
};

export default SurveyReportTemplate;
