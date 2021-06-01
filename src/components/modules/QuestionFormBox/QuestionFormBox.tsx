import React from 'react';
import * as S from './QuestionFormBoxStyles';
import { QuestionInput, AnswerTypeSelect, SelectItemInput } from 'components';
const QuestionFormBox: React.FC = () => {
  return (
    <S.QuestionFormBox elevation={3}>
      <QuestionInput />
      <AnswerTypeSelect />
      <SelectItemInput />
    </S.QuestionFormBox>
  );
};

export default QuestionFormBox;
