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
    onOpen: () => void;
  }
}
