import React from 'react';
// data
import { footerList, footerSm } from './data';
// styles
import {
  SFooterContainer,
  SFooterContent,
  SFooterContentRows,
  SFooterContnetRow,
  SFooterContentCol,
  SFooterContentList,
  SFooterContentItem,
  SFooterContentItemLink,
  SFooterContentSm,
  SFooterContentSmItem,
  SFooterContentSmItemLink,
} from './styles';

const Footer = () => {
  return (
    <SFooterContainer>
      <SFooterContent>
        <SFooterContentRows>
          <SFooterContnetRow>
            <SFooterContentCol>
              <SFooterContentList>
                {footerList.map((item, index) => (
                  <SFooterContentItem key={index}>
                    <SFooterContentItemLink href={item.link}>
                      {item.name}
                    </SFooterContentItemLink>
                  </SFooterContentItem>
                ))}
              </SFooterContentList>
            </SFooterContentCol>
            <SFooterContentCol>
              <SFooterContentSm>
                {footerSm.map((item, index) => (
                  <SFooterContentSmItem key={index}>
                    <SFooterContentSmItemLink href={item.link}>
                      {item.icon}
                    </SFooterContentSmItemLink>
                  </SFooterContentSmItem>
                ))}
              </SFooterContentSm>
            </SFooterContentCol>
          </SFooterContnetRow>
          <SFooterContnetRow>
            <SFooterContentCol>
              <SFooterContentList>
                <SFooterContentItem>
                  * The consumption and emissions values in the website refer to
                  your geographical IP. This value might be unrealistic if you
                  navigate using VPN or if the position of your Internet
                  provider is imprecise. If you believe you are incorrectly
                  geolocalized, contact your dealer to get valid consumption and
                  emissions information in your area.
                </SFooterContentItem>
              </SFooterContentList>
            </SFooterContentCol>
          </SFooterContnetRow>
          <SFooterContnetRow>
            <SFooterContentCol>
              <SFooterContentList>
                <SFooterContentItem style={{ fontSize: '1.6rem' }}>
                  Copyright © 2022 Automobili Lamborghini S.p.A. a sole
                  shareholder company part of Audi Group. All rights reserved.
                  VAT no. IT 00591801204
                </SFooterContentItem>
              </SFooterContentList>
            </SFooterContentCol>
          </SFooterContnetRow>
        </SFooterContentRows>
      </SFooterContent>
    </SFooterContainer>
  );
};

export default Footer;
