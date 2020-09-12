import React from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { RedirectWithoutLastLocation, useLastLocation } from 'react-router-last-location';

import HomePage from 'pages/HomePage';
import SearchByCountry from 'pages/SearchByCountry';
import SearchByCapital from 'pages/SearchByCapital';
import CountryDetails from 'pages/CountryDetails';

const Routes = () => {
  const lastLocation = useLastLocation();

  return (
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

      <Route exact path="/countryDetails/:name">
        {lastLocation ? <CountryDetails /> : <RedirectWithoutLastLocation to="/" />}
      </Route>
    </AnimatedSwitch>
  );
};

export default Routes;
