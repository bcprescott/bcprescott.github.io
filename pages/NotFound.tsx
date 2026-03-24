import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const NotFound: React.FC = () => {
  useDocumentTitle('Page Not Found');
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[30%] w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>
      <div className="text-center max-w-lg">
        <div className="text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-glow to-accent-cyan mb-6">
          404
        </div>
        <h1 className="text-3xl font-display font-bold text-white mb-4">Page not found</h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-background-dark font-bold text-base rounded-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
