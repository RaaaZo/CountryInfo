import React, { Fragment, useReducer, useEffect } from 'react';
import styled from 'styled-components';

import { Header } from 'components/atoms/Header/Header';
import { Button } from 'components/atoms/Button/Button';
import DatabaseCard from 'components/molecules/DatabaseCard/DatabaseCard';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

import { ReactComponent as CountryDetailsSvg } from 'assets/svg/countryDetails.svg';
import useFetchData from 'hooks/useFetchData';
import { useParams } from 'react-router-dom';
import LoadingSpinner from 'components/atoms/LoadingSpinner/LoadingSpinner';
import ErrorWrapper from 'components/molecules/ErrorWrapper/ErrorWrapper';

const StyledHeader = styled(Header)`
  margin: 40px auto;
`;

const StyledButton = styled(Button)`
  display: block;
  margin: 10px auto;
  margin-bottom: 60px;
  font-size: ${({ theme }) => theme.fontSize.l};

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const StyledDetailsSvg = styled(CountryDetailsSvg)`
  width: 100%;
  height: 200px;
  margin: 40px auto;

  @media (min-width: 768px) {
    height: 300px;
  }

  @media (min-width: 1024px) {
    height: 350px;
  }

  @media (min-width: 1440px) {
    height: 400px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 20px auto;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
`;

const initialState = {
  isCapitalOpen: false,
  isRegionOpen: false,
  isPopulationOpen: false,
  isAreaOpen: false,
  areTimezonesOpen: false,
  areBordersOpen: false,
  areCurrenciesOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'isOpen':
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };

    default:
      return state;
  }
};

const CountryDetailsByName = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { countryName } = useParams();

  const { countryData, isLoading, error, fetchData } = useFetchData();

  useEffect(() => {
    fetchData(`name/${countryName}`);
  }, [countryName]);

  const handleDispatch = (payload) => {
    dispatch({ type: 'isOpen', payload });
  };

  if (error) {
    return <ErrorWrapper>{error.message}</ErrorWrapper>;
  }

  return (
    <>
      <StyledHeader>{countryName.toUpperCase()}</StyledHeader>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        countryData.map((item) => (
          <Fragment key={item.area}>
            <StyledButton onClick={() => handleDispatch('isCapitalOpen')}>Capital</StyledButton>
            <DatabaseCard isCardOpen={state.isCapitalOpen}>
              <StyledParagraph>{item.capital}</StyledParagraph>
              <Button onClick={() => handleDispatch('isCapitalOpen')} close>
                Close
              </Button>
            </DatabaseCard>

            <StyledButton onClick={() => handleDispatch('isRegionOpen')}>Region</StyledButton>
            <DatabaseCard isCardOpen={state.isRegionOpen}>
              <StyledParagraph>{item.region}</StyledParagraph>
              <Button onClick={() => handleDispatch('isRegionOpen')} close>
                Close
              </Button>
            </DatabaseCard>

            <StyledButton onClick={() => handleDispatch('isPopulationOpen')}>
              Population
            </StyledButton>
            <DatabaseCard isCardOpen={state.isPopulationOpen}>
              <StyledParagraph>{`${item.population} people`}</StyledParagraph>
              <Button onClick={() => handleDispatch('isPopulationOpen')} close>
                Close
              </Button>
            </DatabaseCard>

            <StyledButton onClick={() => handleDispatch('isAreaOpen')}>Area</StyledButton>
            <DatabaseCard isCardOpen={state.isAreaOpen}>
              <StyledParagraph>{`${item.area} km²`}</StyledParagraph>
              <Button onClick={() => handleDispatch('isAreaOpen')} close>
                Close
              </Button>
            </DatabaseCard>

            <StyledButton onClick={() => handleDispatch('areTimezonesOpen')}>
              Timezones
            </StyledButton>
            <DatabaseCard isCardOpen={state.areTimezonesOpen}>
              {item.timezones.map((timezone) => (
                <StyledParagraph key={timezone}>{timezone}</StyledParagraph>
              ))}
              <Button onClick={() => handleDispatch('areTimezonesOpen')} close>
                Close
              </Button>
            </DatabaseCard>

            <StyledButton onClick={() => handleDispatch('areBordersOpen')}>Borders</StyledButton>
            <DatabaseCard isCardOpen={state.areBordersOpen}>
              {item.borders.map((border) => (
                <StyledParagraph key={border}>{border}</StyledParagraph>
              ))}
              <Button onClick={() => handleDispatch('areBordersOpen')} close>
                Close
              </Button>
            </DatabaseCard>

            <StyledButton onClick={() => handleDispatch('areCurrenciesOpen')}>
              Currencies
            </StyledButton>
            <DatabaseCard isCardOpen={state.areCurrenciesOpen}>
              {item.currencies.map((currencie) => (
                <StyledParagraph key={currencie}>{currencie}</StyledParagraph>
              ))}
              <Button onClick={() => handleDispatch('areCurrenciesOpen')} close>
                Close
              </Button>
            </DatabaseCard>
          </Fragment>
        ))
      )}
      <StyledDetailsSvg />
    </>
  );
};

export default CountryDetailsByName;
