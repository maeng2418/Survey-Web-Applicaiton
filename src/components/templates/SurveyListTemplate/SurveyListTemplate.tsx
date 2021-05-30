import React from 'react';
import * as S from './SurveyListTemplateStyles';
import { Grid, Paper } from '@material-ui/core';

const SurveyListTemplate: React.FC = () => {
  return (
    <S.SurveyListTemplate>
      <S.Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Chart */}
          <Grid item xs={12}>
            <Paper>PWD</Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12}>
            <Paper>리스트</Paper>
          </Grid>
        </Grid>
      </S.Container>
    </S.SurveyListTemplate>
  );
};

export default SurveyListTemplate;
