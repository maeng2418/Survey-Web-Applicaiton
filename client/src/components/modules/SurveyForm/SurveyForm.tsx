import React from 'react';
import * as S from './SurveyFormStyles';
import { QuestionFormBox, SurveyTitleInput } from 'components';
import { Button, Grid } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useDispatch, useSelector } from 'react-redux';
import {
  addOption,
  removeOption,
  addQuestion,
  changePosition,
  changeQuestion,
  changeType,
  deleteQuestion,
  changeOptionValue,
  changeTitle,
  changePositionSurveyQuestions,
} from 'store/slices/survey';
import { State } from 'store';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const SurveyForm: React.FC = () => {
  const survey = useSelector((state: State) => state.survey);
  const dispatch = useDispatch();

  const onClickAddQuestionBtn = () => {
    dispatch(addQuestion({}));
  };

  const onClickDeleteQuestionBtn = (idx: number) => {
    dispatch(deleteQuestion({ idx: idx }));
  };

  const onChangeQuestion = (idx: number, question: string) => {
    dispatch(changeQuestion({ idx: idx, question: question }));
  };

  const onChangePosition = (idx: number, position: number) => {
    dispatch(changePosition({ idx: idx, position: position }));
  };

  const onChangeType = (idx: number, type: string) => {
    dispatch(changeType({ idx: idx, type: type }));
  };

  const onClickAddOptionBtn = (idx: number, optionIdx: number) => {
    dispatch(addOption({ idx: idx, optionIdx: optionIdx }));
  };

  const onClickRemoveOptionBtn = (idx: number, start: string) => {
    dispatch(removeOption({ idx: idx, start: start }));
  };

  const onChangeOptionValue = (idx: number, start: string, value: string) => {
    dispatch(changeOptionValue({ idx: idx, start: start, value: value }));
  };

  const onChangeTitle = (title: string) => {
    dispatch(changeTitle({ title: title }));
  };

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;

    const currentItems = [...survey.questionList];
    const draggingItemIndex = result.source.index;
    const afterDragItemIndex = result.destination.index;
    const removeItem = currentItems.splice(draggingItemIndex, 1);

    currentItems.splice(afterDragItemIndex, 0, removeItem[0]);
    dispatch(changePositionSurveyQuestions(currentItems));
  };

  return (
    <S.SurveyForm>
      <S.Title>
        <SurveyTitleInput onChangeTitle={onChangeTitle} title={survey.title} />
      </S.Title>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="tags" direction="vertical">
          {(provided) => (
            <S.Content container spacing={3} {...provided.droppableProps} ref={provided.innerRef}>
              {survey &&
                survey.questionList &&
                survey.questionList.map((question, idx) =>
                  question ? (
                    <Draggable key={idx} draggableId={`${idx}`} index={idx}>
                      {(provided) => (
                        <Grid
                          item
                          xs={12}
                          key={question.idx}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <QuestionFormBox
                            {...question}
                            onClickDeleteQuestionBtn={onClickDeleteQuestionBtn}
                            onChangeQuestion={onChangeQuestion}
                            onChangePosition={onChangePosition}
                            onChangeType={onChangeType}
                            onClickAddOptionBtn={onClickAddOptionBtn}
                            onClickRemoveOptionBtn={onClickRemoveOptionBtn}
                            onChangeOptionValue={onChangeOptionValue}
                          />
                        </Grid>
                      )}
                    </Draggable>
                  ) : null
                )}
              {provided.placeholder}
            </S.Content>
          )}
        </Droppable>
      </DragDropContext>
      <S.Footer>
        <Button size="large" variant="contained" color="primary" onClick={onClickAddQuestionBtn}>
          <AddCircleIcon /> 질문 추가하기
        </Button>
      </S.Footer>
    </S.SurveyForm>
  );
};

export default SurveyForm;
