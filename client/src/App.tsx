import React, { useEffect } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Normalize from 'styles/Nomalize';
import GlobalStyles from 'styles/GlobalStyles';

import { ThemeProvider } from '@material-ui/styles';
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
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
import { Loading, SystemMsgDialog } from 'components';

import moment from 'moment';

import { useDispatch, useSelector } from 'react-redux';
import { customHistory, State } from 'store';
import { authRequest } from 'store/slices/user';

const theme = unstable_createMuiStrictModeTheme({
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
          <Route exact path="/survey/:surveyIdx" component={SurveyPage} />
          <Route exact path="/login" component={LoginPage} />
          <RestrictRoute exact path="/dashboard" component={DashboardPage} />
          <RestrictRoute exact path="/list" component={SurveyListPage} />
          <RestrictRoute exact path="/list/add" component={AddSurveyPage} />
          <RestrictRoute exact path="/list/report/:surveyIdx" component={SurveyReportPage} />
        </Switch>
        <SystemMsgDialog />
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
};

const RestrictRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.user);
  useEffect(() => {
    dispatch(authRequest({}));
  }, []);
  return (
    <Route
      {...rest}
      render={(props) =>
        !user.token && user.isLoading ? (
          <Loading visible={user.isLoading} />
        ) : user.token ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default App;
