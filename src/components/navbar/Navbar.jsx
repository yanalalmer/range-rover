import React from 'react';
// logo
import logo from '../../assets/logo/logo.png';
// data
import { navList, navButtons } from './navData';
// components
import NavMask from './NavMask';
import Hamburger from './Hamburger';
import HamburgerMenu from './HamburgerMenu';
// styles
import {
  SNav,
  SNavContainer,
  SNavLogo,
  SNavLogoContainer,
  SNavLogoImg,
  SNavList,
  SNavListItem,
  SNavListLink,
  SNavListSpan,
  SNavButton,
} from './styles';

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const handleClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <SNav>
      <SNavContainer>
        <SNavLogo>
          <SNavLogoContainer>
            <SNavLogoImg src={logo} />
          </SNavLogoContainer>
        </SNavLogo>
        <SNavList>
          {navList.map((item) => (
            <SNavListItem key={item.key}>
              <SNavListLink to={item.link}>
                <SNavListSpan>{item.name}</SNavListSpan>
              </SNavListLink>
            </SNavListItem>
          ))}
        </SNavList>
        <SNavList className='middle-menu'>
          {navButtons.map((button) => (
            <SNavButton key={button.key}>{button.svg}</SNavButton>
          ))}
          <Hamburger open={menuIsOpen} handleClick={handleClick} />
        </SNavList>
        <NavMask open={menuIsOpen} />
        <HamburgerMenu open={menuIsOpen} />
      </SNavContainer>
    </SNav>
  );
};

export default Navbar;
