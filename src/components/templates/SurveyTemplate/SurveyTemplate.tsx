import React from 'react';
import * as S from './SurveyTemplateStyles';
import { Grid, Paper } from '@material-ui/core';
import { SurveyHeader, QuestionBox } from 'components';

const SurveyTemplate: React.FC = () => {
  return (
    <S.SurveyTemplate>
      <SurveyHeader title={'설문지 제목'} />
      <S.Content maxWidth="lg">
        <Grid container spacing={5}>
          {/* 질문 리스트 */}
          <QuestionBox
            title={'1. 당신의 성별은?'}
            type={'radio'}
            list={[
              { label: '남자', value: 'male' },
              { label: '여자', value: 'female' },
            ]}
          />
          <QuestionBox
            title={'2. 오늘 야식을 먹는다면?'}
            type={'checkbox'}
            list={[
              { label: '치킨', value: 'chicken' },
              { label: '피자', value: 'pizza' },
              { label: '삼겹살', value: 'pork' },
            ]}
          />
        </Grid>
      </S.Content>
    </S.SurveyTemplate>
  );
};

export default SurveyTemplate;
