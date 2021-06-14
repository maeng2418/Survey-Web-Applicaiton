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
    chartData: { label: string; amount: number }[];
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
    onInfiniteScroll: (event: any) => void;
  }

  interface ISurveyReportTemplateProps {
    surveyTitle: string;
    totalParticipationCount: number;
    createChart: (
      optionList: {
        optionId: number;
        option: string;
        selector: string[];
      }[]
    ) => {
      label: string;
      amount: number;
    }[];
    questionList: {
      questionId: number;
      question: string;
      position: number;
      optionList: {
        optionId: number;
        option: string;
        selector: string[];
      }[];
    }[];
    participants: number;
    type: string[];
    onSelectType: (event: React.ChangeEvent<{ value: unknown }>, idx: number) => void;
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
    onInfiniteScroll: (event: any) => void;
  }
}
