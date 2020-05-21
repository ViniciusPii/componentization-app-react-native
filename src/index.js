import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components';
import { Colors } from './components';

import Routes from './routes';

const App = () => {
  return (
    <ThemeProvider theme={Colors}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
