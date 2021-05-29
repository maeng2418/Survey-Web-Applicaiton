import React from 'react';
import * as S from './MainTemplateStyles';
import { Headline } from 'components';
import AssignmentIcon from '@material-ui/icons/Assignment';

const MainTemplate: React.FC = () => {
  return (
    <S.MainTemplate>
      <S.Header>
        <S.LoginBtn size="large">LOGIN</S.LoginBtn>
      </S.Header>
      <S.Content>
        <Headline />
        <S.SurveyBtn
          size="large"
          variant="contained"
          color="primary"
          startIcon={<AssignmentIcon />}
        >
          설문 조사
        </S.SurveyBtn>
      </S.Content>
    </S.MainTemplate>
  );
};

export default MainTemplate;
