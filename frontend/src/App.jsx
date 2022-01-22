import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './Routes';

import GlobalStyle from './styles/global';
import { lightTheme } from './styles/themes';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
