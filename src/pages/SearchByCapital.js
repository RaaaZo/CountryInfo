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
    name: 'Warsaw',
  },
  {
    id: 2,
    name: 'London',
  },
  {
    id: 3,
    name: 'Berlin',
  },
  {
    id: 4,
    name: 'Lisbon',
  },
  {
    id: 5,
    name: 'Madrid',
  },
  {
    id: 6,
    name: 'Moscow',
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
  margin-bottom: 60px;

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

const SearchByCapital = () => {
  const [inputValue, setInputValue] = useState('');

  const history = useHistory();

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <StyledHeader>
        Search by
        <Span> Capital </Span>
        name!
      </StyledHeader>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          history.push(`/countryDetails/${inputValue}`);
        }}
      >
        <InnerWrapper>
          <Label htmlFor="capitalName">Capital name</Label>
          <StyledInput
            id="capitalName"
            name="capitalName"
            placeholder="etc. Warsaw"
            onChange={handleInputValue}
            value={inputValue}
          />
          <StyledButton type="submit">Search</StyledButton>
        </InnerWrapper>
      </form>

      <StyledHeader>List of frequently selected capitals</StyledHeader>

      <InnerWrapper selectedOnes>
        {DUMMY_DATA.map((item) => (
          <Fragment key={item.id}>
            <StyledButton onClick={() => history.push(`/countryDetails/${item.name}`)}>
              {item.name}
            </StyledButton>
          </Fragment>
        ))}
      </InnerWrapper>
      <SearchAnimation />
    </>
  );
};

export default SearchByCapital;
