import React from 'react';
import styled from 'styled-components';

import { Header } from 'components/atoms/Header/Header';
import { Span } from 'components/atoms/Span/Span';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 90%;
  max-width: 1024px;
  height: 100%;
  margin: 40px auto;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const StyledHeader = styled(Header)`
  margin: 20px 0;
`;

const StyledButton = styled(Button)`
  @media (min-width: 768px) {
    margin: 20px 40px;
  }
`;

const HomeWelcome = () => {
  return (
    <Wrapper>
      <StyledHeader>
        Search info for all
        <Span> COUNTRIES </Span>
        on the globe!
      </StyledHeader>
      <Paragraph>
        Just click below in "by Country" or "by Capital" button to search just like that all info
        about selected country!
      </Paragraph>
      <ButtonWrapper>
        <StyledButton as={Link} to="/search/byCountry">
          by Country
        </StyledButton>
        <StyledButton as={Link} to="/search/byCapital">
          by Capital
        </StyledButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default HomeWelcome;
