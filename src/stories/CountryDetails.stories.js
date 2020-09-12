import React from 'react';
import CountryDetails from 'pages/CountryDetailsByName';
import NavigationTemplate from 'template/NavigationTemplate';

export default {
  title: 'Pages/CountryDetails',
  component: CountryDetails,
  decorators: [
    (Story) => (
      <>
        <NavigationTemplate />
        <Story />
      </>
    ),
  ],
};

export const Primary = () => <CountryDetails />;
