import React from 'react';
import * as S from './SystemMsgDialogStyles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector, useDispatch } from 'react-redux';
import { onHideSystemMsg } from 'store/slices/systemMsg';
import { State } from 'store';

const SystemMsgDialog: React.FC = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useDispatch();
  const systemMsgData = useSelector((state: State) => state.systemMsg);
  const onHideDialog = () => {
    dispatch(onHideSystemMsg());
  };
  return (
    <Dialog
      onClose={onHideDialog}
      aria-labelledby="customized-dialog-title"
      open={systemMsgData.visible}
      fullScreen={fullScreen}
      fullWidth={true}
    >
      <S.Title disableTypography>
        <Typography variant="h6">시스템 메시지</Typography>
        <IconButton aria-label="close" onClick={onHideDialog}>
          <CloseIcon />
        </IconButton>
      </S.Title>
      <DialogContent>
        <Typography>{systemMsgData.message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onHideDialog} color="secondary">
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SystemMsgDialog;
