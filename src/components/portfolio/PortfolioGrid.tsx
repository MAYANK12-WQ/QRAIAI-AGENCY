import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, MessageSquare, Film, Sparkles, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "AI Agents Suite",
    description: "Intelligent AI agents for task automation and efficiency across industries.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    tags: ["AI Agents", "Automation", "NLP"],
    Icon: Brain,
    category: "Automation",
    link: "/portfolio/ai-agents"
  },
  {
    title: "Gen Z Therapist",
    description: "AI-powered mental health support tailored for Gen Z users.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6",
    tags: ["Mental Health", "Gen Z", "AI Therapy"],
    Icon: Heart,
    category: "Healthcare",
    link: "/portfolio/gen-z-therapist"
  },
  {
    title: "AI Movie Maker",
    description: "Transform scripts into stunning videos with AI-powered cinematography.",
    image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff",
    tags: ["Video", "AI", "Creative"],
    Icon: Film,
    category: "Creative",
    link: "/portfolio/ai-movie-maker"
  },
  {
    title: "Restaurant AI Assistant",
    description: "Smart chatbot for seamless restaurant operations.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    tags: ["Chatbot", "Restaurants", "Operations"],
    Icon: MessageSquare,
    category: "Service",
    link: "/portfolio/restaurant-assistant"
  },
  {
    title: "Content Creator AI",
    description: "Advanced AI for generating engaging social media content.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868",
    tags: ["Content", "AI", "Social Media"],
    Icon: Sparkles,
    category: "Creative",
    link: "/portfolio/content-creator"
  },
  {
    title: "Educational AI Platform",
    description: "Personalized learning experiences powered by AI.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    tags: ["Education", "AI", "Learning"],
    Icon: GraduationCap,
    category: "Education",
    link: "/portfolio/educational-platform"
  }
];

const PortfolioGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Link key={project.title} to={project.link}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default PortfolioGrid;