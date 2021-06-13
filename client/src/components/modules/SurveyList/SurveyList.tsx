import React from 'react';
import { ISurveyListProps } from 'module-props';
import * as S from './SurveyListStyles';
import { Link, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { Title } from 'components';

const SurveyList: React.FC<ISurveyListProps> = ({ title, data }) => {
  return (
    <S.SurveyListPaper>
      {title ? <Title>{title}</Title> : null}
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
              <TableCell>
                <Link href={`/join/${item.id}`} color="secondary">
                  {item.title}
                </Link>
              </TableCell>
              <TableCell>{item.count}</TableCell>
              <TableCell>
                <Link href={`/list/edit/${item.id}`} color="secondary">
                  수정하기
                </Link>
              </TableCell>
              <TableCell>
                <Link href={`/list/report/${item.id}`} color="secondary">
                  리포트 보기
                </Link>
              </TableCell>
              <TableCell>
                <Link href={`/list/log/${item.id}`} color="secondary">
                  로그 보기
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </S.SurveyListPaper>
  );
};

export default SurveyList;
