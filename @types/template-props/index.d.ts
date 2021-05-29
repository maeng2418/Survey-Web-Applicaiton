declare module 'template-props' {
  interface IMainTemplateProps {
    onClickLoginBtn: () => void;
    onClickSurveyBtn: () => void;
  }

  interface ILoginTemplateProps {
    data: { [key: string]: string };
    onClickSubmitBtn: (data: { [key: string]: string }) => void;
  }
}
