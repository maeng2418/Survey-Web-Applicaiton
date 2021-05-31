import React from 'react';
import * as S from './AddSurveyBtnStyles';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';

const AddSurveyBtn: React.FC = () => {
  const history = useHistory();
  return (
    <S.AddSurveyBtn onClick={() => history.push('/list/add')} color="primary" aria-label="add">
      <AddIcon />
    </S.AddSurveyBtn>
  );
};

export default AddSurveyBtn;
