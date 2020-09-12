import React, { useEffect, useRef } from 'react';
import { ReactComponent as SearchSvg } from 'assets/svg/search-svg.svg';
import styled from 'styled-components';
import gsap from 'gsap';

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
  const svgRef = useRef();

  const tl = gsap.timeline();

  useEffect(() => {
    const [elements] = svgRef.current.children;

    const globe = elements.querySelector('#globe');
    const woman = elements.querySelector('#woman');
    const stars = elements.querySelector('#stars');
    const marks = elements.querySelector('#marks');

    const allElements = [globe, woman, ...stars.children, ...marks.children];

    gsap.set(allElements, { autoAlpha: 0, ease: 'power1.inOut' });

    tl.to([globe, woman], { duration: 1.5, autoAlpha: 1, delay: 1.5 })
      .fromTo(
        marks.children,
        { y: '-=100' },
        {
          y: 0,
          duration: 1.2,
          autoAlpha: 1,
          ease: 'bounce',
          stagger: 0.2,
        }
      )
      .to(stars.children, { autoAlpha: 1, duration: 0.5 })
      .fromTo(
        stars.children,
        { scale: 1 },
        {
          duration: 3,
          scale: 1.5,
          rotate: 190,
          transformOrigin: 'center',
          stagger: 0.3,
          yoyo: 1,
          repeat: -1,
          repeatDelay: 1.5,
        }
      );
  });

  return <StyledSearchSvg ref={svgRef} />;
};

export default SearchAnimation;

// .to(globe, {
//       scale: 1.15,
//       duration: 1,
//     })
