import React from 'react';
// image
import bannerImg from '../../assets/images/interior.jpg';
// components
import { Button } from '../../components';
// styles
import {
  SBannerContainer,
  SBannerWrapper,
  SBannerImgSpan,
  SBannerImg,
  SBannerContentWrapper,
  SBannerContentOverlay,
  SBannerContent,
  SBannerSubTitle,
  SBannerTitle,
} from './styles';

const DealerLocator = () => {
  return (
    <SBannerContainer>
      <SBannerWrapper>
        <SBannerImgSpan>
          <SBannerImg src={bannerImg} />
        </SBannerImgSpan>
        <SBannerContentWrapper>
          <SBannerContent>
            <SBannerSubTitle>find your country dealer</SBannerSubTitle>
            <SBannerTitle>dealer locator</SBannerTitle>
            <Button negative content='find a dealer' />
          </SBannerContent>
          <SBannerContentOverlay />
        </SBannerContentWrapper>
      </SBannerWrapper>
    </SBannerContainer>
  );
};

export default DealerLocator;
