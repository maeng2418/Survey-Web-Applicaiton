import React from 'react';
import * as S from './DeleteQuestionBtnStyles';

const DeleteQuestionBtn: React.FC = () => {
  return (
    <S.DeleteBtn size="small" variant="contained" color="primary">
      DELETE
    </S.DeleteBtn>
  );
};

export default DeleteQuestionBtn;
