import React from 'react';
import { ThemeProvider } from 'styled-components';
import GloblaProvider from '../../contexts/GlobalContext';

const AppProvider = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <GloblaProvider>{children}</GloblaProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
