import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { ReactComponent as CountryDetailsSvg } from 'assets/svg/country-details.svg';

const StyledDetailsSvg = styled(CountryDetailsSvg)`
  width: 100%;
  height: 200px;
  margin: 40px auto;

  @media (min-width: 768px) {
    height: 300px;
  }

  @media (min-width: 1024px) {
    align-self: flex-start;
    height: 350px;
  }

  @media (min-width: 1360px) {
    height: 400px;
  }
`;

const CountryDetailsAnimation = () => {
  const svgRef = useRef();

  useEffect(() => {
    const [elements] = svgRef.current.children;

    const tl = gsap.timeline();

    const flowers = elements.querySelector('#flowers');
    const people = elements.querySelector('#people');
    const border = elements.querySelector('#border');
    const questionMark = elements.querySelector('#question-mark');

    const allElements = [people, border, questionMark, flowers];

    gsap.set(allElements, { autoAlpha: 0, ease: 'power1.inOut' });

    tl.to([people, border, flowers], {
      autoAlpha: 1,
      duration: 1.5,
      delay: 0.8,
    })
      .fromTo(questionMark, { y: '-=100' }, { y: 0, ease: 'bounce', duration: 1, autoAlpha: 1 })
      .fromTo(
        flowers.children,
        { scaleY: 1, y: 0 },
        {
          scaleY: 1.5,
          y: '-=20',
          stagger: 0.4,
          repeat: -1,
          yoyo: true,
          repeatDelay: 2,
          duration: 3,
        }
      )
      .fromTo(
        questionMark,
        { rotate: 0 },
        { rotate: 20, duration: 4, repeat: -1, yoyo: true, repeatDelay: 1.5 },
        '-=2.5'
      );
  }, []);

  return (
    <>
      <StyledDetailsSvg ref={svgRef} />
    </>
  );
};

export default CountryDetailsAnimation;
