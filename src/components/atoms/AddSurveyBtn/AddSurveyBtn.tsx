import React from 'react';
import * as S from './AddSurveyBtnStyles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useHistory } from 'react-router-dom';

const AddSurveyBtn: React.FC = () => {
  const history = useHistory();
  return (
    <S.AddSurveyBtn onClick={() => history.push('/list/add')} color="primary">
      <AddCircleIcon />
    </S.AddSurveyBtn>
  );
};

export default AddSurveyBtn;
