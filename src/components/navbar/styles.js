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
  :not(.middle-menu) {
    @media ${variables.query.lg} {
      display: none;
    }
  }
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
  background: ${({ open }) => (open ? 'transparent' : variables.colors.white)};
  border-radius: 5px;
  transform: ${({ open }) => (open ? 'translateX(-50px)' : 'translateX(0)')};
  transition: all 0.5s ease-in-out;
  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 2rem;
    height: 2px;
    background: ${variables.colors.white};
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
export const SNavMask = styled.div`
  position: absolute;
  right: 4.8%;
  width: 100%;
  height: 100%;
  padding: 1.6rem 6rem;
  background-color: ${variables.colors.grey};
  opacity: ${({ open }) => (open ? '0.7' : '0')};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  z-index: 10;
  transition: opacity 0.3s ease-out 0s, visibility 0.3s ease-out 0s;
  @media ${variables.query.md} {
    right: 9%;
  }
`;
export const SHamburgerContainer = styled.div`
  position: absolute;
  top: ${variables.spacing.headerHeight};
  left: 0;
  width: 100%;
  overflow: hidden;
  height: ${({ open }) => (open ? '575px' : '0px')};
  transition: all 0.5s ease-out 0s;
  @media ${variables.query.lg} {
    height: ${({ open }) => (open ? '1024px' : '0px')};
    top: 60px;
  }
`;
export const SHamburgerContent = styled.div`
  background-color: ${variables.colors.grey};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 auto;
  text-transform: uppercase;
  @media ${variables.query.lg} {
    align-items: flex-start;
    padding: 5rem 0 3rem 5rem;
  }
`;
export const SHamburgerBody = styled.div`
  width: 80%;
  font-size: ${variables.typography.h1FontSize};
  font-weight: ${variables.typography.fontWeightMedium};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 1.32px;
  margin: 0;
  padding: 5rem 0 3rem 0;
  display: flex;
  @media ${variables.query.lg} {
    flex-direction: column;
  }
`;
export const SHamburgerBodyList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-right: 8rem;
  color: ${variables.colors.white};
`;
export const SHamburgerBodyLink = styled(Link)`
  position: relative;
  margin-bottom: 3rem;
  ::after {
    position: absolute;
    top: calc() (100% + 0.5rem);
    left: 0;
    content: '';
    display: block;
    background-color: ${variables.colors.white};
    height: 1px;
    width: 0;
    transition: all 0.3s ease-in-out;
  }
  :hover::after {
    width: 100%;
  }
`;
export const SHamburgerBodyLinkSpan = styled.span``;
// Footer
export const SHamburgerFooter = styled.div`
  padding: 5rem 0 3rem 0;
  display: flex;
  padding-top: 6rem;
  position: relative;
  font-size: 1.7rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.85px;
  width: 80%;
  ::before {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    right: 0;
    width: 105%;
    border-top: 1px solid ${variables.colors.white};
    opacity: 0.3;
  }
  @media ${variables.query.lg} {
    padding-top: 0;
    ::before {
      display: none;
    }
  }
`;
export const SHamburgerSocial = styled.div``;
export const SHamburgerSocialTitle = styled.p`
  font-size: ${variables.typography.h3FontSize};
  font-weight: ${variables.typography.fontWeightMedium};
  opacity: 0.5;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: 2.52px;
  margin-bottom: 3rem;
  color: ${variables.colors.white};
`;
export const SHamburgerSocialIcons = styled.div`
  max-width: 80%;
  display: flex;
  flex-wrap: wrap;
  color: ${variables.colors.white};
  @media ${variables.query.lg} {
    max-width: initial;
  }
`;
export const SHamburgerSocialIconLink = styled.a`
  font-size: ${variables.typography.h1FontSize};
  margin-right: 3rem;
  margin-bottom: 3rem;
  position: relative;
  cursor: pointer;

  svg {
    color: ${variables.colors.white};
    width: 45px;
    height: 45px;
  }
`;
