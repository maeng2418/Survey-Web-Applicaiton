declare module 'template-props' {
  interface IMainTemplateProps {
    type: 'main' | 'join';
    onClickMainBtn: () => void;
    onClickCancelBtn: () => void;
    onChangeName: (name: string) => void;
    onClickJoinBtn: () => void;
    surveyTitle: string;
    open: boolean;
  }

  interface ILoginTemplateProps {
    onClickSubmitBtn: (data: { email: string; password: string }) => void;
  }

  interface IDashboardTemplateProps {
    chartData: { label: string; amount?: number }[];
    participationCount: number;
    surveyData: {
      id: number;
      date: string;
      title: string;
      count: number;
    }[];
  }

  interface ISurveyListTemplateProps {
    surveyData: {
      id: number;
      date: string;
      title: string;
      count: number;
    }[];
  }

  interface ISurveyReportTemplateProps {
    chartData: { label: string; amount?: number }[];
    todayParticipationCount: number;
    totalParticipationCount: number;
  }

  interface ISurveyTemplateProps {
    surveyTitle: string;
    questionList: {
      idx: number;
      question: string;
      position: number;
      type: string;
      optionList: { id: number; title: string }[];
    }[];
    onSelectCheckboxOption: (
      questionId: string,
      event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    onSelectRadioOption: (questionId: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    onClickSubmitBtn: () => void;
  }
}
