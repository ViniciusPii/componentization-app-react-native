import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components';
import { Colors } from './components';

import Routes from './routes';
import AuthProvider from './contexts/auth';

const App = () => {
  return (
    <ThemeProvider theme={Colors}>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
