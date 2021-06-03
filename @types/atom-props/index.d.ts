declare module 'atom-props' {
  interface IListItemButtonProps {
    title: string;
    icon: React.ReactNode;
    onClick: () => void;
  }

  interface ILineChartProps {
    data: { time: string; amount?: number }[];
  }
}
