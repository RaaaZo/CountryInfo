import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const NavModal = styled.div`
  width: 150px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondaryColor};
  -webkit-box-shadow: -10px 5px 30px -8px rgba(0, 0, 0, 1);
  -moz-box-shadow: -10px 5px 30px -8px rgba(0, 0, 0, 1);
  box-shadow: -10px 5px 30px -8px rgba(0, 0, 0, 1);
  z-index: 999;
  transform: translateX(200%);
  transition: transform 0.6s 0.1s ease-in-out;

  @media (min-width: 414px) {
    width: 200px;
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    width: 250px;
  }

  @media (min-width: 1024px) {
    display: none;
  }

  ${({ isModalMenuOpen }) =>
    isModalMenuOpen &&
    css`
      transform: translateX(0);
    `}
`;

const StyledNavLink = styled(NavLink)`
  width: 90%;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  color: black;
  background-color: ${({ theme }) => theme.accentsColor};
  margin: 20px 0;
  padding: 10px 20px;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.black};
  border-radius: 15px;
  transition: color 0.4s 0.1s ease-in-out, background-color 0.4s 0.1s ease-in-out,
    border 0.4s 0.1s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.accentsColor};
    background-color: ${({ theme }) => theme.secondaryColor};
    border: 2px solid ${({ theme }) => theme.accentsColor};
  }

  @media (min-width: 414px) {
    margin: 40px 0;
  }

  @media (min-width: 768px) {
    margin: 70px 0;
  }

  &.selected {
    color: ${({ theme }) => theme.accentsColor};
    background-color: ${({ theme }) => theme.secondaryColor};
    border: 2px solid ${({ theme }) => theme.accentsColor};
  }
`;

const MobileModalMenu = ({ handleModalMenu, isModalMenuOpen }) => {
  return (
    <NavModal isModalMenuOpen={isModalMenuOpen}>
      <StyledNavLink exact onClick={handleModalMenu} activeClassName="selected" to="/">
        Home
      </StyledNavLink>

      <StyledNavLink
        exact
        onClick={handleModalMenu}
        activeClassName="selected"
        to="/search/byCountry"
      >
        by Country
      </StyledNavLink>

      <StyledNavLink
        exact
        onClick={handleModalMenu}
        activeClassName="selected"
        to="/search/byCapital"
      >
        by Capital
      </StyledNavLink>
    </NavModal>
  );
};

MobileModalMenu.propTypes = {
  handleModalMenu: PropTypes.func.isRequired,
  isModalMenuOpen: PropTypes.bool.isRequired,
};

export default MobileModalMenu;
