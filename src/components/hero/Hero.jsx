import React from 'react';
import heroVideo from '../../assets/video/hero-edited.mp4';
import { motion } from 'framer-motion';
// styles
import {
  SHeroSection,
  SHeroContainer,
  SHeroTitleWrapper,
  SHeroTitleSilderWrapper,
  SHeroTitleSlider,
  SHeroSubtitle,
  SHeroTitle,
  SHeroVideoContainer,
  SHeroVideoWrapper,
  SHeroVideo,
} from './styles';

const Hero = () => {
  return (
    <SHeroSection>
      <SHeroContainer>
        <SHeroTitleWrapper>
          <SHeroTitleSilderWrapper>
            <SHeroTitleSlider
              as={motion.div}
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                ease: 'easeOut',
                duration: 1.3,
              }}
            >
              <SHeroSubtitle>The New Range Rover</SHeroSubtitle>
              <SHeroTitle>Peerless Refinment and Luxury</SHeroTitle>
            </SHeroTitleSlider>
          </SHeroTitleSilderWrapper>
        </SHeroTitleWrapper>
        <SHeroVideoContainer>
          <SHeroVideoWrapper>
            <SHeroVideo src={heroVideo} autoPlay loop muted />
          </SHeroVideoWrapper>
        </SHeroVideoContainer>
      </SHeroContainer>
    </SHeroSection>
  );
};

export default Hero;
