import React from 'react';
import * as S from './SurveyListTemplateStyles';
import { Grid, Paper } from '@material-ui/core';
import { Pwl, SurveyList } from 'components';

const SurveyListTemplate: React.FC = () => {
  return (
    <S.SurveyListTemplate>
      <S.Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Chart */}
          <Pwl />
          {/* Recent Deposits */}
          <Grid item xs={12}>
            <SurveyList data={[]} />
          </Grid>
        </Grid>
      </S.Container>
    </S.SurveyListTemplate>
  );
};

export default SurveyListTemplate;
