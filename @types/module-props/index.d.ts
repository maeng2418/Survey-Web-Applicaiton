declare module 'module-props' {
  interface ILoginFormProps {
    data: { [key: string]: string };
    onClickSubmitBtn: (data: { [key: string]: string }) => void;
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
}
