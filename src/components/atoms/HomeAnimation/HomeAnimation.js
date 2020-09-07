import React from 'react';
import { ReactComponent as HomeSvg } from 'assets/svg/homePageAnimation.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 60px;
`;

const StyledHomeSvg = styled(HomeSvg)`
  width: 100%;
  height: 200px;
  text-align: center;
  margin: 0 auto;

  @media (min-width: 414px) {
    height: 300px;
  }

  @media (min-width: 768px) {
    height: 400px;
  }
`;

const HomeAnimation = () => {
  return (
    <Wrapper>
      <StyledHomeSvg />
    </Wrapper>
  );
};

export default HomeAnimation;
