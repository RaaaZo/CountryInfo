import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MainTheme } from 'theme/mainTheme';
import { addDecorator } from '@storybook/react';
import GlobalStyle from 'theme/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <>
      <BrowserRouter>
        <ThemeProvider theme={MainTheme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      </BrowserRouter>
    </>
  ),
];
