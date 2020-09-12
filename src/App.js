import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

import MainTemplate from 'template/MainTemplate';
import NavigationTemplate from 'template/NavigationTemplate';

import Routes from 'Routes/Routes';

import './App.css';

function App() {
  return (
    <Router>
      <LastLocationProvider>
        <MainTemplate>
          <NavigationTemplate />
          <Routes />
        </MainTemplate>
      </LastLocationProvider>
    </Router>
  );
}

export default App;
