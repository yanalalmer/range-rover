import React from 'react';
// data
import { hamburgerList, smIcons } from './navData';
// styles
import {
  SHamburgerContainer,
  SHamburgerContent,
  SHamburgerBody,
  SHamburgerBodyList,
  SHamburgerBodyLink,
  SHamburgerBodyLinkSpan,
  SHamburgerFooter,
  SHamburgerSocial,
  SHamburgerSocialTitle,
  SHamburgerSocialIcons,
  SHamburgerSocialIconLink,
} from './styles';

const HamburgerMenu = ({ open }) => {
  return (
    <SHamburgerContainer open={open}>
      <SHamburgerContent>
        <SHamburgerBody>
          {hamburgerList.map((list, index) => (
            <SHamburgerBodyList key={index}>
              {list.map((item) => (
                <SHamburgerBodyLink href={item.href} key={item.key}>
                  <SHamburgerBodyLinkSpan>{item.name}</SHamburgerBodyLinkSpan>
                </SHamburgerBodyLink>
              ))}
            </SHamburgerBodyList>
          ))}
        </SHamburgerBody>

        {/* Footer */}
        <SHamburgerFooter>
          <SHamburgerSocial>
            <SHamburgerSocialTitle>social</SHamburgerSocialTitle>
            <SHamburgerSocialIcons>
              {smIcons.map((icon, index) => (
                <SHamburgerSocialIconLink key={index} href={icon.href}>
                  {icon.icon}
                </SHamburgerSocialIconLink>
              ))}
            </SHamburgerSocialIcons>
          </SHamburgerSocial>
        </SHamburgerFooter>
      </SHamburgerContent>
    </SHamburgerContainer>
  );
};

export default HamburgerMenu;
