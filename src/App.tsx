import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Normalize from 'styles/Nomalize';
import GlobalStyles from 'styles/GlobalStyles';

import { ThemeProvider } from '@material-ui/styles';

import { CssBaseline, createMuiTheme } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { MainPage } from 'pages';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: blue[600],
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
