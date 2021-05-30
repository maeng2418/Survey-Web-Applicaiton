import React from 'react';
import { ISurveyListTemplateProps } from 'template-props';
import * as S from './SurveyListTemplateStyles';
import { Grid } from '@material-ui/core';
import { Pwl, SurveyList } from 'components';

const SurveyListTemplate: React.FC<ISurveyListTemplateProps> = ({ surveyData }) => {
  return (
    <S.SurveyListTemplate>
      <S.Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Print Working Location */}
          <Pwl />
          {/* Survey List */}
          <Grid item xs={12}>
            <SurveyList data={surveyData} />
          </Grid>
        </Grid>
      </S.Container>
    </S.SurveyListTemplate>
  );
};

export default SurveyListTemplate;
