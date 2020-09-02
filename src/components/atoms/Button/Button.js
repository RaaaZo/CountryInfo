import styled, { css } from 'styled-components';

export const Button = styled.button`
  width: 140px;
  height: 100%;
  padding: 15px 10px;
  color: black;
  font-weight: 700;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.secondaryColor};
  border: 2px solid black;
  border-radius: 25px;
  transition: color 0.4s 0.1s ease-in-out, border 0.4s 0.1s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.accentsColor};
    border: 2px solid ${({ theme }) => theme.accentsColor};
  }

  @media (min-width: 414px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 768px) {
    width: 160px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  ${({ close }) =>
    close &&
    css`
      width: 100px;
      height: 100%;
      background-color: ${({ theme }) => theme.accentsColor};
      border: 2px solid black;
      transition: color 0.4s 0.1s ease-in-out, border 0.4s 0.1s ease-in-out,
        background-color 0.4s 0.1s ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.accentsColor};
        border: 2px solid ${({ theme }) => theme.accentsColor};
        background-color: ${({ theme }) => theme.secondaryColor};
      }

      @media (min-width: 414px) {
        width: 120px;
      }

      @media (min-width: 768px) {
        width: 140px;
        font-size: ${({ theme }) => theme.fontSize.l};
      }
    `}
`;
