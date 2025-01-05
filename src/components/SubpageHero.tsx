import React from 'react';

type SubpageHeroProps = {
  title: string;
  subtitle: string;
};

const SubpageHero = ({ title, subtitle }: SubpageHeroProps) => {
  return (
    <div className="relative py-24 bg-gradient-to-br from-[#0A0014] via-[#4B0082] to-[#0A0014]">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-playfair text-white mb-6">
          {title}
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default SubpageHero;