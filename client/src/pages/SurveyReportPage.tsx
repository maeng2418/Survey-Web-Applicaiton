import React, { useEffect, useState } from 'react';
import { AdminTemplate, SurveyReportTemplate } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { loadParticipantsRequest, loadReportRequest } from 'store/slices/report';
import { State } from 'store';
import { useParams } from 'react-router-dom';

const SurveyReportPage: React.FC = () => {
  const { surveyIdx } = useParams<{ surveyIdx: string }>();
  const dispatch = useDispatch();
  const reportData = useSelector((state: State) => state.report);
  const [type, setType] = useState(new Array(reportData.questionList.length).fill('bar'));

  useEffect(() => {
    dispatch(loadReportRequest({ surveyId: parseInt(surveyIdx), page: 0 }));
    dispatch(loadParticipantsRequest({ surveyId: parseInt(surveyIdx) }));
  }, []);

  const createChart = (optionList: { optionId: number; option: string; selector: string[] }[]) => {
    return optionList.map((item: { option: string; selector: string[] }) => {
      return { label: item.option, amount: item.selector.length };
    });
  };

  const onSelectType = (event: React.ChangeEvent<{ value: unknown }>, idx: number) => {
    const copiedType = [...type];
    copiedType[idx] = event.target.value as string;
    setType([...copiedType]);
  };

  return (
    <AdminTemplate>
      <SurveyReportTemplate
        surveyTitle={reportData.title}
        totalParticipationCount={1024}
        createChart={createChart}
        questionList={reportData.questionList}
        participants={reportData.totalParticipant}
        type={type}
        onSelectType={onSelectType}
      />
    </AdminTemplate>
  );
};

export default SurveyReportPage;
