import React from 'react';
import { ILogTableProps } from 'atom-props';
import * as S from './LogTableStyles';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const LogTable: React.FC<ILogTableProps> = ({ data }) => {
  return (
    <S.LogTablePaper>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>항목</TableCell>
            <TableCell>응답자</TableCell>
            <TableCell>응답비율</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell>{item.label}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{`${(
                (item.amount / data.reduce((acc, cur) => acc + cur.amount, 0)) *
                100
              ).toFixed(1)} %`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </S.LogTablePaper>
  );
};

export default LogTable;
