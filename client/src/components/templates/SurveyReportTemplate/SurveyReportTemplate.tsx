import React from 'react';
import { ISurveyReportTemplateProps } from 'template-props';
import * as S from './SurveyReportTemplateStyles';
import { Grid } from '@material-ui/core';
import { Pwl, Participation, Chart, ReportSurveyTitle } from 'components';

const SurveyReportTemplate: React.FC<ISurveyReportTemplateProps> = ({
  surveyTitle,
  totalParticipationCount,
  questionList,
  createChart,
  participants,
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
                {/* TITLE */}
                <ReportSurveyTitle title={surveyTitle} />
              </S.UpperGridItem>
              <S.UpperGridItem item xs={12} md={6}>
                {/* TOTAL */}
                <Participation title="Total" participationCount={participants} />
              </S.UpperGridItem>
              {questionList.map((question, idx) => (
                <S.BottomGridItem item xs={12} key={idx}>
                  {/* CHART */}
                  <Chart
                    data={createChart(question.optionList)}
                    title={question.question}
                    xTitle={'옵션'}
                    yTitle={'응답 수'}
                    selector
                    type={'pie'}
                  />
                </S.BottomGridItem>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </S.Container>
    </S.SurveyReportTemplate>
  );
};

export default SurveyReportTemplate;
