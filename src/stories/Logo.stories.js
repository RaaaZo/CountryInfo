import React from 'react';
import { Logo } from 'components/atoms/Logo/Logo';
import logo from 'assets/images/logo.png';

export default {
  title: 'Components/Logo',
  component: Logo,
};

export const Primary = () => <Logo src={logo} />;
