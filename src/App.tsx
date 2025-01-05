import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portfolio';
import AISolutions from './pages/AISolutions';
import AIAutomation from './pages/AIAutomation';
import AIEducation from './pages/education/AIEducation';
import NeuralNetworks from './pages/solutions/NeuralNetworks';
import MachineLearning from './pages/solutions/MachineLearning';
import AIIntegration from './pages/solutions/AIIntegration';
import ContactPage from './pages/contact/ContactPage';
import StartProject from './pages/StartProject';
import NeuralNetworkBlog from './pages/learn/NeuralNetworkBlog';
import AIMovieMaker from './pages/portfolio/AIMovieMaker';
import GenZTherapist from './pages/portfolio/GenZTherapist';
import AIAgentsSuite from './pages/portfolio/AIAgentsSuite';
import RestaurantAIAssistant from './pages/portfolio/RestaurantAIAssistant';
import ContentCreatorAI from './pages/portfolio/ContentCreatorAI';
import EducationalAIPlatform from './pages/portfolio/EducationalAIPlatform';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0A0014]">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/ai-automation" element={<AIAutomation />} />
          <Route path="/ai-education" element={<AIEducation />} />
          <Route path="/solutions/neural-networks" element={<NeuralNetworks />} />
          <Route path="/solutions/machine-learning" element={<MachineLearning />} />
          <Route path="/solutions/ai-integration" element={<AIIntegration />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/start-project" element={<StartProject />} />
          <Route path="/learn/neural-networks-blog" element={<NeuralNetworkBlog />} />
          <Route path="/portfolio/ai-movie-maker" element={<AIMovieMaker />} />
          <Route path="/portfolio/gen-z-therapist" element={<GenZTherapist />} />
          <Route path="/portfolio/ai-agents" element={<AIAgentsSuite />} />
          <Route path="/portfolio/restaurant-assistant" element={<RestaurantAIAssistant />} />
          <Route path="/portfolio/content-creator" element={<ContentCreatorAI />} />
          <Route path="/portfolio/educational-platform" element={<EducationalAIPlatform />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;