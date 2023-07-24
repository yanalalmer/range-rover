import React from 'react';
// image
import world from '../../assets/images/world.jpg';
// styles
import {
  SNewsContainer,
  SNewsMainNews,
  SNewsMainNewsContent,
  SNewsMainNewsSubTitle,
  SNewsMainNewsTitle,
  SNewsMainNewsMainImgWrapper,
  SNewsMainNewsImg,
  SNewsScroll,
} from './styles';
// components
import InfiniteScroll from './InfiniteScroll';

const News = () => {
  return (
    <SNewsContainer>
      <SNewsMainNews>
        <SNewsMainNewsContent>
          <SNewsMainNewsSubTitle>News</SNewsMainNewsSubTitle>
          <SNewsMainNewsTitle>The Range Rover World</SNewsMainNewsTitle>
        </SNewsMainNewsContent>
        <SNewsMainNewsMainImgWrapper>
          <SNewsMainNewsImg src={world} />
        </SNewsMainNewsMainImgWrapper>
      </SNewsMainNews>
      <SNewsScroll>
        <InfiniteScroll />
      </SNewsScroll>
    </SNewsContainer>
  );
};

export default News;
