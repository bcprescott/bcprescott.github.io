import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-background-dark z-10 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p className="text-sm font-medium text-white">© 2024 John Doe</p>
          <p className="text-sm text-slate-500">Designed & Built with Passion.</p>
        </div>
        <div className="flex gap-6">
          {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
             <a key={social} href="#" className="text-slate-500 hover:text-white transition-colors text-sm">
               {social}
             </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
