import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';

import { Header } from 'components/atoms/Header/Header';
import { Button } from 'components/atoms/Button/Button';
import DatabaseCard from 'components/molecules/DatabaseCard/DatabaseCard';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

import useFetchData from 'hooks/useFetchData';
import { useParams } from 'react-router-dom';
import LoadingSpinner from 'components/atoms/LoadingSpinner/LoadingSpinner';
import ErrorWrapper from 'components/molecules/ErrorWrapper/ErrorWrapper';
import { useLastLocation } from 'react-router-last-location';
import CountryDetailsAnimation from 'components/atoms/CountryDetailsAnimation';

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  padding: 20px 10px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const DataWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled(Header)`
  margin: 40px auto;
`;

const StyledButton = styled(Button)`
  display: block;
  margin: 10px auto;
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

const CountryDetails = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { pathname } = useLastLocation();

  const { name } = useParams();

  const { countryData, isLoading, error, fetchData } = useFetchData();

  useEffect(() => {
    if (pathname === `/search/byCapital`) {
      fetchData(`capital/${name}`);
    } else {
      fetchData(`name/${name}`);
    }
  }, [name]);

  if (error) {
    return <ErrorWrapper>{error.message}</ErrorWrapper>;
  }

  const handleDispatch = (payload) => {
    dispatch({ type: 'isOpen', payload });
  };

  return (
    <>
      {!isLoading && <StyledHeader>{countryData[0].name.toUpperCase()}</StyledHeader>}

      <Wrapper>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          countryData.map((item) => (
            <DataWrapper key={item.area}>
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
                {item.currencies.map((currency) => (
                  <StyledParagraph key={currency}>{currency}</StyledParagraph>
                ))}
                <Button onClick={() => handleDispatch('areCurrenciesOpen')} close>
                  Close
                </Button>
              </DatabaseCard>
            </DataWrapper>
          ))
        )}
        <CountryDetailsAnimation />
      </Wrapper>
    </>
  );
};

export default CountryDetails;
