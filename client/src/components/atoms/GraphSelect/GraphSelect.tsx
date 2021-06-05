import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const GraphSelect: React.FC = () => {
  return (
    <FormControl variant="outlined" fullWidth size="small" color="secondary">
      <InputLabel id="answer-type-label">GraphType</InputLabel>
      <Select labelId="answer-type-label" label="AnswerType" defaultValue={'line'}>
        <MenuItem value={'line'}>선형</MenuItem>
        <MenuItem value={'pie'}>원형</MenuItem>
        <MenuItem value={'bar'}>막대</MenuItem>
      </Select>
    </FormControl>
  );
};

export default GraphSelect;
