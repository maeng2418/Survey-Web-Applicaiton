import React from 'react';
import { ILineChartProps } from 'atom-props';
import { ResponsiveContainer, LineChart as Chart, Line, XAxis, YAxis, Label } from 'recharts';

const LineChart: React.FC<ILineChartProps> = ({ data }) => {
  return (
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
        <XAxis dataKey="label" stroke={'#bdbdbd'}>
          <Label angle={0} position="bottom" style={{ textAnchor: 'middle', fill: '#ffffff' }}>
            Day
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
  );
};

export default LineChart;
