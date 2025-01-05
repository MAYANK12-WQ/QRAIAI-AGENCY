import React from 'react';
import { GraduationCap, Book, Users } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import SubpageHero from '../components/SubpageHero';
import CallToAction from '../components/CallToAction';

const AIEducation = () => {
  const programs = [
    {
      icon: Book,
      title: 'Comprehensive Courses',
      description: 'In-depth AI training programs for all skill levels.'
    },
    {
      icon: Users,
      title: 'Corporate Training',
      description: 'Customized AI education for teams and organizations.'
    },
    {
      icon: GraduationCap,
      title: 'Certification Programs',
      description: 'Industry-recognized AI certifications and credentials.'
    }
  ];

  return (
    <div className="pt-20">
      <Breadcrumb pageName="AI Education" />
      <SubpageHero
        title="Empower Your Journey in AI"
        subtitle="World-Class AI Education for Individuals and Organizations"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-300">
              Our comprehensive AI education programs are designed to bridge the knowledge gap 
              and create confident AI practitioners ready for real-world challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {programs.map((program) => (
              <div key={program.title} className="bg-[#0A0014]/40 backdrop-blur-sm p-8 rounded-2xl border border-[#4B0082]/20">
                <program.icon className="w-12 h-12 text-[#FFD700] mb-6" />
                <h3 className="text-xl font-playfair text-white mb-4">{program.title}</h3>
                <p className="text-gray-400">{program.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gradient-to-r from-[#4B0082]/20 to-[#4B0082]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-playfair text-white mb-6">Course Highlights</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-[#FFD700]">•</span>
                  <span>Hands-on projects with real-world applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#FFD700]">•</span>
                  <span>Expert instructors with industry experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#FFD700]">•</span>
                  <span>Flexible learning paths and schedules</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-[#4B0082]/20 to-[#4B0082]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-playfair text-white mb-6">Learning Outcomes</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-[#FFD700]">•</span>
                  <span>Practical AI implementation skills</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#FFD700]">•</span>
                  <span>Problem-solving with AI technologies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#FFD700]">•</span>
                  <span>Career advancement opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default AIEducation;