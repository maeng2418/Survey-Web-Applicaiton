import React from 'react';
import theme from 'styles/theme';
import Normalize from 'styles/Nomalize';
import GlobalStyles from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <div>HELLO IGAWORKS</div>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
