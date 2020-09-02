import React, { useState } from 'react';
import styled from 'styled-components';

import logo from 'assets/images/logo.png';

import { Logo } from 'components/atoms/Logo/Logo';
import HamburgerMenu from 'components/atoms/HamburgerMenu/HamburgerMenu';
import { Link } from 'react-router-dom';
import MobileModalMenu from '../MobileModalMenu/MobileModalMenu';
import NavbarMenu from '../NavbarMenu/NavbarMenu';

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  background-color: ${({ theme }) => theme.secondaryColor};

  @media (min-width: 414px) {
    height: 125px;
  }

  @media (min-width: 768px) {
    height: 150px;
  }
`;

const MobileMenu = () => {
  const [isModalMenuOpen, setIsModalMenuOpen] = useState(false);

  const handleModalMenu = () => {
    setIsModalMenuOpen((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <NavbarMenu />
      <HamburgerMenu isModalMenuOpen={isModalMenuOpen} handleModalMenu={handleModalMenu} />
      <MobileModalMenu isModalMenuOpen={isModalMenuOpen} handleModalMenu={handleModalMenu} />
    </Wrapper>
  );
};

export default MobileMenu;
