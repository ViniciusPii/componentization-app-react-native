import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import theme from './themes';
import { AppProvider } from './components';

import Routes from './routes';

const App = () => {
  return (
    <AppProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
