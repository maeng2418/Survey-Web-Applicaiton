import React from 'react';
import * as S from './MainTemplateStyles';
import { Headline, JoinSurveyForm } from 'components';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { IMainTemplateProps } from 'template-props';

const MainTemplate: React.FC<IMainTemplateProps> = ({ type, onClickMainBtn }) => {
  return (
    <S.MainTemplate>
      <S.Content>
        <Headline />
        {type === 'main' && (
          <S.MainButton
            size="large"
            variant="contained"
            color="primary"
            startIcon={<PersonPinIcon />}
            onClick={onClickMainBtn}
          >
            관리자 로그인
          </S.MainButton>
        )}
        {type === 'join' && (
          <>
            <S.MainButton
              size="large"
              variant="contained"
              color="primary"
              startIcon={<AssignmentIcon />}
              onClick={onClickMainBtn}
            >
              설문 조사 시작
            </S.MainButton>
            <JoinSurveyForm
              title={'오늘의 야식'}
              description={'오늘 먹을 야식을 조사합니다.'}
              onClickCancelBtn={() => console.log('cancel')}
              onClickJoinBtn={() => console.log('join')}
              open={false}
            />
          </>
        )}
      </S.Content>
    </S.MainTemplate>
  );
};

export default MainTemplate;
