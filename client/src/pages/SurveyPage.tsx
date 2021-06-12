import React from 'react';
import { SurveyTemplate } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'store';

const SurveyPage: React.FC = () => {
  const dispatch = useDispatch();
  const participant = useSelector((state: State) => state.participant);
  return <SurveyTemplate questionList={participant.questionList} surveyTitle={participant.title} />;
};

export default SurveyPage;
