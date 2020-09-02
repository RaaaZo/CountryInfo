import styled from 'styled-components';

export const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-family: 'Oswald', sans-serif;
  color: ${({ theme }) => theme.accentsColor};
  font-weight: 700;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.secondaryColor};
  }

  @media (min-width: 414px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;
