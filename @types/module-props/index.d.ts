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
    selector?: boolean;
    type?: 'line' | 'bar' | 'pie';
    data: { label: string; amount?: number }[];
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
    idx: string;
    type: 'checkbox' | 'radio';
    list: { [key: string]: string }[];
    onSelectCheckboxOption: (
      questionId: string,
      event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    onSelectRadioOption: (questionId: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  }

  interface IJoinSurveyFormProps {
    title: string;
    description: string;
    open: boolean;
    onClickCancelBtn: () => void;
    onClickJoinBtn: () => void;
    onChangeName: (name: string) => void;
  }

  interface IReportSurveyTitleProps {
    title: string;
  }
}
