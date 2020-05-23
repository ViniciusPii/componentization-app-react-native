import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import theme from './theme';
import { AppProvider } from './components';
import GlobalProvider from './contexts/GlobalContext';

import Routes from './routes';

const App = () => {
  return (
    <AppProvider theme={theme}>
      <GlobalProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </GlobalProvider>
    </AppProvider>
  );
};

export default App;
