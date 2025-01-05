import React from 'react';
import { Layers, Workflow, Zap } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import SubpageHero from '../components/SubpageHero';
import CallToAction from '../components/CallToAction';

const SeamlessIntegration = () => {
  const features = [
    {
      icon: Layers,
      title: 'Plug-and-Play Solutions',
      description: 'Seamlessly integrate AI with your existing systems.'
    },
    {
      icon: Workflow,
      title: 'API Integration',
      description: 'Robust APIs for perfect data synchronization.'
    },
    {
      icon: Zap,
      title: 'Zero Disruption',
      description: 'Maintain operations during implementation.'
    }
  ];

  return (
    <div className="pt-20">
      <Breadcrumb pageName="Seamless Integration" />
      <SubpageHero
        title="Effortless AI Integration for Every Business"
        subtitle="Bridging the Gap Between AI and Your Ecosystem"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-300">
              Quantum Renaissance ensures that adopting AI into your existing workflows is a seamless and stress-free process. 
              Our solutions work harmoniously with your tools, platforms, and data pipelines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {features.map((feature) => (
              <div key={feature.title} className="bg-[#0A0014]/40 backdrop-blur-sm p-8 rounded-2xl border border-[#4B0082]/20">
                <feature.icon className="w-12 h-12 text-[#FFD700] mb-6" />
                <h3 className="text-xl font-playfair text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#4B0082]/20 to-[#4B0082]/10 rounded-2xl p-8">
            <h3 className="text-2xl font-playfair text-white mb-6">Client Testimonial</h3>
            <div className="text-gray-300">
              <blockquote className="text-lg italic mb-4">
                "Thanks to Quantum Renaissance, integrating AI into our sales pipeline was faster than we ever imagined!"
              </blockquote>
              <p className="text-[#FFD700]">- Enterprise Client</p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default SeamlessIntegration;