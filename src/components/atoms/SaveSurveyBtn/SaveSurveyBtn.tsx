import React from 'react';
import * as S from './SaveSurveyBtnStyles';

const SaveSurveyBtn: React.FC = () => {
  return (
    <S.SaveSurveyBtnPaper>
      <S.SaveSurveyBtn size="large" variant="contained" color="primary">
        저장하기
      </S.SaveSurveyBtn>
    </S.SaveSurveyBtnPaper>
  );
};

export default SaveSurveyBtn;
