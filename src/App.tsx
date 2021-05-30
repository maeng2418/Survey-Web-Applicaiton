import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Normalize from 'styles/Nomalize';
import GlobalStyles from 'styles/GlobalStyles';

import { ThemeProvider } from '@material-ui/styles';

import { CssBaseline, createMuiTheme } from '@material-ui/core';
import indigo from '@material-ui/core/colors/indigo';
import { MainPage, LoginPage, DashboardPage } from 'pages';
import moment from 'moment';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: indigo[500],
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
        </Switch>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
