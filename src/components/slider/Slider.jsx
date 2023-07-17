import React from 'react';
import { motion } from 'framer-motion';
import range from '../../assets/images/auto-biography.jpg';
import sv from '../../assets/images/sv.jpg';
import sport from '../../assets/images/sport.jpg';
// styles
import { SSlider, SSlides, SSlide, SSkew, SSkewFix } from './styles';

const Slider = () => {
  return (
    <SSlider>
      <SSlides>
        {slides.map((slide) => (
          <SSlide key={slide.index}>
            <img src={slide.img} alt={slide.alt} />
          </SSlide>
        ))}
      </SSlides>
    </SSlider>
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
