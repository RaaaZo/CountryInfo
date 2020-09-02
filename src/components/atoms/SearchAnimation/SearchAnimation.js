import React from 'react';
import { ReactComponent as SearchSvg } from 'assets/svg/searchByCountry.svg';
import styled from 'styled-components';

const StyledSearchSvg = styled(SearchSvg)`
  display: none;
  width: 100%;
  max-width: 1024px;
  height: 200px;
  margin: 20px auto 0 auto;

  @media (min-width: 410px) {
    display: block;
  }

  @media (min-width: 1024px) {
    height: 280px;
  }

  @media (min-width: 1440px) {
    height: 350px;
  }
`;

const SearchAnimation = () => {
  return <StyledSearchSvg />;
};

export default SearchAnimation;
