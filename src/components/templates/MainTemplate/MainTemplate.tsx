import React from 'react';
import * as S from './MainTemplateStyles';
import { Headline, JoinSurveyForm } from 'components';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { IMainTemplateProps } from 'template-props';

const MainTemplate: React.FC<IMainTemplateProps> = ({ onClickLoginBtn, onClickSurveyBtn }) => {
  return (
    <S.MainTemplate>
      <S.Header>
        <S.LoginBtn size="large" onClick={onClickLoginBtn}>
          LOGIN
        </S.LoginBtn>
      </S.Header>
      <S.Content>
        <Headline />
        <S.SurveyBtn
          size="large"
          variant="contained"
          color="primary"
          startIcon={<AssignmentIcon />}
          onClick={onClickSurveyBtn}
        >
          설문 조사 시작
        </S.SurveyBtn>
        <JoinSurveyForm
          title={'오늘의 야식'}
          description={'오늘 먹을 야식을 조사합니다.'}
          onClickCancelBtn={() => console.log('cancel')}
          onClickJoinBtn={() => console.log('join')}
          open={true}
        />
      </S.Content>
    </S.MainTemplate>
  );
};

export default MainTemplate;
