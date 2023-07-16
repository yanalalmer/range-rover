import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const SHeroSection = styled.section`
  position: relative;
  z-index: 11;
  display: block;
  color: white;
`;
export const SHeroContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  min-height: 650px;
  @media ${variables.query.xxl} {
    min-height: 600px;
  }
  @media ${variables.query.xl} {
    min-height: 500px;
  }
`;
export const SHeroTitleWrapper = styled.div`
  background-image: radial-gradient(
    farthest-corner at 85% 10%,
    #0000 50%,
    #0009 100%
  );
  position: absolute;
  inset: 0px;
  z-index: 10;
  height: 100%;
  background-color: #0000;
  margin-left: 0;
  margin-right: 0;
  display: flex;
  flex-wrap: wrap;
`;
export const SHeroTitleSilderWrapper = styled.div`
  align-items: center;
  display: flex;
  text-align: left;
  padding-left: 0;
  padding-right: 0;
  flex: 0 0 50%;
  margin-left: 8.3%;
  position: relative;
  width: 100%;
  @media ${variables.query.md} {
    margin-left: 0;
    flex: 0 0 100%;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
export const SHeroTitleSlider = styled.div`
  padding-top: 0px;
  padding: 22vh 0px 0px;
  text-transform: uppercase;
  @media ${variables.query.lg} {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;
export const SHeroSubtitle = styled.h3`
  user-select: none;
  opacity: 1;
  font-size: 3.4rem;
  letter-spacing: 1.36px;
  font-weight: ${variables.typography.fontWeightMedium};
  line-height: 1.33;
  margin-bottom: 10px;
  margin-top: 0;
  @media ${variables.query.xxl} {
    font-size: 2.4rem;
  }
  @media ${variables.query.lg} {
    font-size: 1.8rem;
  }
`;
export const SHeroTitle = styled.h1`
  user-select: none;
  opacity: 1;
  font-size: 11rem;
  font-weight: ${variables.typography.fontWeightBold};
  line-height: 0.9;
  letter-spacing: -3.48px;
  margin-left: -3.48px;
  @media ${variables.query.xxl} {
    font-size: 8rem;
  }
  @media ${variables.query.lg} {
    font-size: 4rem;
  }
`;
export const SHeroVideoContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
export const SHeroVideoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  visibility: visible;
  overflow: hidden;
  max-width: none;
  position: relative;
  clear: both;
  word-break: normal;
`;
export const SHeroVideo = styled.video`
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: cover;
`;
