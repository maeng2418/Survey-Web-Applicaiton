declare module 'atom-props' {
  interface IListItemButtonProps {
    title: string;
    icon: React.ReactNode;
    onClick: () => void;
  }

  interface ILineChartProps {
    data: { label: string; amount?: number }[];
  }

  interface ILoadingProps {
    visible: boolean;
  }
}
