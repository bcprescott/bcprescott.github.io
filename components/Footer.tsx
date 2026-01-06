import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-background-dark z-10 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p className="text-sm font-medium text-white">© 2026 Ben Prescott</p>
          <p className="text-sm text-slate-500">Of course I used AI to help build this...</p>
        </div>
        <div className="flex gap-6">
          {[
            {
              name: 'LinkedIn',
              url: 'https://linkedin.com/in/benjaminprescott'
            },
            {
              name: 'GitHub',
              url: 'https://github.com/bcprescott'
            }
          ].map((social) => (
            <a key={social.name} href={social.url} className="text-slate-500 hover:text-white transition-colors text-sm">
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
