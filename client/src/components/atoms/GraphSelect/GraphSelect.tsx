import React from 'react';
import { IGraphSelect } from 'atom-props';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const GraphSelect: React.FC<IGraphSelect> = ({ idx, type, onSelectType }) => {
  return (
    <FormControl variant="outlined" fullWidth size="small" color="secondary">
      <InputLabel id="answer-type-label">GraphType</InputLabel>
      <Select
        labelId="answer-type-label"
        label="AnswerType"
        defaultValue={'line'}
        value={type}
        onChange={(event) => onSelectType(event, idx)}
      >
        <MenuItem value={'bar'}>막대</MenuItem>
        <MenuItem value={'pie'}>원형</MenuItem>
        <MenuItem value={'log'}>로그</MenuItem>
      </Select>
    </FormControl>
  );
};

export default GraphSelect;
