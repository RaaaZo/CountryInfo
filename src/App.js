import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainTemplate from 'template/MainTemplate';
import NavigationTemplate from 'template/NavigationTemplate';
import HomePage from 'components/pages/HomePage';
import SearchByCountry from 'components/pages/SearchByCountry';
import SearchByCapital from 'components/pages/SearchByCapital';
import CountryDetailsByName from 'components/pages/CountryDetailsByName';
import CountryDetailsByCapital from 'components/pages/CountryDetailsByCapital';

import { AnimatedSwitch } from 'react-router-transition';
import './App.css';

function App() {
  return (
    <Router>
      <MainTemplate>
        <NavigationTemplate />
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/search/byCountry">
            <SearchByCountry />
          </Route>
          <Route exact path="/search/byCapital">
            <SearchByCapital />
          </Route>
          <Route exact path="/byCountry/:countryName">
            <CountryDetailsByName />
          </Route>

          <Route exact path="/byCapital/:capitalName">
            <CountryDetailsByCapital />
          </Route>
        </AnimatedSwitch>
      </MainTemplate>
    </Router>
  );
}

export default App;
