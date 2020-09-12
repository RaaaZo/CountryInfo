import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: none;
  width: 90%;
  height: 100%;
  margin: 20px auto;
  padding: 20px;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.secondaryColor};
  border: 2px solid black;
  border-radius: 25px;
  transform: translateX(200%);
  transition: transform 0.4s 0.1s ease-in-out;

  @media (min-width: 413px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 1360px) {
    width: 60%;
  }

  ${({ isCardOpen }) =>
    isCardOpen &&
    css`
      display: flex;
      transform: translateX(0);
    `}
`;

const DatabaseCard = ({ children, isCardOpen }) => {
  return <Wrapper isCardOpen={isCardOpen}>{children}</Wrapper>;
};

export default DatabaseCard;
