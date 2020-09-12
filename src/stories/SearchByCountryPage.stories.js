import React from 'react';
import SearchByCountry from 'pages/SearchByCountry';
import NavigationTemplate from 'template/NavigationTemplate';

export default {
  title: 'Pages/SearchByCountry',
  component: SearchByCountry,
  decorators: [
    (Story) => (
      <>
        <NavigationTemplate />
        <Story />
      </>
    ),
  ],
};

export const Primary = () => <SearchByCountry />;
