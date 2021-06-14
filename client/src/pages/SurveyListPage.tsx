import React, { useEffect } from 'react';
import { AdminTemplate, SurveyListTemplate } from 'components';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { loadListRequest } from 'store/slices/list';
import { State } from 'store';

const SurveyListPage: React.FC = () => {
  const dispatch = useDispatch();
  const listData = useSelector((state: State) => state.list);

  useEffect(() => {
    dispatch(loadListRequest());
  }, []);

  const onInfiniteScroll = (event: any) => {
    if (event.target.scrollTop + event.target.clientHeight + 50 > event.target.scrollHeight) {
      dispatch(loadListRequest());
    }
  };

  const getSurveyData = () => {
    const survey: any = listData.survey;
    const result = [];
    for (const key in survey) {
      result.push({
        id: parseInt(key),
        date: moment().format('YYYY-MM-DD'),
        title: survey[key]['title'],
        count: survey[key]['count'],
      });
    }
    return result;
  };

  return (
    <AdminTemplate>
      <SurveyListTemplate surveyData={getSurveyData()} onInfiniteScroll={onInfiniteScroll} />
    </AdminTemplate>
  );
};

export default SurveyListPage;
