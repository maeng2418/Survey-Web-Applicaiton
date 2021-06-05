import React from 'react';
import * as S from './QuestionInputStyles';
import { Grid, TextField } from '@material-ui/core';

const QuestionInput: React.FC = () => {
  return (
    <S.QuestionInput container spacing={3}>
      <Grid item xs={12} md={1}>
        <S.Title variant="h6">질문 내용</S.Title>
      </Grid>
      <Grid item xs={12} md={11}>
        <TextField
          required
          label="Question"
          variant="outlined"
          size="small"
          fullWidth
          color="secondary"
        />
      </Grid>
    </S.QuestionInput>
  );
};

export default QuestionInput;
