import React from 'react';
import * as S from './PwlStyles';
import { Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Pwl: React.FC = () => {
  const history = useHistory();

  const locationList = history.location.pathname
    .split('/')
    .filter((path) => path)
    .map((path) => {
      switch (path) {
        case 'add':
          return {
            title: '설문지 추가',
            url: '/list/add',
          };
        case 'edit':
          return {
            title: '설문지 수정',
            url: `/list/edit/${history.location.hash}`,
          };
        case 'report':
          return {
            title: '설문지 리포트',
            url: `/list/report/${history.location.hash}`,
          };
        case 'log':
          return {
            title: '참여자 로그',
            url: `/list/log/${history.location.hash}`,
          };
        case 'list':
        default:
          return { title: '설문지 목록', url: '/list' };
      }
    });

  const PwlList = locationList.map((item, idx) => {
    if (locationList.length === 1) {
      return <span key={idx}>{item.title}</span>;
    } else if (locationList.length - 1 === idx) {
      return (
        <React.Fragment key={idx}>
          <S.Next>&gt;</S.Next>
          <span key={idx}>{item.title}</span>
        </React.Fragment>
      );
    } else if (idx === 0) {
      return (
        <Link key={idx} href={item.url} color="secondary">
          {item.title}
        </Link>
      );
    } else {
      return (
        <React.Fragment key={idx}>
          <S.Next>&gt;</S.Next>
          <Link href={item.url} color="secondary">
            {item.title}
          </Link>
        </React.Fragment>
      );
    }
  });

  return (
    <S.Pwl item xs={12}>
      <S.Section>{PwlList}</S.Section>
    </S.Pwl>
  );
};

export default Pwl;
