import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 25px;
  background-color: ${({ theme }) => theme.secondaryColor};
`;

const StyledLink = styled.a`
  display: block;
  margin: 0 auto;
  color: black;
  font-weight: 700;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <>
      <Wrapper>
        <StyledLink href="https://github.com/RaaaZo" target="_blank">
          Mateusz Koprowicz©
        </StyledLink>
      </Wrapper>
    </>
  );
};

export default Footer;
