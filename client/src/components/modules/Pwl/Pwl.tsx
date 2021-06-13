import React from 'react';
import * as S from './PwlStyles';
import { Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Pwl: React.FC = () => {
  const history = useHistory();

  const locationList = history.location.pathname
    .split('/')
    .filter((path) => path)
    .reduce((acc: { title: string; url: string }[], path) => {
      if (path === 'list') {
        acc.push({
          title: '설문지 목록',
          url: '/list',
        });
      }
      if (path === 'add') {
        acc.push({
          title: '설문지 추가',
          url: '/list/add',
        });
      }
      if (path === 'edit') {
        acc.push({
          title: '설문지 수정',
          url: `/list/edit/${history.location.hash}`,
        });
      }
      if (path === 'report') {
        acc.push({
          title: '설문지 리포트',
          url: `/list/report/${history.location.hash}`,
        });
      }
      if (path === 'log') {
        acc.push({
          title: '참여자 로그',
          url: `/list/log/${history.location.hash}`,
        });
      }
      return acc;
    }, []);

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

  return <S.Section>{PwlList}</S.Section>;
};

export default Pwl;
