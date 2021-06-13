import React from 'react';
import { IReportSurveyTitleProps } from 'module-props';
import * as S from './ReportSurveyTitleStyles';
import { Typography } from '@material-ui/core';
import { Title } from 'components';

const ReportSurveyTitle: React.FC<IReportSurveyTitleProps> = ({ title }) => {
  return (
    <S.ReportSurveyTitlePaper>
      <Title>설문지 제목</Title>
      <Typography component="p" variant="h3" gutterBottom>
        {title}
      </Typography>
    </S.ReportSurveyTitlePaper>
  );
};

export default ReportSurveyTitle;
