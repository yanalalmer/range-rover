import React from 'react';
// components
import { Button } from '../../components';
// data
import { articles } from './data';
// styles
import {
  SInfiniteScrollContainer,
  SInfiniteScrollArticle,
  SInfiniteScrollCol,
  SInfiniteScrollRow,
  SInfiniteScrollImgWrapper,
  SInfiniteScrollImg,
  SInfiniteScrollContentWrapper,
  SInfiniteScrollContent,
  SInfiniteScrollDate,
  SInfiniteScrollName,
} from './styles';

const InfiniteScroll = () => {
  return (
    <SInfiniteScrollContainer>
      {articles.map((article, index) => (
        <SInfiniteScrollArticle key={index}>
          <SInfiniteScrollCol>
            <SInfiniteScrollRow>
              <SInfiniteScrollImgWrapper>
                <SInfiniteScrollImg src={article.image} />
              </SInfiniteScrollImgWrapper>
              <SInfiniteScrollContentWrapper>
                <SInfiniteScrollContent>
                  <SInfiniteScrollDate>{article.date}</SInfiniteScrollDate>
                  <SInfiniteScrollName>{article.name}</SInfiniteScrollName>
                  <Button content='read more' />
                </SInfiniteScrollContent>
              </SInfiniteScrollContentWrapper>
            </SInfiniteScrollRow>
          </SInfiniteScrollCol>
        </SInfiniteScrollArticle>
      ))}
    </SInfiniteScrollContainer>
  );
};

export default InfiniteScroll;
