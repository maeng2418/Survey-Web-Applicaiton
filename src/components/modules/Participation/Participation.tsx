import React from 'react';
import { IParticipationProps } from 'module-props';
import * as S from './ParticipationStyles';
import { Typography } from '@material-ui/core';
import { Title } from 'components';
import moment from 'moment';

const Participation: React.FC<IParticipationProps> = ({ participationCount }) => {
  return (
    <S.ParticipationPaper>
      <Title>누적 참여자 수</Title>
      <Typography component="p" variant="h3" gutterBottom>
        {participationCount.toLocaleString()} 명
      </Typography>
      <Typography color="textSecondary">on {moment().format('DD MMM, YYYY')}</Typography>
    </S.ParticipationPaper>
  );
};

export default Participation;
