import React from 'react';
import * as S from './DeleteQuestionBtnStyles';

const DeleteQuestionBtn: React.FC<any> = ({ idx, onClickDeleteQuestionBtn }) => {
  return (
    <S.DeleteBtn
      size="small"
      variant="contained"
      color="primary"
      onClick={() => onClickDeleteQuestionBtn(idx)}
    >
      DELETE
    </S.DeleteBtn>
  );
};

export default DeleteQuestionBtn;
