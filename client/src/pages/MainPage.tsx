import React, { useState, useEffect } from 'react';
import { MainTemplate } from 'components';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, init, joinRequest } from 'store/slices/participant';
import { State } from 'store';

const MainPage: React.FC = () => {
  const history = useHistory();
  const [type, setType] = useState('main');
  const [open, setOpen] = useState(false);
  const { surveyIdx } = useParams<{ surveyIdx: string }>();
  const dispatch = useDispatch();
  const participant = useSelector((state: State) => state.participant);

  useEffect(() => {
    if (history.location.pathname.includes('/join')) {
      setType('join');
      dispatch(init({ surveyId: parseInt(surveyIdx) }));
    } else {
      history.replace('/');
    }
  }, []);

  const onClickLoginBtn = () => {
    history.push('/login');
  };

  const onClickSurveyBtn = () => {
    setOpen(true);
  };

  const onClickCancelBtn = () => {
    setOpen(false);
  };

  const onChangeName = (name: string) => {
    dispatch(changeName({ name: name }));
  };

  const onClickJoinBtn = () => {
    dispatch(joinRequest({ surveyId: participant.surveyId, name: participant.name }));
    setOpen(false);
  };

  return (
    <MainTemplate
      type={type === 'join' ? 'join' : 'main'}
      onClickMainBtn={type === 'join' ? onClickSurveyBtn : onClickLoginBtn}
      onClickCancelBtn={onClickCancelBtn}
      onChangeName={onChangeName}
      onClickJoinBtn={onClickJoinBtn}
      open={open}
    />
  );
};

export default MainPage;
