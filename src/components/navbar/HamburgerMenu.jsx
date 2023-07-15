import React from 'react';
// data
import { hamburgerList } from './navData';
// icons
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Tiktok,
} from '@styled-icons/boxicons-logos';
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
              <SHamburgerSocialIconLink>
                <Facebook viewBox='0 0 35 35' />
              </SHamburgerSocialIconLink>
              <SHamburgerSocialIconLink>
                <Instagram viewBox='0 0 35 35' />
              </SHamburgerSocialIconLink>
              <SHamburgerSocialIconLink>
                <Linkedin viewBox='0 0 35 35' />
              </SHamburgerSocialIconLink>
              <SHamburgerSocialIconLink>
                <Youtube viewBox='0 0 35 35' />
              </SHamburgerSocialIconLink>
              <SHamburgerSocialIconLink>
                <Twitter viewBox='0 0 35 35' />
              </SHamburgerSocialIconLink>
              <SHamburgerSocialIconLink>
                <Tiktok viewBox='0 0 35 35' />
              </SHamburgerSocialIconLink>
            </SHamburgerSocialIcons>
          </SHamburgerSocial>
        </SHamburgerFooter>
      </SHamburgerContent>
    </SHamburgerContainer>
  );
};

export default HamburgerMenu;
