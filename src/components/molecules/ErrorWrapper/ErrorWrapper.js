import React from 'react';
import styled from 'styled-components';
import { Header } from 'components/atoms/Header/Header';
import { Button } from 'components/atoms/Button/Button';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 40%;
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.secondaryColor};
  border: 2px solid black;
  border-radius: 25px;

  @media (orientation: landscape) {
    width: 60%;
    height: 80%;
  }

  @media (orientation: landscape) and (min-width: 1024px) {
    width: 40%;
    height: 50%;
  }
`;

const StyledHeader = styled(Header)`
  margin-top: 20px;
`;

const StyledButton = styled(Button)`
  height: 60px;
`;

const Error = ({ children }) => {
  const history = useHistory();

  return (
    <Wrapper>
      <StyledHeader>{children}</StyledHeader>
      <StyledButton onClick={() => history.goBack(1)} close>
        Back
      </StyledButton>
    </Wrapper>
  );
};

export default Error;
