declare module 'template-props' {
  interface IMainTemplateProps {
    type: 'main' | 'join';
    onClickMainBtn: () => void;
  }

  interface ILoginTemplateProps {
    onClickSubmitBtn: (data: { email: string; password: string }) => void;
  }

  interface IDashboardTemplateProps {
    chartData: { time: string; amount?: number }[];
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
    chartData: { time: string; amount?: number }[];
    todayParticipationCount: number;
    totalParticipationCount: number;
  }
}
