import React from 'react';
import { IChartProps } from 'module-props';
import * as S from './ChartStyles';
import { Title, LineChart, BarChart, GraphSelect } from 'components';

const Chart: React.FC<IChartProps> = ({ title, xTitle, yTitle, data, selector, type = 'line' }) => {
  return (
    <S.Chart>
      {title ? <Title>{title}</Title> : null}
      {selector && (
        <S.Selector>
          <GraphSelect />
        </S.Selector>
      )}
      {type === 'line' && <LineChart xTitle={xTitle} yTitle={yTitle} data={data} />}
      {type === 'bar' && <BarChart xTitle={xTitle} yTitle={yTitle} data={data} />}
    </S.Chart>
  );
};

export default Chart;
