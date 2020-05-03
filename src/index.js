import React from 'react';

import {ThemeProvider} from 'styled-components';

import Home from './views/Home';

import {baseColors} from './colors/baseColors';

const App = () => {
  return (
    <ThemeProvider theme={baseColors}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
