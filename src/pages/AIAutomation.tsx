import React from 'react';
import { Cog, Workflow, Zap } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import SubpageHero from '../components/SubpageHero';
import CallToAction from '../components/CallToAction';

const AIAutomation = () => {
  const features = [
    {
      icon: Workflow,
      title: 'Process Automation',
      description: 'Streamline workflows with intelligent automation solutions.'
    },
    {
      icon: Cog,
      title: 'Smart Operations',
      description: 'AI-powered systems for operational excellence.'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Quick implementation with immediate business impact.'
    }
  ];

  return (
    <div className="pt-20">
      <Breadcrumb pageName="AI Automation" />
      <SubpageHero
        title="Intelligent Automation for the Future"
        subtitle="Revolutionize Your Operations with AI-Powered Automation"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-300">
              Transform your business operations with our advanced AI automation solutions. 
              We help organizations reduce manual effort, minimize errors, and accelerate growth.
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
            <h3 className="text-2xl font-playfair text-white mb-6">Success Metrics</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-[#FFD700] font-playfair text-xl">Before Automation</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Manual processes taking 40+ hours/week</li>
                  <li>• 15% error rate in data entry</li>
                  <li>• Delayed response times</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-[#FFD700] font-playfair text-xl">After Automation</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• 90% reduction in processing time</li>
                  <li>• 99.9% accuracy rate</li>
                  <li>• Real-time responses</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default AIAutomation;