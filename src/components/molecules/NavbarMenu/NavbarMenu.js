import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledUl = styled.ul`
  display: none;
  width: 90%;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const StyledLi = styled.li`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  padding: 20px 30px;
  margin: 0 60px;
  color: black;
  border: 2px solid black;
  border-radius: 25px;
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.accentsColor};
  transition: color 0.4s 0.1s ease-in-out, text-decoration-color 0.4s 0.1s ease-in-out,
    border 0.4s 0.1s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.accentsColor};
    border: 2px solid ${({ theme }) => theme.accentsColor};
    text-decoration-color: black;
  }

  &.selected {
    color: ${({ theme }) => theme.accentsColor};
    border: 2px solid ${({ theme }) => theme.accentsColor};
    text-decoration-color: black;
  }
`;

const NavbarMenu = () => {
  return (
    <StyledUl>
      <StyledLi exact as={NavLink} activeClassName="selected" to="/">
        Home
      </StyledLi>

      <StyledLi exact as={NavLink} activeClassName="selected" to="/search/byCountry">
        by Country
      </StyledLi>

      <StyledLi exact as={NavLink} activeClassName="selected" to="/search/byCapital">
        by Capital
      </StyledLi>
    </StyledUl>
  );
};

export default NavbarMenu;
