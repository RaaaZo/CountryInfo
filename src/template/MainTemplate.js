import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes, { element } from 'prop-types';

import { MainTheme } from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyles';
import Footer from 'components/organisms/Footer/Footer';

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={MainTheme}>
      <GlobalStyle />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.arrayOf(element).isRequired,
};

export default MainTemplate;
