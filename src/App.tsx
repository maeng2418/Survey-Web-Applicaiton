import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
} from 'pages';
import moment from 'moment';

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
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/list" component={SurveyListPage} />
          <Route exact path="/list/add" component={AddSurveyPage} />
          <Route exact path="/list/report" component={SurveyReportPage} />
        </Switch>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
