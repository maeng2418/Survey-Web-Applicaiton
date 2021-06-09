import React from 'react';
import * as S from './SurveyTitleInputStyles';
import { Grid, Typography, TextField } from '@material-ui/core';

const SurveyTitleInput: React.FC<any> = ({ title, onChangeTitle }) => {
  return (
    <S.SurveyTitleInput container spacing={3}>
      <Grid item xs={12} md={1}>
        <Typography variant="h6" component="h6">
          제목
        </Typography>
      </Grid>
      <Grid item xs={12} md={11}>
        <TextField
          required
          label="Title"
          variant="outlined"
          size="small"
          fullWidth
          color="secondary"
          onChange={(event) => onChangeTitle(event.target.value)}
          value={title}
          defaultValue={title}
        />
      </Grid>
    </S.SurveyTitleInput>
  );
};

export default SurveyTitleInput;
