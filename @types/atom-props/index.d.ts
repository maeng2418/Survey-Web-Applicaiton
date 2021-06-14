declare module 'atom-props' {
  interface IListItemButtonProps {
    title: string;
    icon: React.ReactNode;
    onClick: () => void;
  }

  interface ILineChartProps {
    xTitle: string;
    yTitle: stirng;
    data: { label: string; amount: number }[];
  }

  interface ILoadingProps {
    visible: boolean;
  }

  interface IBarChartProps {
    xTitle: string;
    yTitle: stirng;
    data: { label: string; amount: number }[];
  }

  interface IPieChartProps {
    data: { label: string; amount: number }[];
  }

  interface ILogTableProps {
    data: { label: string; amount: number }[];
  }

  interface IGraphSelect {
    idx: number;
    type: string;
    onSelectType: (event: React.ChangeEvent<{ value: unknown }>, idx: number) => void;
  }
}
