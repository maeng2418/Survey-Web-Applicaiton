import React from 'react';
import * as S from './MainTemplateStyles';
import { Headline } from 'components';

const MainTemplate: React.FC = () => {
  return (
    <S.MainTemplate>
      <Headline />
    </S.MainTemplate>
  );
};

export default MainTemplate;
