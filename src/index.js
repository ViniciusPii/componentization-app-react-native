import React from 'react';

import {ThemeProvider} from 'styled-components';

import Home from './views/Home';
import Login from './views/Login';

import {baseColors} from './colors/baseColors';

const App = () => {
  return (
    <ThemeProvider theme={baseColors}>
      <Login />
    </ThemeProvider>
  );
};

export default App;
