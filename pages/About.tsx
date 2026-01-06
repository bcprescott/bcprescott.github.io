import React from 'react';

const About: React.FC = () => {
   return (
      <div className="container mx-auto max-w-6xl px-4 py-24 md:py-32">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Sidebar */}
            <aside className="col-span-1 lg:col-span-4 lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
               <div className="relative group">
                  <div className="absolute top-0 left-0 w-full h-full bg-navy-800 rounded-2xl rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500 ease-out"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-background-light rounded-2xl -rotate-2 opacity-50 group-hover:-rotate-3 transition-transform duration-500 ease-out"></div>

                  <div className="relative flex flex-col items-center text-center p-8 bg-background-light/90 backdrop-blur-sm border border-white/5 rounded-2xl shadow-xl transition-transform duration-500">
                     <div className="relative mb-6">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent-cyan opacity-20 blur-xl animate-pulse"></div>
                        <div
                           className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-40 w-40 border-[6px] border-background-dark shadow-2xl relative z-10 transform group-hover:scale-105 transition-transform duration-500"
                           // style={{ backgroundImage: 'url("https://github.com/bcprescott/bcprescott.github.io/blob/main/components/prescott.jpg&auto=format&fit=crop&w=300&q=80")' }}
                           style={{ backgroundImage: 'url("/images/prescott.jpg")' }}
                        ></div>
                        <div className="absolute bottom-2 right-2 z-20 flex items-center justify-center size-10 rounded-full bg-background-dark shadow-lg border border-white/10 text-xl group-hover:rotate-12 transition-transform duration-300">👋</div>
                     </div>

                     <h1 className="text-3xl font-extrabold tracking-tight text-white mb-1">Ben Prescott</h1>
                     <h2 className="text-base font-normal tracking-tight text-indigo-400 mb-1">M.S. Data Science</h2>
                     <h2 className="text-base font-bold tracking-tight text-indigo-400 mb-1">Northwestern University</h2>
                     {/* <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">Open to work</span>
              </div> */}
                     {/* 
                     <p className="text-lg font-serif italic text-slate-400 mb-6 leading-relaxed">
                        "Crafting scalable, production-ready solutions that solve real business problems."
                     </p> */}

                     <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>

                     <div className="flex flex-col w-full gap-3">
                        {[
                           { name: 'LinkedIn', href: 'https://www.linkedin.com/in/benjaminprescott/' },
                           { name: 'GitHub', href: 'https://github.com/bcprescott' },
                           { name: 'Email', href: 'mailto:bcprescott@outlook.com' },
                           { name: 'Research', href: 'https://bcprescott.github.io/files/resume.pdf' },
                           { name: 'Resume', href: '/files/resume.pdf' },
                        ].map((item) => (
                           <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full p-3 rounded-xl bg-background hover:bg-primary hover:text-white group/link transition-all duration-300 border border-transparent hover:border-primary/20">
                              <div className="flex items-center gap-3">
                                 <span className="material-symbols-outlined text-[20px] group-hover/link:text-white text-slate-400 transition-colors">
                                    {item.name === 'Email' ? 'mail' : item.name === 'GitHub' ? 'code' : item.name === 'Research' ? 'science' : item.name === 'Resume' ? 'article' : 'link'}
                                 </span>
                                 <span className="text-sm font-medium">{item.name}</span>
                              </div>
                              <span className="material-symbols-outlined text-[16px] opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all">arrow_forward</span>
                           </a>
                        ))}
                     </div>
                  </div>
               </div>
            </aside>

            {/* Main Content */}
            <div className="col-span-1 lg:col-span-8 flex flex-col gap-12 lg:pt-8">
               <section className="relative">
                  <h2 className="flex items-center gap-4 text-2xl font-bold text-white mb-6">
                     <span className="w-8 h-1 bg-primary rounded-full"></span>
                     About Me
                  </h2>
                  <div className="p-8 rounded-2xl bg-background-light border border-white/5 shadow-sm relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-5 transition-opacity">
                        <span className="material-symbols-outlined text-9xl text-white rotate-12">code</span>
                     </div>
                     <div className="relative space-y-4 text-lg leading-relaxed text-slate-400">
                        <p>I’m an engineer by trade and a pragmatist by necessity. With over <strong className="text-white font-semibold">17+ years of experience</strong> spanning mission-critical systems, cloud architecture, and applied AI, I’ve learned that the hardest part of AI isn't the technical solution, it’s the integration and adoption.</p>
                        <p>My career has evolved from building the foundational infrastructure that powers global enterprises to architecting the agentic RAG systems and Text-to-SQL frameworks that define the future of business. Because I’ve spent nearly a decade in cloud infrastructure, I build AI solutions that actually make it to production.</p>
                        <p>Outside of the AI world, you’ll likely find me in my woodshop building guitars or cutting boards, or exploring the world with my family.</p>
                     </div>
                  </div>
               </section>

               <section>
                  <h2 className="flex items-center gap-4 text-2xl font-bold text-white mb-8">
                     <span className="w-8 h-1 bg-primary rounded-full"></span>
                     My Expertise
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     <div className="col-span-2 md:col-span-2 row-span-2 group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-navy-800 to-blue-900 text-white shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute right-0 top-0 p-6 opacity-20"><span className="material-symbols-outlined text-9xl rotate-12">all_inclusive</span></div>
                        <div className="relative h-full flex flex-col justify-between z-10">
                           <div className="size-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4"><span className="material-symbols-outlined text-3xl">all_inclusive</span></div>
                           <div>
                              <h3 className="text-2xl font-bold mb-2">End-to-End AI Lifecycle</h3>
                              <p className="text-blue-100/80 mb-4 text-sm leading-relaxed">Mastering the end-to-end AI design process from use case understanding to deployment and integration.</p>
                              <div className="flex flex-wrap gap-2">
                                 {['Microsoft Azure', 'Python', 'SQL', 'Power BI'].map(tool => (
                                    <span key={tool} className="px-2 py-1 bg-white/10 rounded-md text-xs font-medium border border-white/10">{tool}</span>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* <div className="col-span-2 md:col-span-2 p-6 rounded-2xl bg-background-light border border-white/5 hover:-translate-y-1 transition-transform">
                        <div className="flex items-start justify-between mb-4">
                           <div className="size-10 rounded-xl bg-orange-900/30 text-orange-400 flex items-center justify-center"><span className="material-symbols-outlined text-2xl">model_training</span></div>
                        </div>
                        <h3 className="font-bold text-lg text-white mb-1">Business Innovation</h3>
                        <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden mt-3"><div className="bg-orange-500 h-1.5 rounded-full w-4/5"></div></div>
                     </div> */}
                     <div className="col-span-1 p-5 rounded-2xl bg-background-light border border-white/5 flex flex-col justify-center items-center text-center gap-3 hover:-translate-y-1 transition-transform">
                        <div className="size-10 rounded-full bg-purple-900/30 text-purple-400 flex items-center justify-center"><span className="material-symbols-outlined text-2xl">tactic</span></div>
                        <h3 className="font-bold text-sm text-white">Strategy & Use Case Definition</h3>
                     </div>
                     <div className="col-span-1 p-5 rounded-2xl bg-background-light border border-white/5 flex flex-col justify-center items-center text-center gap-3 hover:-translate-y-1 transition-transform">
                        <div className="size-10 rounded-full bg-sky-900/30 text-sky-400 flex items-center justify-center"><span className="material-symbols-outlined text-2xl">sync_arrow_up</span></div>
                        <h3 className="font-bold text-sm text-white">Rapid AI Proofs of Value</h3>
                     </div>
                     <div className="col-span-1 p-5 rounded-2xl bg-background-light border border-white/5 flex flex-col justify-center items-center text-center gap-3 hover:-translate-y-1 transition-transform">
                        <div className="size-10 rounded-full bg-emerald-900/30 text-emerald-400 flex items-center justify-center"><span className="material-symbols-outlined text-2xl">automation</span></div>
                        <h3 className="font-bold text-sm text-white">Production Solution Design</h3>
                     </div>
                     <div className="col-span-1 p-5 rounded-2xl bg-background-light border border-white/5 flex flex-col justify-center items-center text-center gap-3 hover:-translate-y-1 transition-transform">
                        <div className="size-10 rounded-full bg-amber-900/30 text-amber-400 flex items-center justify-center"><span className="material-symbols-outlined text-2xl">integration_instructions</span></div>
                        <h3 className="font-bold text-sm text-white">Integration & User Enablement</h3>
                     </div>
                  </div>
               </section>

               <section>
                  <h2 className="flex items-center gap-4 text-2xl font-bold text-white mb-12">
                     <span className="w-8 h-1 bg-primary rounded-full"></span>
                     Career Journey
                  </h2>
                  <div className="relative space-y-12 pl-4">
                     <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-white/10 to-transparent"></div>
                     {[
                        {
                           year: '2024 - Present',
                           role: 'Head of AI Solutions',
                           company: 'Trace3',
                           current: true,
                           description: 'Leading the organizational strategy and GTM offerings for AI solutions, focusing on agentic architectures and generative AI applications.'
                        },
                        {
                           year: '2023 - 2024',
                           role: 'Principal Data Scientist',
                           company: 'AHEAD',
                           current: false,
                           description: 'Architected and delivered large-scale AI platforms, custom machine learning models, and generative AI applications for Fortune 500 clients.'
                        },
                        {
                           year: '2021 - 2023',
                           role: 'Practice Manager, Analytics',
                           company: 'ConvergeOne',
                           current: false,
                           description: 'Managed a national-level analytics practice, delivering envisioning workshops and pre-sales initiatives that translated complex analytics and AI opportunities into high-value client projects.'
                        },
                        {
                           year: '2018 - 2021',
                           role: 'Azure Delivery Manager',
                           company: 'AHEAD',
                           current: false,
                           description: 'Provided direct leadership, career pathing, and upskilling for a cross-functional team of 16 infrastructure, data, and AI consultants.'
                        },
                        {
                           year: '2017 - 2018',
                           role: 'Azure AI Practice Lead',
                           company: 'Presidio',
                           current: false,
                           description: 'Drove early-market AI adoption by designing and delivering Azure Machine Learning proofs-of-concept and technical solution workshops for enterprise clients'
                        },
                        {
                           year: '2016 - 2017',
                           role: 'Cloud Architect',
                           company: 'Rightpoint',
                           current: false,
                           description: 'Architected mission-critical IoT infrastructure on Microsoft Azure to support a global smart-home ecosystem with over 3 million active connections.'
                        },
                        {
                           year: '2008 - 2016',
                           role: 'Various Roles',
                           company: 'US Army, NPI, Amelia',
                           current: false,
                           description: 'See resume for details...'
                        },
                     ].map((job, idx) => (
                        <div key={idx} className="relative pl-12 group">
                           <div className={`absolute left-2 top-0 w-4 h-4 rounded-full border-4 -translate-x-1/2 transition-all duration-300 z-10 ${job.current ? 'bg-primary border-primary scale-110' : 'bg-background border-gray-600 group-hover:border-primary'}`}></div>
                           <div className="p-6 rounded-2xl bg-background-light border border-white/5 hover:border-primary/30 transition-colors shadow-sm relative overflow-hidden">
                              <div className="absolute -right-4 -top-6 text-[120px] font-black text-white/5 pointer-events-none select-none">0{idx + 1}</div>
                              <div className="relative z-10">
                                 <span className="text-sm font-semibold text-slate-400 block mb-1">{job.year}</span>
                                 <h3 className="text-xl font-bold text-white mb-1">{job.role}</h3>
                                 <p className="text-base font-medium text-primary mb-4">{job.company}</p>
                                 <p className="text-slate-400 text-sm leading-relaxed">{job.description}</p>
                              </div>
                           </div>
                        </div>
                     ))}</div>
               </section>
            </div>
         </div>
      </div>
   );
};

export default About;
