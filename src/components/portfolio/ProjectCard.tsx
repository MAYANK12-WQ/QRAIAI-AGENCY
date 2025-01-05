import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  Icon: React.ElementType;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  Icon,
  category
}) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-gradient-to-br from-purple-900/10 to-purple-900/20 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-[#FFD700]/30 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
            <Icon className="w-6 h-6 text-[#FFD700]" />
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center"
          >
            <ArrowUpRight className="w-5 h-5 text-[#FFD700]" />
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-purple-900/30 text-purple-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="absolute top-4 right-4">
          <span className="text-sm text-[#FFD700] bg-purple-900/50 px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;