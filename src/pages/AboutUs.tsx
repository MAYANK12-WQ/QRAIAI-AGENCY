import React from 'react';
import { Target, Users, Award } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import SubpageHero from '../components/SubpageHero';
import CallToAction from '../components/CallToAction';

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To democratize AI technology and empower businesses with innovative solutions that drive growth and success.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse group of AI experts, developers, and visionaries committed to pushing the boundaries of what is possible.'
    },
    {
      icon: Award,
      title: 'Our Excellence',
      description: 'Recognized industry leaders with a track record of delivering transformative AI solutions.'
    }
  ];

  return (
    <div className="pt-20">
      <Breadcrumb pageName="About Us" />
      <SubpageHero
        title="Pioneering the Future of AI"
        subtitle="Where Innovation Meets Excellence"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-300">
              At Quantum Renaissance, we are more than just an AI company. We are a team of 
              passionate innovators dedicated to transforming businesses through the power of 
              artificial intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {values.map((value) => (
              <div key={value.title} className="bg-[#0A0014]/40 backdrop-blur-sm p-8 rounded-2xl border border-[#4B0082]/20">
                <value.icon className="w-12 h-12 text-[#FFD700] mb-6" />
                <h3 className="text-xl font-playfair text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#4B0082]/20 to-[#4B0082]/10 rounded-2xl p-8 mb-20">
            <h3 className="text-2xl font-playfair text-white mb-6">Our Journey</h3>
            <div className="space-y-6 text-gray-300">
              <p>
                Founded with a vision to bridge the gap between cutting-edge AI technology and 
                practical business applications, Quantum Renaissance has grown into a leading 
                force in the AI industry.
              </p>
              <p>
                Our team combines decades of experience in artificial intelligence, machine 
                learning, and business transformation to deliver solutions that make a real 
                difference.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-playfair text-[#FFD700] mb-2">100+</div>
              <p className="text-gray-300">Projects Delivered</p>
            </div>
            <div>
              <div className="text-3xl font-playfair text-[#FFD700] mb-2">50+</div>
              <p className="text-gray-300">Expert Team Members</p>
            </div>
            <div>
              <div className="text-3xl font-playfair text-[#FFD700] mb-2">95%</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-3xl font-playfair text-[#FFD700] mb-2">24/7</div>
              <p className="text-gray-300">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default AboutUs;