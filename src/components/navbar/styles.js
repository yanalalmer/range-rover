import styled from 'styled-components';
import * as variables from '../../styles/variables';
import { Link } from 'react-router-dom';

export const SNav = styled.header`
  position: fixed;
  z-index: 1000;
  width: 100%;
  top: 0;
  left: 0;
  display: block;
  background: #27282c;
`;
export const SNavContainer = styled.nav`
  position: relative;
  z-index: 3;
  padding: 1.6rem 6rem;
  transition: all 0.3s ease-out;
  height: ${variables.spacing.headerHeight};
  display: flex;
  align-items: center;
  @media ${variables.query.xxl} {
    padding: 1.7rem 2rem;
  }
  @media ${variables.query.lg} {
    padding: 0.8rem 2rem;
    height: 60px;
  }
`;
export const SNavLogo = styled.div`
  height: fit-content;
`;
export const SNavLogoContainer = styled.div`
  height: fit-content;
  margin-right: 5.2rem;
  width: 6rem;
  align-self: flex-start;
`;
export const SNavLogoImg = styled.img`
  transition: all 0.3s ease-in-out;
  width: 6rem;
  height: auto;
  vertical-align: middle;
  border-style: none;
`;
export const SNavList = styled.ul`
  height: fit-content;
  display: flex;
  &.middle-menu {
    margin-left: auto;
  }
`;
export const SNavListItem = styled.li`
  position: relative;
  :not(:first-child) {
    margin-left: 2.6rem;
  }
`;
export const SNavListLink = styled(Link)`
  position: relative;
  cursor: pointer;
  color: #fff;
  ::after {
    position: absolute;
    width: 0;
    top: calc(100% + 0.5rem);
    height: 1px;
    left: 0;
    content: '';
    display: block;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }
  :hover::after {
    width: 100%;
  }
`;
export const SNavListSpan = styled.span`
  transition: all 0.3s ease-in-out;
  font-size: ${variables.typography.h1FontSize};
  text-transform: uppercase;
  text-align: center;
  @media ${variables.query.xxl} {
    font-size: ${variables.typography.h3FontSize};
  }
`;
export const SNavButton = styled.button`
  cursor: pointer;
  border: none;
  margin: 0;
  padding: 0;
  height: fit-content;
  background: none;
  :not(:first-child) {
    margin-left: 3rem;
  }
  svg {
    fill: white;
  }
`;
export const SNavBurgerBtn = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  margin-left: 3rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;
export const SNavBurgerBtnMenu = styled.div`
  width: 2rem;
  height: 2px;
  background: ${({ open }) =>
    open ? 'transparent' : ({ theme }) => theme.text};
  border-radius: 5px;
  transform: ${({ open }) => (open ? 'translateX(-50px)' : 'translateX(0)')};
  transition: all 0.5s ease-in-out;
  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 2rem;
    height: 2px;
    background: ${({ theme }) => theme.text};
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }
  ::before {
    transform: ${({ open }) =>
      open ? 'rotate(45deg) translate(35px, -35px)' : 'translateY(-0.6rem)'};
  }
  ::after {
    transform: ${({ open }) =>
      open ? 'rotate(-45deg) translate(35px, 35px)' : 'translateY(0.6rem)'};
  }
`;
