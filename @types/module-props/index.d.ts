declare module 'module-props' {
  interface ILoginFormProps {
    onClickSubmitBtn: (data: { email: string; password: string }) => void;
  }

  interface ISideBarProps {
    open: boolean;
    onClose: () => void;
  }

  interface IHeaderProps {
    isSideBarOpened: boolean;
    onOpenSideBar: () => void;
  }

  interface IChartProps {
    title?: string;
    selector?: string[];
    type?: 'line' | 'bar' | 'pie';
    data: { time: string; amount?: number }[];
  }

  interface IParticipationProps {
    title?: string;
    participationCount: number;
  }

  interface ISurveyListProps {
    title?: string;
    data: {
      id: number;
      date: string;
      title: string;
      count: number;
    }[];
  }

  interface ISurveyHeaderProps {
    title: string;
  }

  interface IQuestionBoxProps {
    title: string;
    type: 'checkbox' | 'radio';
    list: { [key: string]: string }[];
  }

  interface IJoinSurveyFormProps {
    title: string;
    description: string;
    open: boolean;
    onClickCancelBtn: () => void;
    onClickJoinBtn: () => void;
  }
}
