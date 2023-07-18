import React from 'react';
import { motion } from 'framer-motion';
// images
import range from '../../assets/images/auto-biography.jpg';
import sv from '../../assets/images/sv.jpg';
import sport from '../../assets/images/sport.jpg';
// icons
import { NavigateNext, NavigateBefore } from '@styled-icons/material-sharp';
// styles
import {
  SSlider,
  SSlides,
  SSlide,
  SSkew,
  SSkewFix,
  SSlideContent,
  SSlideControls,
  SSlideControlTitle,
  SSlideControlButtons,
  PrevButton,
  NextButton,
  SSlideTitleContainer,
  SSlideTitleText,
  SSlideTitle,
  SSlideSubTitle,
} from './styles';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <>
      <SSlider>
        <SSlideContent>
          <SSlideControls>
            <SSlideControlTitle>models</SSlideControlTitle>
            <SSlideControlButtons>
              <PrevButton onClick={goToPrevious}>
                <NavigateBefore />
              </PrevButton>
              <NextButton onClick={goToNext}>
                <NavigateNext />
              </NextButton>
            </SSlideControlButtons>
          </SSlideControls>
          <SSlideTitleContainer>
            <SSlideTitleText>
              <SSlideTitle>The Sport</SSlideTitle>
              <SSlideSubTitle>
                VISCERAL, DRAMATIC, UNCOMPROMISING
              </SSlideSubTitle>
            </SSlideTitleText>
          </SSlideTitleContainer>
        </SSlideContent>
        <SSlides>
          {slides.map((slide) => (
            <SSlide
              key={slide.index}
              style={{
                background: `url(${slide.img})`,
                backgroundPosition: 'right',
                backgroundSize: 'cover',
              }}
            ></SSlide>
          ))}
        </SSlides>
      </SSlider>
    </>
  );
};

export default Slider;

const slides = [
  {
    index: 1,
    img: range,
    alt: 'range rover',
  },
  {
    index: 2,
    img: sv,
    alt: 'range rover sport',
  },
  {
    index: 3,
    img: sport,
    alt: 'range rover sv',
  },
];
