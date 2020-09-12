import React from 'react';
import SearchByCapital from 'pages/SearchByCapital';
import NavigationTemplate from 'template/NavigationTemplate';

export default {
  title: 'Pages/SearchByCapital',
  component: SearchByCapital,
  decorators: [
    (Story) => (
      <>
        <NavigationTemplate />
        <Story />
      </>
    ),
  ],
};

export const Primary = () => <SearchByCapital />;
