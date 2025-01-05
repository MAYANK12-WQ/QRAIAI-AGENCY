import React from 'react';
import ParticleBackground from './ParticleBackground';
import HeroContent from './HeroContent';
import BackgroundGrid from '../ui/BackgroundGrid';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundGrid />
      <ParticleBackground />
      <HeroContent />
    </div>
  );
};

export default Hero;