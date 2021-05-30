import React from 'react';
import { ILineChartProps } from 'module-props';
import * as S from './LineChartStyles';
import { Typography } from '@material-ui/core';
import { LineChart as Chart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';

const LineChart: React.FC<ILineChartProps> = ({ data }) => {
  return (
    <S.LineChartPaper>
      <Typography component="h2" variant="h6" gutterBottom>
        Today
      </Typography>
      <ResponsiveContainer>
        <Chart
          data={data}
          margin={{
            top: 16,
            right: 32,
            bottom: 60,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={'#bdbdbd'}>
            <Label angle={0} position="bottom" style={{ textAnchor: 'middle', fill: '#ffffff' }}>
              Time
            </Label>
          </XAxis>
          <YAxis stroke={'#bdbdbd'}>
            <Label angle={270} position="left" style={{ textAnchor: 'middle', fill: '#ffffff' }}>
              Participants
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={'#ff9800'} dot={false} />
        </Chart>
      </ResponsiveContainer>
    </S.LineChartPaper>
  );
};

export default LineChart;
