import React from 'react';
import { Header } from 'components/atoms/Header/Header';
import { Span } from 'components/atoms/Span/Span';

export default {
  title: 'Components/Header',
  component: Header,
};

export const Primary = () => (
  <Header>
    Search info for all
    <Span> COUNTRIES </Span>
    on the globe!
  </Header>
);
