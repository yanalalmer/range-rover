import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const SBannerContainer = styled.section`
  display: block;
`;
export const SBannerWrapper = styled.div`
  min-height: 63rem;
  position: relative;
  background-color: #e5e5e5;
  background-position: center center;
  background-size: cover;
  width: 100%;
  text-align: left;
`;
export const SBannerImgSpan = styled.div`
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  inset: 0px;
`;
export const SBannerImg = styled.img`
  position: absolute;
  inset: 0px;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  width: 0px;
  height: 0px;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center center;
  user-select: none;
  -webkit-user-drag: none;
`;
export const SBannerContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 63rem;
`;
export const SBannerContent = styled.div`
  position: absolute;
  padding: 0;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  color: white;
  margin-left: 8.3333333333%;
  text-align: left;
`;
export const SBannerContentOverlay = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000;
  background-position: center center;
  background-size: cover;
  background-image: radial-gradient(at 85% 10%, #0000 50%, #0009 100%);
`;

export const SBannerSubTitle = styled.h4`
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 0.12rem;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.3;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: uppercase;
  @media ${variables.query.lg} {
    font-size: 1.8rem;
  }
`;
export const SBannerTitle = styled.h2`
  font-size: 7.6rem;
  line-height: 0.97;
  letter-spacing: -0.228rem;
  margin: 2rem 0 3rem 0;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  text-transform: uppercase;
  @media ${variables.query.lg} {
    font-size: 5rem;
  }
`;
