import React from 'react';
import { ISurveyList } from 'module-props';
import * as S from './SurveyListStyles';
import { Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { Title } from 'components';

const SurveyList: React.FC<ISurveyList> = ({
  title,
  data,
  onClickModify,
  onClickReport,
  onClickLog,
  onClickTitle,
}) => {
  return (
    <S.SurveyListPaper>
      <Title>{title}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Participation</TableCell>
            <TableCell>Modify</TableCell>
            <TableCell>Report</TableCell>
            <TableCell>Log</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell onClick={() => onClickTitle(item.id)}>{item.title}</TableCell>
              <TableCell>{item.count}</TableCell>
              <TableCell onClick={() => onClickModify(item.id)}>수정하기</TableCell>
              <TableCell onClick={() => onClickReport(item.id)}>리포트 보기</TableCell>
              <TableCell onClick={() => onClickLog(item.id)}>로그 보기</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </S.SurveyListPaper>
  );
};

export default SurveyList;
