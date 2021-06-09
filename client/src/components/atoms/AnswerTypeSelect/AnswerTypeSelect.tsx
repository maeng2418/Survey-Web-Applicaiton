import React from 'react';
import * as S from './AnswerTypeSelectStyles';
import { Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const AnswerTypeSelect: React.FC<any> = ({
  idx,
  onChangeAnswerType,
  value = 'boolean',
  defaultValue = 'boolean',
}) => {
  return (
    <S.AnswerTypeSelect container spacing={3}>
      <Grid item xs={12} md={1}>
        <S.Title variant="h6">답변 형태</S.Title>
      </Grid>
      <Grid item xs={12} md={11}>
        <FormControl variant="outlined" fullWidth size="small" color="secondary" required>
          <InputLabel id="answer-type-label">AnswerType</InputLabel>
          <Select
            labelId="answer-type-label"
            label="AnswerType"
            onChange={(event) => onChangeAnswerType(idx, event.target.value)}
            defaultValue={defaultValue}
            value={value}
          >
            <MenuItem value={'boolean'}>Yes / No</MenuItem>
            <MenuItem value={'checkbox'}>한 개 선택</MenuItem>
            <MenuItem value={'radio'}>여러 개 선택</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </S.AnswerTypeSelect>
  );
};

export default AnswerTypeSelect;
