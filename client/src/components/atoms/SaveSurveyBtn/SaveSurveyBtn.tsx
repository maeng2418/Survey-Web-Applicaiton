import React from 'react';
import * as S from './SaveSurveyBtnStyles';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'store';
import { saveSurveyRequest } from 'store/slices/survey';

const SaveSurveyBtn: React.FC = () => {
  const survey = useSelector((state: State) => state.survey);
  const user = useSelector((state: State) => state.user);
  const dispatch = useDispatch();
  const onClickSaveBtn = () => {
    dispatch(
      saveSurveyRequest({
        title: survey.title,
        writerId: user.id,
        questionList: survey.questionList,
      })
    );
  };
  return (
    <S.SaveSurveyBtnPaper>
      <S.SaveSurveyBtn size="large" variant="contained" color="primary" onClick={onClickSaveBtn}>
        저장하기
      </S.SaveSurveyBtn>
    </S.SaveSurveyBtnPaper>
  );
};

export default SaveSurveyBtn;
