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

const QuestionBox: React.FC<IQuestionBoxProps> = ({ title, type, list }) => {
  return (
    <S.QuestionBox item xs={12}>
      <S.QuestionPaper>
        <Title>{title}</Title>
        <S.Content>
          <FormControl component="fieldset">
            {type === 'radio' && (
              <RadioGroup aria-label="answer-group" name="answer">
                {list.map((option, idx) => (
                  <FormControlLabel
                    key={idx}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                  />
                ))}
              </RadioGroup>
            )}
            {type === 'checkbox' && (
              <FormGroup aria-label="answer-group">
                {list.map((option, idx) => (
                  <FormControlLabel
                    key={idx}
                    control={<Checkbox name={option.value} />}
                    label={option.label}
                  />
                ))}
              </FormGroup>
            )}
          </FormControl>
        </S.Content>
      </S.QuestionPaper>
    </S.QuestionBox>
  );
};

export default QuestionBox;
