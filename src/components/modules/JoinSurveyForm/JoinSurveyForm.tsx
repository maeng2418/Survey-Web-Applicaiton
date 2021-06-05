import React from 'react';
import * as S from './JoinSurveyFormStyles';
import { IJoinSurveyFormProps } from 'module-props';
import {
  Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const JoinSurveyForm: React.FC<IJoinSurveyFormProps> = ({
  title,
  description,
  onClickCancelBtn,
  onClickJoinBtn,
  open,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <S.JoinSurveyForm
        open={open}
        onClose={onClickCancelBtn}
        aria-labelledby="form-dialog-title"
        fullScreen={fullScreen}
        fullWidth={true}
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            color="secondary"
            variant="standard"
            placeholder="이름을 입력해주세요."
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClickCancelBtn}>Cancel</Button>
          <Button onClick={onClickJoinBtn} color="secondary">
            Join
          </Button>
        </DialogActions>
      </S.JoinSurveyForm>
    </>
  );
};

export default JoinSurveyForm;
