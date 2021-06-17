import React, { useState } from 'react';
import { SurveyTemplate } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'store';
import { loadSurveyDetailRequest, submitSurveyRequest } from 'store/slices/participant';

const SurveyPage: React.FC = () => {
  const dispatch = useDispatch();
  const participant = useSelector((state: State) => state.participant);
  const [selectedOptions, setSelectedOptions] = useState<{ [id: string]: string[] }>({});

  const onSelectCheckboxOption = (
    questionId: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const optionId = event.target.name;
    const copiedOption = { ...selectedOptions };
    // 체크
    if (event.target.checked) {
      if (copiedOption.hasOwnProperty(questionId)) {
        copiedOption[questionId].push(optionId);
      } else {
        copiedOption[questionId] = [optionId];
      }
      // 체크 해제
    } else {
      const filteredOptions = copiedOption[questionId].filter((option) => option !== optionId);
      copiedOption[questionId] = filteredOptions;
    }
    setSelectedOptions({ ...copiedOption });
  };

  const onSelectRadioOption = (questionId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const optionId = event.target.value;
    const copiedOption = { ...selectedOptions };
    // 선택
    copiedOption[questionId] = [optionId];
    setSelectedOptions({ ...copiedOption });
  };

  const onClickSubmitBtn = () => {
    dispatch(submitSurveyRequest({ participantId: participant.id, options: selectedOptions }));
  };

  const onInfiniteScroll = (event: any) => {
    if (event.target.scrollTop + event.target.clientHeight + 50 > event.target.scrollHeight) {
      if (participant.load === false) {
        dispatch(loadSurveyDetailRequest());
      }
    }
  };

  return (
    <SurveyTemplate
      questionList={participant.questionList}
      surveyTitle={participant.title}
      onSelectCheckboxOption={onSelectCheckboxOption}
      onSelectRadioOption={onSelectRadioOption}
      onClickSubmitBtn={onClickSubmitBtn}
      onInfiniteScroll={onInfiniteScroll}
    />
  );
};

export default SurveyPage;
