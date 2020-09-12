import React from 'react';
import HomePage from 'pages/HomePage';
import NavigationTemplate from 'template/NavigationTemplate';

export default {
  title: 'Pages/HomePage',
  component: HomePage,
  decorators: [
    (Story) => (
      <>
        <NavigationTemplate />
        <Story />
      </>
    ),
  ],
};

export const Primary = () => <HomePage />;
