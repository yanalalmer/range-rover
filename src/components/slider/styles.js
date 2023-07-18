import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const SSlider = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
export const SSlides = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;
export const SSlide = styled.div`
  min-height: 40rem;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  :last-child {
    flex: 2;
  }
  img {
    height: 100%;
  }
`;
export const SSkew = styled.div``;
export const SSkewFix = styled.div``;
export const SSlideContent = styled.div`
  z-index: 5;
  display: flex;
  height: 100%;
  flex-direction: column;
  margin-left: 8.33%;
  max-width: 41.6%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  color: white;
  z-index: 9;
`;
export const SSlideControls = styled.div`
  flex: 0 0 29%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;
export const SSlideControlTitle = styled.div`
  font-size: 3.4rem;
  font-weight: 500;
  font-style: normal;
  line-height: 1.32;
  letter-spacing: 0.136rem;
  text-transform: uppercase;
`;
export const SSlideControlButtons = styled.div`
  margin-top: 23px;
`;
export const PrevButton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid white;
  background: none;
  color: white;
  border-radius: 0;
  height: 50px;
  width: 50px;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: white;
    color: black;
  }
`;
export const NextButton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid white;
  background: none;
  color: white;
  border-radius: 0;
  height: 50px;
  width: 50px;
  margin-left: 26px;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: white;
    color: black;
  }
`;
export const SSlideTitleContainer = styled.div`
  flex: 0 0 30%;
  text-align: left;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  display: flex;
`;
export const SSlideTitleText = styled.div`
  opacity: 1;
  transition: none;
`;
export const SSlideTitle = styled.h2`
  text-transform: uppercase;
  font-size: 11.6rem;
  font-weight: bold;
  line-height: 0.9;
  letter-spacing: -3.5px;
  margin-top: 0;
  margin-bottom: 0;
  @media ${variables.query.lg} {
    font-size: 5rem;
  }
`;
export const SSlideSubTitle = styled.h3`
  opacity: 1;
  transform: translate(0px, 0px);
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 0.64px;
  margin-top: 15px;
  margin-bottom: 0;
  @media ${variables.query.lg} {
    font-size: 1.8rem;
  }
`;
