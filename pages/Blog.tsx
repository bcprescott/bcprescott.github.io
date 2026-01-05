import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-32">
       <div className="mb-16 md:mb-24 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
             <span className="h-px w-12 bg-primary"></span>
             <span className="text-primary font-bold uppercase tracking-widest text-xs">Blog / Insights</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-serif font-medium leading-[1.1] text-white mb-6">
             Exploring ideas in <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 italic pr-2">Design & Technology</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
             A collection of thoughts on UI/UX, coding patterns, and the future of digital products. Curated for builders and thinkers.
          </p>
       </div>

       <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
          <div className="flex-grow w-full">
             {/* Featured Post */}
             <div className="relative group cursor-pointer mb-24">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-slate-800/50 to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                   <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                      <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}></div>
                      <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
                   </div>
                   <div className="flex flex-col gap-6">
                      <div className="flex flex-wrap gap-3">
                         <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-bold uppercase tracking-wide text-white group-hover:bg-white group-hover:text-primary transition-all">Featured</span>
                         <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-medium text-slate-400">UI/UX</span>
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight text-white group-hover:text-primary transition-colors">The Future of UI/UX in a Post-AI World</h2>
                      <p className="text-slate-400 leading-relaxed">Exploring how artificial intelligence is reshaping the landscape of user interface and experience design.</p>
                      <div className="flex items-center gap-4 mt-2 pt-4 border-t border-slate-800">
                         <div className="w-10 h-10 rounded-full bg-slate-700"></div>
                         <div>
                            <p className="text-sm font-bold text-white">John Doe</p>
                            <p className="text-xs text-slate-500">Nov 1, 2023 • 5 min read</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Grid Posts */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[1, 2, 3, 4].map((i) => (
                  <article key={i} className="flex flex-col gap-5 group cursor-pointer">
                     <div className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl bg-slate-800">
                        <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url("https://picsum.photos/seed/${i + 10}/800/600")` }}></div>
                     </div>
                     <div className="flex flex-col gap-3">
                        <div className="flex gap-2"><span className="text-xs font-semibold uppercase tracking-wider text-accent">Design</span></div>
                        <h3 className="text-2xl font-serif font-bold leading-snug text-white group-hover:underline decoration-primary decoration-2 underline-offset-4">Mastering Component-Based Design Systems</h3>
                     </div>
                  </article>
               ))}
             </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 lg:flex-shrink-0">
             <div className="sticky top-28 flex flex-col gap-10">
                <div className="relative">
                   <input className="w-full bg-background-light border-none rounded-xl py-4 pl-12 pr-4 text-white placeholder-slate-500 shadow-sm focus:ring-2 focus:ring-primary" placeholder="Search articles..." type="text"/>
                   <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                </div>
                <div className="flex flex-col gap-5">
                   <h3 className="font-serif text-xl font-bold text-white border-b border-slate-700 pb-3">Topics</h3>
                   <div className="flex flex-wrap gap-2">
                      {['UI/UX', 'Development', 'Case Study', 'Productivity', 'Career'].map(tag => (
                         <a key={tag} href="#" className="px-4 py-2 rounded-full bg-background-light border border-slate-700 hover:border-primary text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            {tag}
                         </a>
                      ))}
                   </div>
                </div>
                <div className="rounded-2xl bg-slate-800 p-6 text-slate-200">
                   <span className="material-symbols-outlined text-3xl mb-3">mail</span>
                   <h4 className="font-serif text-lg font-bold mb-2">Weekly Insights</h4>
                   <p className="text-sm text-slate-400 mb-4">Get the latest articles delivered to your inbox.</p>
                   <div className="flex gap-2">
                      <input className="w-full rounded-lg bg-white/10 border-transparent placeholder-slate-400 text-sm focus:bg-white/20 focus:ring-0" placeholder="Email" type="email"/>
                      <button className="bg-white text-background-dark rounded-lg px-3 font-bold hover:bg-slate-200 transition-colors">
                         <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                   </div>
                </div>
             </div>
          </aside>
       </div>
    </div>
  );
};

export default Blog;