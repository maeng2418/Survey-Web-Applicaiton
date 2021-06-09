import React, { useState, useEffect } from 'react';
import * as S from './QuestionFormBoxStyles';
import { QuestionInput, AnswerTypeSelect, SelectItemInput, DeleteQuestionBtn } from 'components';

const QuestionFormBox: React.FC<any> = ({
  idx,
  question,
  type,
  position,
  optionList,
  onClickDeleteQuestionBtn,
  onChangeQuestion,
  onChangePosition,
  onChangeType,
  onClickAddOptionBtn,
  onClickRemoveOptionBtn,
  onChangeOptionValue,
}) => {
  return (
    <S.QuestionFormBox elevation={3}>
      <DeleteQuestionBtn idx={idx} onClickDeleteQuestionBtn={onClickDeleteQuestionBtn} />
      <QuestionInput idx={idx} onChangeQuestion={onChangeQuestion} value={question} />
      <AnswerTypeSelect
        idx={idx}
        onChangeAnswerType={onChangeType}
        value={type}
        defaultValue={type}
      />
      <SelectItemInput
        idx={idx}
        type={type}
        onClickAddOptionBtn={onClickAddOptionBtn}
        onClickRemoveOptionBtn={onClickRemoveOptionBtn}
        optionList={optionList}
        onChangeOptionValue={onChangeOptionValue}
      />
    </S.QuestionFormBox>
  );
};

export default QuestionFormBox;
