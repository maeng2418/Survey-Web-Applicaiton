import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import * as S from './LoadingStyles';
import { CircularProgress } from '@material-ui/core';
import { ILoadingProps } from 'atom-props';

const Loading: React.FC<ILoadingProps> = ({ visible }) => {
  const ref = useRef<any>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector('#root');
    setMounted(true);
  }, []);

  return mounted && visible
    ? createPortal(
        <S.Loading>
          <CircularProgress />
        </S.Loading>,
        ref.current
      )
    : null;
};

export default Loading;
