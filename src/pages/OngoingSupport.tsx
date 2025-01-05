import React from 'react';
import { HeartHandshake, Clock, Gauge, GraduationCap } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import SubpageHero from '../components/SubpageHero';
import CallToAction from '../components/CallToAction';

const OngoingSupport = () => {
  const features = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for your AI solutions.'
    },
    {
      icon: Gauge,
      title: 'Regular Updates',
      description: 'Continuous optimization for evolving needs.'
    },
    {
      icon: GraduationCap,
      title: 'Team Training',
      description: 'Comprehensive training to maximize AI usage.'
    }
  ];

  const stats = [
    { value: '98%', label: 'Client Retention' },
    { value: '24/7', label: 'Support Available' },
    { value: '1hr', label: 'Response Time' }
  ];

  return (
    <div className="pt-20">
      <Breadcrumb pageName="Ongoing Support" />
      <SubpageHero
        title="Your Trusted Partner Beyond Deployment"
        subtitle="Continuous Growth with AI That Evolves with You"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-300">
              At Quantum Renaissance, we believe in partnerships that last. Our commitment doesn't end with deployment—we're here 
              to ensure your AI solutions adapt, scale, and perform optimally over time.
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

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-gradient-to-br from-[#4B0082]/20 to-[#4B0082]/10 p-8 rounded-2xl text-center">
                <div className="text-4xl font-playfair text-[#FFD700] mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default OngoingSupport;