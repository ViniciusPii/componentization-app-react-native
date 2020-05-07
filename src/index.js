import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeProvider} from 'styled-components';
import {baseColors} from './colors/baseColors';

import Routes from './routes';

const App = () => {
  return (
    <ThemeProvider theme={baseColors}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
