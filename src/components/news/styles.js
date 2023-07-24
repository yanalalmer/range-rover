import styled from 'styled-components';
import * as variables from '../..//styles/variables';

export const SNewsContainer = styled.section`
  display: block;
  margin-top: 0;
  background-color: ${variables.colors.white};
  color: ${variables.colors.grey};
  overflow-x: hidden;
`;
export const SNewsMainNews = styled.div`
  padding-left: 0;
  padding-right: 0;
  position: relative;
  margin-bottom: 6rem;
  text-align: left;
  padding: 7rem 20px 0;
  margin-right: 0;
  margin-left: 0;
  display: flex;
  flex-wrap: wrap;
  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: -2rem;
    width: calc(100% + 4rem);
    background-color: #f8f8f7;
    height: 55%;
  }
`;
export const SNewsMainNewsContent = styled.div`
  padding-right: 0;
  padding-left: 0;
  margin-left: 16.6666666667%;
  flex: 0 0 66.6666666667%;
  max-width: 66.6666666667%;
  position: relative;
  width: 100%;
`;
export const SNewsMainNewsSubTitle = styled.h3`
  font-size: 3.2rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: 0.136rem;
  text-align: left;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0;
  @media ${variables.query.lg} {
    font-size: 1.8rem;
  }
`;
export const SNewsMainNewsTitle = styled.h2`
  padding-right: 2rem;
  font-size: 11.6rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.9;
  letter-spacing: -0.348rem;
  text-align: left;
  color: #202020;
  margin-top: 2rem;
  text-transform: uppercase;
  @media ${variables.query.lg} {
    font-size: 5rem;
  }
`;
export const SNewsMainNewsMainImgWrapper = styled.div`
  position: relative;
  margin-top: 4rem;
  min-height: 55rem;
  padding-right: 0;
  padding-left: 0;
  margin-left: 16.6666666667%;
  flex: 0 0 66.6666666667%;
  max-width: 66.6666666667%;
  width: 100%;
`;
export const SNewsMainNewsImg = styled.img`
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
`;
export const SNewsScroll = styled.div``;
// SInfinite SCROLL
export const SInfiniteScrollContainer = styled.div`
  height: auto;
  overflow: auto;
`;
export const SInfiniteScrollArticle = styled.article`
  display: block;
  margin-bottom: 6rem;
  text-align: left;
  margin-right: 0;
  margin-left: 0;
`;
export const SInfiniteScrollCol = styled.div`
  padding-right: 0;
  padding-left: 0;
  margin-left: 8.3333333333%;
  flex: 0 0 83.3333333333%;
  max-width: 83.3333333333%;
  position: relative;
  width: 100%;
  @media ${variables.query.lg} {
    max-width: 100%;
    flex: 1;
    margin: 0;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
export const SInfiniteScrollRow = styled.div`
  margin-right: 0;
  margin-left: 0;
  display: flex;
  flex-wrap: wrap;
  @media ${variables.query.lg} {
    font-size: 5rem;
    flex-direction: column;
  }
`;
export const SInfiniteScrollImgWrapper = styled.div`
  padding-right: 0;
  padding-left: 0;
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  width: 100%;
  height: 100%;
  background-color: #f8f8f7;
  min-height: 26rem;
  display: block;
  position: relative;
  @media ${variables.query.lg} {
    max-width: 100%;
  }
`;
export const SInfiniteScrollImg = styled.img`
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
  background-color: #f8f8f7;
  object-position: center center;
  user-select: none;
  -webkit-user-drag: none;
`;
export const SInfiniteScrollContentWrapper = styled.div`
  padding-right: 0;
  padding-left: 0;
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  @media ${variables.query.lg} {
    max-width: 100%;
  }
`;
export const SInfiniteScrollContent = styled.div`
  padding-left: 4rem;
  height: 100%;
  flex-direction: column;
  display: flex;
`;
export const SInfiniteScrollDate = styled.div`
  text-align: left;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.14rem;
  @media ${variables.query.lg} {
    margin-top: 3rem;
  }
`;
export const SInfiniteScrollName = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  font-size: 3.2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: 0.064rem;
  text-transform: uppercase;
  @media ${variables.query.lg} {
    font-size: 2.8rem;
    margin-top: 1.5rem;
  }
`;
export const SInfiniteScrollReadMore = styled.a`
  display: block;
  cursor: pointer;
  padding: 1.5rem;
  text-align: center;
  margin-right: auto;
  width: auto;
  min-width: 21.5rem;
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.31;
  letter-spacing: 0.064rem;
  color: #202020;
  border: 1px solid #cbcbca;
  display: inline-block;
  -webkit-transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  :hover {
    background-color: ${variables.colors.grey};
    color: ${variables.colors.white};
  }
  @media ${variables.query.lg} {
    display: none;
  }
`;
