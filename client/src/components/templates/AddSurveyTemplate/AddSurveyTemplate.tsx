import React from 'react';
import * as S from './AddSurveyTemplateStyles';
import { Grid } from '@material-ui/core';
import { Pwl, SurveyForm, SaveSurveyBtn } from 'components';

const AddSurveyTemplate: React.FC = () => {
  return (
    <S.AddSurveyTemplate>
      <S.Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Print Working Location */}
          <Grid item xs={12}>
            <Pwl />
          </Grid>
          {/* Survey List */}
          <Grid item xs={12}>
            <SurveyForm />
          </Grid>
          <Grid item xs={12}>
            <SaveSurveyBtn />
          </Grid>
        </Grid>
      </S.Container>
    </S.AddSurveyTemplate>
  );
};

export default AddSurveyTemplate;
