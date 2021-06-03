import React from 'react';
import * as S from './SurveyTemplateStyles';
import { Grid, Paper } from '@material-ui/core';
import { SurveyHeader } from 'components';

const SurveyTemplate: React.FC = () => {
  return (
    <S.SurveyTemplate>
      <SurveyHeader title={'설문지 제목'} />
      <S.Content maxWidth="lg">
        <Grid container spacing={5}>
          {/* 질문 리스트 */}
          <Grid item xs={12}>
            <Paper>{/* 질문 */}</Paper>
          </Grid>
        </Grid>
      </S.Content>
    </S.SurveyTemplate>
  );
};

export default SurveyTemplate;
