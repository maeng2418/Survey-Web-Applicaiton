import React from 'react';
import { IChartProps } from 'module-props';
import * as S from './ChartStyles';
import { Title, LineChart, BarChart, GraphSelect, PieChart, LogTable } from 'components';

const Chart: React.FC<IChartProps> = ({
  idx = 0,
  title,
  xTitle,
  yTitle,
  data,
  selector,
  type = 'line',
  onSelectType = (event) => {
    console.log(event.target.value);
  },
}) => {
  return (
    <S.Chart>
      {title ? <Title>{title}</Title> : null}
      {selector && (
        <S.Selector>
          <GraphSelect idx={idx} type={type} onSelectType={onSelectType} />
        </S.Selector>
      )}
      {type === 'line' && <LineChart xTitle={xTitle} yTitle={yTitle} data={data} />}
      {type === 'bar' && <BarChart xTitle={xTitle} yTitle={yTitle} data={data} />}
      {type === 'pie' && <PieChart data={data} />}
      {type === 'log' && <LogTable data={data} />}
    </S.Chart>
  );
};

export default Chart;
