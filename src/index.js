import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components';
import { baseColors } from './colors/baseColors';

import Routes from './routes';
import AuthProvider from './contexts/auth';

const App = () => {
  return (
    <ThemeProvider theme={baseColors}>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
