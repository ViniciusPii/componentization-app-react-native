import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './views/Home';
import {ThemeProvider} from 'styled-components';
import {baseColors} from './colors/baseColors';

const App = () => {
  return (
    <ThemeProvider theme={baseColors}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
