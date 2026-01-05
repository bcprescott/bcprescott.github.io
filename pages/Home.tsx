import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 opacity-[0.07] pointer-events-none" style={{ backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)' }}></div>
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/40 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-accent-cyan/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col gap-8 lg:pr-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 w-fit backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold text-primary-glow tracking-wide uppercase">Open for new opportunities</span>
          </div>
          
          <div className="relative">
            <h1 className="font-display font-bold text-5xl md:text-7xl xl:text-8xl leading-[0.95] tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 mb-2">Architecting</span>
              <span className="block text-white mb-2">Digital</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-glow to-accent-cyan">Reality.</span>
            </h1>
            <div className="hidden lg:block absolute -left-12 top-4 w-[2px] h-full bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"></div>
          </div>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
            I'm John, a software engineer obsessed with performance and design. I craft high-end web experiences that merge artistic vision with technical precision.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link to="/projects" className="group relative px-8 py-4 bg-white text-background-dark font-bold text-base rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-0.5">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center gap-2">
                <span>Explore Work</span>
                <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
              </div>
            </Link>
            <Link to="/contact" className="group px-8 py-4 border border-white/10 text-white font-medium text-base rounded-lg hover:bg-white/5 transition-all hover:border-white/30 flex items-center gap-2">
              <span>Contact Me</span>
            </Link>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex items-center gap-8 md:gap-12 mt-4">
            <div>
              <div className="text-2xl font-display font-bold text-white">5+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Years Exp.</div>
            </div>
            <div>
              <div className="text-2xl font-display font-bold text-white">40+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-display font-bold text-white">100%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Delivery</div>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="lg:col-span-5 relative h-[400px] lg:h-[600px] flex items-center justify-center perspective-[1000px]">
          <div className="relative w-full h-full flex items-center justify-center transform-style-3d">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-white/5 rounded-full animate-spin-slow"></div>
              <div className="absolute w-[250px] h-[250px] md:w-[380px] md:h-[380px] border border-dashed border-primary/20 rounded-full animate-spin-reverse-slow"></div>
              <div className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] border border-white/10 rounded-full rotate-45"></div>
            </div>
            
            <div className="absolute top-[15%] right-[10%] w-32 h-32 md:w-40 md:h-40 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl animate-float z-20 flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
               <div className="grid grid-cols-3 gap-2 p-4 w-full h-full opacity-50">
                 <div className="bg-primary/40 rounded-sm"></div><div className="bg-transparent"></div><div className="bg-primary/40 rounded-sm"></div>
                 <div className="bg-transparent"></div><div className="bg-primary/40 rounded-sm"></div><div className="bg-transparent"></div>
                 <div className="bg-primary/40 rounded-sm"></div><div className="bg-transparent"></div><div className="bg-primary/40 rounded-sm"></div>
               </div>
            </div>

            <div className="relative w-48 h-64 md:w-64 md:h-80 bg-background-light/40 backdrop-blur-xl border border-white/10 rounded-3xl z-10 flex flex-col p-6 shadow-2xl shadow-primary/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="space-y-3 font-mono text-xs text-gray-400">
                <div className="flex gap-2"><span className="text-purple-400">const</span> <span className="text-blue-400">future</span> = <span className="text-white">{`{`}</span></div>
                <div className="pl-4 text-green-400">innovation: <span className="text-orange-400">true</span>,</div>
                <div className="pl-4 text-green-400">limits: <span className="text-orange-400">null</span>,</div>
                <div className="pl-4 text-green-400">stack: <span className="text-white">[</span></div>
                <div className="pl-8 text-gray-500">'Web3', 'AI', 'UI'</div>
                <div className="pl-4 text-white">]</div>
                <div className="text-white">{`};`}</div>
              </div>
              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[70%] bg-gradient-to-r from-primary to-accent-cyan rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[10%] left-[5%] md:left-[10%] w-36 h-24 md:w-48 md:h-32 bg-background-light/40 backdrop-blur-xl border border-white/10 rounded-xl animate-float-delayed z-30 p-4">
               <div className="flex items-center justify-between mb-2">
                 <span className="text-xs font-bold text-white">System Status</span>
                 <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
               </div>
               <div className="flex items-end gap-1 h-10 mt-2">
                 <div className="w-1/5 bg-primary/40 rounded-t h-[40%]"></div>
                 <div className="w-1/5 bg-primary/60 rounded-t h-[70%]"></div>
                 <div className="w-1/5 bg-primary/30 rounded-t h-[50%]"></div>
                 <div className="w-1/5 bg-primary/80 rounded-t h-[90%]"></div>
                 <div className="w-1/5 bg-primary/50 rounded-t h-[60%]"></div>
               </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent-cyan/30 rounded-full blur-[60px] -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;