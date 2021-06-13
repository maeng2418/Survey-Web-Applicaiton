import React from 'react';
import * as S from './MainTemplateStyles';
import { Headline, JoinSurveyForm } from 'components';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { IMainTemplateProps } from 'template-props';

const MainTemplate: React.FC<IMainTemplateProps> = ({
  type,
  surveyTitle,
  onClickMainBtn,
  onClickCancelBtn,
  onChangeName,
  onClickJoinBtn,
  open,
}) => {
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
              title={surveyTitle}
              description={'이름을 입력하시고 [JOIN] 버튼을 누르면 설문이 시작됩니다.'}
              onClickCancelBtn={onClickCancelBtn}
              onClickJoinBtn={onClickJoinBtn}
              onChangeName={onChangeName}
              open={open}
            />
          </>
        )}
      </S.Content>
    </S.MainTemplate>
  );
};

export default MainTemplate;
