import React from 'react';
import Video from '../../img/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroSectionElements';

function HeroSection(props) {
  return (
    <HeroContainer id="Hero">

      <HeroBg>
        <VideoBg 
          playsInline 
          autoPlay 
          loop 
          muted 
          src={Video} 
          type='video/mp4' 
        />
      </HeroBg>

      <HeroContent>
        <HeroH1>{props.title}</HeroH1>
        <HeroP>{props.subtitle}</HeroP>
      </HeroContent>

    </HeroContainer>
  )
}

export default HeroSection;