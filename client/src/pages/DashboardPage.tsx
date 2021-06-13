import React, { useEffect } from 'react';
import { AdminTemplate, DashboardTemplate } from 'components';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { loadDashboardRequest } from 'store/slices/dashboard';
import { State } from 'store';

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch();
  const dashboardData = useSelector((state: State) => state.dashboard);

  useEffect(() => {
    dispatch(loadDashboardRequest({}));
  }, []);

  const chartData = dashboardData.weeklyParticipantsList.map((day: number, idx: number) => {
    const dayList = ['일', '월', '화', '수', '목', '금', '토'];
    return { label: dayList[idx], amount: day };
  });

  const getSurveyData = () => {
    const lastestSurvey: any = dashboardData.lastestSurvey;
    const result = [];
    for (const key in lastestSurvey) {
      result.push({
        id: parseInt(key),
        date: moment().format('YYYY-MM-DD'),
        title: lastestSurvey[key]['title'],
        count: lastestSurvey[key]['count'],
      });
    }
    return result;
  };

  return (
    <AdminTemplate>
      <DashboardTemplate
        chartData={chartData}
        participationCount={dashboardData.totalParticipants}
        surveyData={getSurveyData()}
      />
    </AdminTemplate>
  );
};

export default DashboardPage;
