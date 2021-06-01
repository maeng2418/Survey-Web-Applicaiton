import React from 'react';
import * as S from './SurveyReportTemplateStyles';
import { Grid } from '@material-ui/core';

const SurveyReportTemplate: React.FC = () => {
  return (
    <S.SurveyReportTemplate>
      <S.Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12}>
            {/* PWL */}
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={5}>
              <S.UpperGridItem item xs={12} md={6}>
                {/* TOTAL */}
              </S.UpperGridItem>
              <S.UpperGridItem item xs={12} md={6}>
                {/* TODAY */}
              </S.UpperGridItem>
              <S.BottomGridItem item xs={12}>
                {/* CHART */}
              </S.BottomGridItem>
            </Grid>
          </Grid>
        </Grid>
      </S.Container>
    </S.SurveyReportTemplate>
  );
};

export default SurveyReportTemplate;
