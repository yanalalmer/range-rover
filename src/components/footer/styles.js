import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const SFooterContainer = styled.footer`
  background-color: ${variables.colors.grey};
  color: ${variables.colors.white};
  position: relative;
  z-index: 99;
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
  display: block;
`;
export const SFooterContent = styled.div`
  padding: 6rem 0 7rem 0;
  margin-right: 0;
  margin-left: 0;
  display: flex;
  flex-wrap: wrap;
`;
export const SFooterContentRows = styled.div`
  padding-right: 0;
  padding-left: 0;
  margin-left: 8.3333333333%;
  flex: 0 0 83.3333333333%;
  max-width: 83.3333333333%;
  position: relative;
  width: 100%;
`;
export const SFooterContnetRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -20px;
  margin-left: -20px;
`;
export const SFooterContentCol = styled.div`
  margin-bottom: 3rem !important;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
`;
export const SFooterContentList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  text-transform: uppercase;
`;
export const SFooterContentItem = styled.li`
  margin: 0;
  padding: 0;
  display: inline-block;
  margin-right: 3rem !important;
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
  position: relative;
`;
export const SFooterContentItemLink = styled.a`
  position: relative;
  font-size: 1.6rem;
  line-height: 2;
  white-space: nowrap;
  cursor: pointer;

  ::after {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    content: '';
    display: block;
    background-color: #fff;
    height: 1px;
    width: 0;
    -webkit-transition: width 0.3s ease-in-out;
    transition: width 0.3s ease-in-out;
  }
  :hover::after {
    width: 100%;
  }
`;
export const SFooterContentSm = styled.div`
  white-space: nowrap;
  padding-left: 5rem;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  justify-content: flex-end;
`;
export const SFooterContentSmItem = styled.div`
  padding: 0;
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
  position: relative;
  width: 25px;
  height: 25px;
  margin-left: 2rem;
`;
export const SFooterContentSmItemLink = styled.a`
  font-size: 1.8rem;
  line-height: 2;
  white-space: nowrap;
  cursor: pointer;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
`;
