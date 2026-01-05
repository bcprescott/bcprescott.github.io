import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'ecommerce-replatform',
    title: 'E-commerce Redesign',
    category: 'Web Dev',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'Revamped online store for increased user engagement.',
    span: 'md:col-span-2'
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'Visualizing complex business intelligence data.',
    span: 'md:col-span-1'
  },
  {
    id: 'blog-engine',
    title: 'Blog Engine',
    category: 'Platform',
    image: 'https://images.unsplash.com/photo-1499750310159-529800cf2c5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'Lightweight markdown-based blogging platform.',
    span: 'md:col-span-1'
  },
  {
    id: 'fintech-app',
    title: 'Fintech Mobile App',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'Secure personal finance management.',
    span: 'md:col-span-2'
  },
  {
    id: 'saas-ui-kit',
    title: 'SaaS UI Kit',
    category: 'Design System',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'Comprehensive component library for scale.',
    span: 'md:col-span-1'
  },
  {
    id: 'interactive-portfolio',
    title: 'Interactive Portfolio',
    category: 'Web Dev',
    image: 'https://images.unsplash.com/photo-1545665277-5937bf04a560?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'Modern web technologies and dark mode aesthetics.',
    span: 'md:col-span-2'
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category.includes(filter) || (filter === 'Mobile Apps' && p.category === 'Mobile Apps') || (filter === 'UI/UX' && p.category === 'UI/UX'));

  return (
    <div className="relative min-h-screen py-32 px-4 sm:px-8 md:px-12 lg:px-20">
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-navy-800/20 rounded-full blur-[100px] mix-blend-screen opacity-50"></div>
          <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen opacity-40"></div>
       </div>

       <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12">
          <div className="flex flex-wrap justify-between items-end gap-4">
             <div className="flex flex-col gap-2">
                <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl font-syne">Selected Work</p>
                <p className="text-slate-400 text-base max-w-lg">A curated collection of projects exploring the intersection of design, technology, and user experience.</p>
             </div>
          </div>

          <div className="flex gap-3 flex-wrap">
             {['All', 'Web Dev', 'UI/UX', 'Mobile Apps'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`flex h-10 px-6 items-center justify-center rounded-full text-sm font-medium transition-all ${
                    filter === cat 
                    ? 'bg-navy-900 border border-navy-800 text-white shadow-lg shadow-navy-900/50' 
                    : 'bg-white/5 hover:bg-white/10 text-slate-300'
                  }`}
                >
                  {cat}
                </button>
             ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(320px,auto)]">
             {filteredProjects.map((project) => (
                <Link 
                  key={project.id} 
                  to={project.id === 'ecommerce-replatform' ? `/projects/${project.id}` : '#'}
                  className={`group relative ${project.span} rounded-[2rem] overflow-hidden bg-background-light border border-white/5 shadow-2xl transition-all duration-500 hover:shadow-primary/20 hover:border-primary/40 hover:-translate-y-1`}
                >
                   <div className="absolute inset-0 z-0">
                      <img alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={project.image} />
                      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80"></div>
                   </div>
                   <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10">
                      <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                         <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-200 uppercase bg-blue-900/40 backdrop-blur-md rounded-full border border-blue-500/20">{project.category}</span>
                         <h3 className="text-white text-2xl md:text-3xl font-bold font-syne mb-2 leading-tight">{project.title}</h3>
                         <p className="text-slate-300 text-sm md:text-base max-w-lg opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto transition-all duration-500 delay-75">{project.desc}</p>
                      </div>
                      <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10">
                         <span className="material-symbols-outlined text-white">arrow_outward</span>
                      </div>
                   </div>
                </Link>
             ))}
          </div>

          <div className="flex flex-col items-center justify-end gap-6 px-4 py-10 md:py-20 bg-navy-900/50 backdrop-blur-sm border border-navy-800 rounded-[2rem] relative overflow-hidden mt-8">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-16 -mt-16"></div>
             <div className="flex flex-col gap-2 text-center relative z-10">
                <h2 className="text-white text-3xl md:text-4xl font-black font-syne leading-tight">Interested in collaborating?</h2>
                <p className="text-slate-400 text-base max-w-2xl">Let's connect and discuss how I can help bring your ideas to life.</p>
             </div>
             <div className="relative z-10">
               <Link to="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-background-dark font-bold hover:bg-slate-200 transition-all shadow-lg shadow-white/10">Get in Touch</Link>
             </div>
          </div>
       </div>
    </div>
  );
};

export default Portfolio;