import React from 'react';
import { ISurveyHeaderProps } from 'module-props';
import * as S from './SurveyHeaderStyles';
import { Toolbar, Typography } from '@material-ui/core';

const SurveyHeader: React.FC<ISurveyHeaderProps> = ({ title }) => {
  return (
    <S.Header position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          {title}
        </Typography>
      </Toolbar>
    </S.Header>
  );
};

export default SurveyHeader;
