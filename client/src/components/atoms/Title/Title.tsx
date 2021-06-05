import React from 'react';
import * as S from './TitleStyles';

const Title: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <S.Title variant="h6" gutterBottom>
        {children}
      </S.Title>
    </React.Fragment>
  );
};

export default Title;
