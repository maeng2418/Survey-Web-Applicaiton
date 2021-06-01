import React from 'react';
import * as S from './AnswerTypeSelectStyles';
import { Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const AnswerTypeSelect: React.FC = () => {
  return (
    <S.AnswerTypeSelect container spacing={3}>
      <Grid item xs={12} md={1}>
        <S.Title variant="h6">답변 형태</S.Title>
      </Grid>
      <Grid item xs={12} md={11}>
        <FormControl variant="outlined" fullWidth size="small" color="secondary" required>
          <InputLabel id="answer-type-label">AnswerType</InputLabel>
          <Select labelId="answer-type-label" label="AnswerType">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </S.AnswerTypeSelect>
  );
};

export default AnswerTypeSelect;
