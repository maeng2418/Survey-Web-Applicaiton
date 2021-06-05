import React from 'react';
import { IChartProps } from 'module-props';
import * as S from './ChartStyles';
import { Title, LineChart, GraphSelect } from 'components';

const Chart: React.FC<IChartProps> = ({ title, data, selector = [], type = 'line' }) => {
  return (
    <S.Chart>
      {title ? <Title>{title}</Title> : null}
      {selector.length > 0 && (
        <S.Selector>
          <GraphSelect />
        </S.Selector>
      )}
      {type === 'line' && <LineChart data={data} />}
    </S.Chart>
  );
};

export default Chart;
