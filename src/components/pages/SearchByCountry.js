import React, { Fragment, useState } from 'react';
import styled, { css } from 'styled-components';

import { Header } from 'components/atoms/Header/Header';
import { Span } from 'components/atoms/Span/Span';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
import SearchAnimation from 'components/atoms/SearchAnimation/SearchAnimation';
import { useHistory } from 'react-router-dom';

const DUMMY_DATA = [
  {
    id: 1,
    name: 'Poland',
  },
  {
    id: 2,
    name: 'USA',
  },
  {
    id: 3,
    name: 'Great Britain',
  },
  {
    id: 4,
    name: 'Germany',
  },
  {
    id: 5,
    name: 'Spain',
  },
  {
    id: 6,
    name: 'Portugal',
  },
];

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    margin: 40px auto;
  }

  ${({ selectedOnes }) =>
    selectedOnes &&
    css`
      @media (min-width: 768px) {
        margin: 40px auto;
        width: 50%;
        flex-flow: row wrap;
      }
    `}
`;

const StyledHeader = styled(Header)`
  margin: 20px;

  @media (min-width: 768px) {
    margin: 40px auto;
  }
`;

const StyledButton = styled(Button)`
  margin: 10px auto;

  @media (min-width: 768px) {
    margin: 20px auto;
  }
`;

const StyledInput = styled(Input)`
  margin: 10px auto 20px auto;

  @media (min-width: 768px) {
    margin: 20px auto 40px auto;
  }
`;

const SearchByCountry = () => {
  const [value, setValue] = useState('');

  const history = useHistory();

  const handleInputValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <StyledHeader>
        Search by
        <Span> Country </Span>
        name!
      </StyledHeader>

      <form
        onSubmit={() => {
          history.push(`/byCountry/${value}`);
        }}
      >
        <InnerWrapper>
          <Label htmlFor="countryName">Country name</Label>
          <StyledInput
            id="countryName"
            name="countryName"
            placeholder="etc. Poland"
            onChange={handleInputValue}
            value={value}
          />
          <StyledButton type="submit">Search</StyledButton>
        </InnerWrapper>
      </form>

      <StyledHeader>List of frequently selected countries</StyledHeader>

      <InnerWrapper selectedOnes>
        {DUMMY_DATA.map((item) => (
          <Fragment key={item.id}>
            <StyledButton onClick={() => history.push(`/byCountry/${item.name}`)}>
              {item.name}
            </StyledButton>
          </Fragment>
        ))}
      </InnerWrapper>
      <SearchAnimation />
    </>
  );
};

export default SearchByCountry;
