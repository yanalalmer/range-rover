import React from 'react';
// logo
import logo from '../../assets/logo/logo.png';
// data
import { navList, navButtons } from './navData';
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
  SNavBurgerBtn,
  SNavBurgerBtnMenu,
} from './styles';

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const handleCLick = () => {
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
          <SNavBurgerBtn onClick={handleCLick}>
            <SNavBurgerBtnMenu open={menuIsOpen} />
          </SNavBurgerBtn>
        </SNavList>
        {/* <NavMask open={menuIsOpen} /> */}
      </SNavContainer>
      {/* <HamburgerMenu open={menuIsOpen} /> */}
    </SNav>
  );
};

export default Navbar;
