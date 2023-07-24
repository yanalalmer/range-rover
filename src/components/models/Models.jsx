import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const Models = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [slides, setSlides] = React.useState([
    {
      index: 0,
      img: range,
      alt: 'range rover',
    },
    {
      index: 1,
      img: sv,
      alt: 'range rover sport',
    },
    {
      index: 2,
      img: sport,
      alt: 'range rover sv',
    },
  ]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    setSlides((prevSlides) => {
      const lastSlide = prevSlides[slides.length - 1];
      return [lastSlide, ...prevSlides.slice(0, slides.length - 1)];
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <>
      <SSlider>
        <SSlideContent>
          <SSlideControls>
            <SSlideControlTitle>models</SSlideControlTitle>
            <SSlideControlButtons>
              <PrevButton onClick={prevSlide}>
                <NavigateBefore />
              </PrevButton>
              <NextButton onClick={nextSlide}>
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
          <AnimatePresence initial={false} custom={currentSlide}>
            {slides.map((slide) => (
              <SSlide
                key={slide.index}
                as={motion.div}
                initial={{
                  opacity: 0,
                  x: slide.index === currentSlide ? '100%' : '-100%',
                }}
                transition={{ duration: 0.5 }}
                style={{
                  background: `url(${slide.img})`,
                  backgroundPosition: 'right',
                  backgroundSize: 'cover',
                  height: '100%',
                  width: '100%',
                }}
              ></SSlide>
            ))}
          </AnimatePresence>
        </SSlides>
      </SSlider>
    </>
  );
};

export default Models;
