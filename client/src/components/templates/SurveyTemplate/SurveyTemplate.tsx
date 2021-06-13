import React from 'react';
import { ISurveyTemplateProps } from 'template-props';
import * as S from './SurveyTemplateStyles';
import { Grid, Button } from '@material-ui/core';
import { SurveyHeader, QuestionBox } from 'components';

const SurveyTemplate: React.FC<ISurveyTemplateProps> = ({
  surveyTitle,
  questionList,
  onSelectCheckboxOption,
  onSelectRadioOption,
  onClickSubmitBtn,
}) => {
  return (
    <S.SurveyTemplate>
      <SurveyHeader title={surveyTitle} />
      <S.Content maxWidth="lg">
        <Grid container spacing={5}>
          {/* 질문 리스트 */}
          {questionList.map((question, idx) => (
            <Grid item xs={12} key={idx}>
              <QuestionBox
                title={question.question}
                idx={`${question.idx}`}
                type={question.type === 'radio' ? 'radio' : 'checkbox'}
                list={question.optionList.map((option) => {
                  return { label: option.title, value: `${option.id}` };
                })}
                onSelectCheckboxOption={onSelectCheckboxOption}
                onSelectRadioOption={onSelectRadioOption}
              />
            </Grid>
          ))}
        </Grid>
      </S.Content>
      <S.Footer>
        <Button size="large" variant="contained" color="primary" onClick={onClickSubmitBtn}>
          제출하기
        </Button>
      </S.Footer>
    </S.SurveyTemplate>
  );
};

export default SurveyTemplate;
