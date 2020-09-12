import React, { useRef, useEffect } from 'react';
import { ReactComponent as HomeSvg } from 'assets/svg/home-animation.svg';
import styled from 'styled-components';
import gsap from 'gsap';

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
  const svgRef = useRef();

  const tl = gsap.timeline();

  useEffect(() => {
    const [animation] = svgRef.current.children;

    const globe = animation.querySelector('#globe');
    const continents = animation.querySelector('#continents');
    const woman = animation.querySelector('#woman');
    const background = animation.querySelector('#background');
    const flower = animation.querySelector('#flower');

    const allElements = [globe, continents, woman, background, flower];

    gsap.set(allElements, {
      autoAlpha: 0,
      x: '+=100%',
      ease: 'power1.inOut',
    });

    tl.to(allElements, { duration: 1.5, autoAlpha: 1, x: 0, delay: 1 })
      .to(flower, {
        duration: 3,
        scale: 1.5,
        y: '-=30',
      })
      .to([continents, globe], {
        rotateZ: 720,
        transformOrigin: 'center',
        duration: 3,
        repeat: -1,
        repeatDelay: 2,
      });
  });

  return (
    <Wrapper>
      <StyledHomeSvg ref={svgRef} />
    </Wrapper>
  );
};

export default HomeAnimation;
