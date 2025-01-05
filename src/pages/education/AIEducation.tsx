import React from 'react';
import HeroSection from './components/HeroSection';
import LearningModules from './components/LearningModules';
import InteractiveFeatures from './components/InteractiveFeatures';
import AIEducatorAgent from './components/AIEducatorAgent';
import SuccessStories from './components/SuccessStories';
import CourseFeatures from './components/CourseFeatures';
import Community from './components/Community';

const AIEducation = () => {
  return (
    <div className="min-h-screen bg-[#0A0014] pt-20">
      <HeroSection />
      <LearningModules />
      <InteractiveFeatures />
      <AIEducatorAgent />
      <SuccessStories />
      <CourseFeatures />
      <Community />
    </div>
  );
};

export default AIEducation;