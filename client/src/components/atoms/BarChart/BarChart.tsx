import React from 'react';
import { IBarChartProps } from 'atom-props';
import { ResponsiveContainer, BarChart as Chart, Bar, XAxis, YAxis, Label } from 'recharts';

const BarChart: React.FC<IBarChartProps> = ({ xTitle, yTitle, data }) => {
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
            {xTitle}
          </Label>
        </XAxis>
        <YAxis stroke={'#bdbdbd'}>
          <Label angle={270} position="left" style={{ textAnchor: 'middle', fill: '#ffffff' }}>
            {yTitle}
          </Label>
        </YAxis>
        <Bar type="monotone" dataKey="amount" fill={'#ff9800'} />
      </Chart>
    </ResponsiveContainer>
  );
};

export default BarChart;
