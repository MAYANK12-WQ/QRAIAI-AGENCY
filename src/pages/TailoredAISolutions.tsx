import React from 'react';
import { Brain, LineChart, Cpu } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import SubpageHero from '../components/SubpageHero';
import CallToAction from '../components/CallToAction';
import SuccessMetrics from '../components/SuccessMetrics';

// ... rest of the existing code ...

const TailoredAISolutions = () => {
  return (
    <div className="pt-20">
      <Breadcrumb pageName="Tailored AI Solutions" />
      <SubpageHero
        title="Empowering Businesses with Customized AI Excellence"
        subtitle="Every Business is Unique, and So Are Our AI Solutions"
      />
      
      <section className="py-20">
        {/* ... existing content ... */}
      </section>

      <SuccessMetrics />
      <CallToAction />
    </div>
  );
};

export default TailoredAISolutions;