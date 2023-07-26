import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const SButton = styled.a`
  display: block;
  cursor: pointer;
  padding: 1.5rem;
  text-align: center;
  margin-right: auto;
  width: auto;
  min-width: 21.5rem;
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.31;
  letter-spacing: 0.064rem;
  color: ${({ negative }) =>
    negative ? variables.colors.white : variables.colors.grey};

  border: 1px solid
    ${({ negative }) => (negative ? variables.colors.white : '#cbcbca')};
  display: inline-block;
  -webkit-transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  :hover {
    background-color: ${variables.colors.grey};
    color: ${variables.colors.white};
  }
  @media ${variables.query.lg} {
    display: none;
  }
`;
