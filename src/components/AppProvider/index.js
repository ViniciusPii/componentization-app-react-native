import React from 'react';
import { ThemeProvider } from 'styled-components';

const AppProvider = ({ children, theme }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppProvider;
