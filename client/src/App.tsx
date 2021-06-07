import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Normalize from 'styles/Nomalize';
import GlobalStyles from 'styles/GlobalStyles';

import { ThemeProvider } from '@material-ui/styles';

import { CssBaseline, createMuiTheme } from '@material-ui/core';
import { indigo, blue } from '@material-ui/core/colors';
import {
  MainPage,
  LoginPage,
  DashboardPage,
  SurveyListPage,
  AddSurveyPage,
  SurveyReportPage,
  SurveyPage,
} from 'pages';
import moment from 'moment';

import { useDispatch, useSelector } from 'react-redux';
import { customHistory, State } from 'store';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: blue[400],
    },
  },
});

const App: React.FC = () => {
  moment.locale('kr');
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <CssBaseline />
      <Router history={customHistory}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/join/:surveyIdx" component={MainPage} />
          <Route exact path="/survey/:surveyIdx/" component={SurveyPage} />
          <Route exact path="/login" component={LoginPage} />
          <RestrictRoute exact path="/dashboard" component={DashboardPage} />
          <RestrictRoute exact path="/list" component={SurveyListPage} />
          <RestrictRoute exact path="/list/add" component={AddSurveyPage} />
          <RestrictRoute exact path="/list/report" component={SurveyReportPage} />
        </Switch>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
};

const RestrictRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const user = useSelector((state: State) => state.user);
  const isAuthenticated = user.token ? true : false;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          // 권한이 있을 경우
          return <Component {...props} />;
        } else {
          // 권한이 없을 경우
          return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
        }
      }}
    />
  );
};

export default App;
