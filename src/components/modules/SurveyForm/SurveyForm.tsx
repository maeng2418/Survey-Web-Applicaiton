import React, { useState } from 'react';
import * as S from './SurveyFormStyles';
import { QuestionFormBox, SurveyTitleInput } from 'components';
import { Button, Grid } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const SurveyForm: React.FC = () => {
  const [questionList, setQuestionList] = useState<React.ReactNode[]>([
    <Grid item xs={12} key={0}>
      <QuestionFormBox />
    </Grid>,
  ]);
  const onClickAddQuestionBtn = () => {
    setQuestionList([
      ...questionList,
      <Grid item xs={12} key={questionList.length}>
        <QuestionFormBox />
      </Grid>,
    ]);
  };

  return (
    <S.SurveyForm>
      <S.Title>
        <SurveyTitleInput />
      </S.Title>
      <S.Content container spacing={3}>
        {questionList.map((_question, idx) => (
          <Grid item xs={12} key={idx}>
            <QuestionFormBox />
          </Grid>
        ))}
      </S.Content>
      <S.Footer>
        <Button size="large" variant="contained" color="primary" onClick={onClickAddQuestionBtn}>
          <AddCircleIcon /> 질문 추가하기
        </Button>
      </S.Footer>
    </S.SurveyForm>
  );
};

export default SurveyForm;
