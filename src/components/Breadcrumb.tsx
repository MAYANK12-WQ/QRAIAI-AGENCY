import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

type BreadcrumbProps = {
  pageName: string;
};

const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="container mx-auto px-4 py-4 flex items-center space-x-2 text-sm">
      <Link to="/" className="text-gray-400 hover:text-[#FFD700]">Home</Link>
      <ChevronRight className="w-4 h-4 text-gray-400" />
      <span className="text-[#FFD700]">{pageName}</span>
    </div>
  );
};

export default Breadcrumb;