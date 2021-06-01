import React from 'react';
import * as S from './AddSurveyTemplateStyles';
import { Grid } from '@material-ui/core';
import { Pwl, QuestionFormBox, SurveyForm } from 'components';

const AddSurveyTemplate: React.FC = () => {
  return (
    <S.AddSurveyTemplate>
      <S.Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Print Working Location */}
          <Pwl />
          {/* Survey List */}
          <Grid item xs={12}>
            <SurveyForm />
          </Grid>
        </Grid>
      </S.Container>
    </S.AddSurveyTemplate>
  );
};

export default AddSurveyTemplate;
