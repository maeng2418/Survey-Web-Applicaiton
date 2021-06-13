import React from 'react';
import { IQuestionBoxProps } from 'module-props';
import * as S from './QuestionBoxStyles';
import { Title } from 'components';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
} from '@material-ui/core';

const QuestionBox: React.FC<IQuestionBoxProps> = ({
  title,
  idx,
  type,
  list,
  onSelectCheckboxOption,
  onSelectRadioOption,
}) => {
  return (
    <S.QuestionBox>
      <Title>{title}</Title>
      <S.Content>
        <FormControl component="fieldset">
          {type === 'radio' && (
            <RadioGroup aria-label="answer-group" name="answer">
              {list.map((option, optionIdx) => (
                <FormControlLabel
                  key={optionIdx}
                  value={option.value}
                  control={<Radio onChange={(event) => onSelectRadioOption(idx, event)} />}
                  label={`${idx} ${option.label}`}
                />
              ))}
            </RadioGroup>
          )}
          {type === 'checkbox' && (
            <FormGroup aria-label="answer-group">
              {list.map((option, optionIdx) => (
                <FormControlLabel
                  key={optionIdx}
                  control={
                    <Checkbox
                      name={option.value}
                      onChange={(event) => onSelectCheckboxOption(idx, event)}
                    />
                  }
                  label={`${idx} ${option.label}`}
                />
              ))}
            </FormGroup>
          )}
        </FormControl>
      </S.Content>
    </S.QuestionBox>
  );
};

export default QuestionBox;
