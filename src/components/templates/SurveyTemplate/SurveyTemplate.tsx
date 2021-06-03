import React from 'react';
import * as S from './SurveyTemplateStyles';
import { Toolbar, Typography, Grid, Paper } from '@material-ui/core';

const SurveyTemplate: React.FC = () => {
  return (
    <S.SurveyTemplate>
      <S.Header position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {/* 설문지 제목 */}
          </Typography>
        </Toolbar>
      </S.Header>
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
