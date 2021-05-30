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

  interface ILineChartProps {
    data: { time: string; amount?: number }[];
  }

  interface IParticipationProps {
    participationCount: number;
  }

  interface ISurveyList {
    title?: string;
    data: {
      id: number;
      date: string;
      title: string;
      count: number;
    }[];
  }
}
