import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col pt-20">
      {/* Background blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-40"></div>
        <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] bg-blue-900/30 rounded-full blur-[150px] mix-blend-screen opacity-30"></div>
      </div>

      <div className="flex-grow flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col h-full pt-4 space-y-10 lg:sticky lg:top-24">
              <div>
                <div className="flex items-center gap-2 mb-6">
                   <span className="h-px w-8 bg-primary/60"></span>
                   <span className="text-primary uppercase tracking-widest text-xs font-bold">Contact Me</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.1]">
                   Let's start a <br className="hidden lg:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">conversation.</span>
                </h1>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                   Interested in working together? Fill out the form or reach out directly via email. I'm always open to discussing new projects.
                </p>
              </div>

              <div className="space-y-6">
                <div className="group relative overflow-hidden rounded-2xl bg-background-light/40 border border-white/5 p-1 transition-all hover:bg-background-light/60">
                   <a className="flex items-center gap-5 p-4 rounded-xl transition-all" href="mailto:contact@johndoe.com">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-primary ring-1 ring-white/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                         <span className="material-symbols-outlined text-2xl">mail</span>
                      </div>
                      <div>
                         <p className="text-sm font-medium text-white/40 mb-0.5">Drop me a line</p>
                         <p className="text-lg font-semibold text-white tracking-tight group-hover:text-primary transition-colors">contact@johndoe.com</p>
                      </div>
                   </a>
                </div>
                <div>
                   <p className="text-sm font-medium text-white/40 mb-4 ml-1">Connect on social</p>
                   <div className="flex gap-4">
                      {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                        <a key={social} href="#" className="group flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/5 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white">
                          <span className="text-xs">{social[0]}</span>
                        </a>
                      ))}
                   </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 relative">
               <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-[2rem] blur-xl transform translate-x-2 translate-y-4 -z-10"></div>
               <div className="bg-background-light/80 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                  <div className="mb-10">
                     <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                     <p className="text-white/50 text-sm">I usually respond within 24 hours.</p>
                  </div>
                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="group">
                           <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2 ml-1" htmlFor="full-name">Full Name</label>
                           <input className="block w-full rounded-xl border-0 bg-white/5 px-4 py-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/20 focus:ring-2 focus:ring-inset focus:ring-primary/50 focus:bg-white/10 transition-all sm:text-sm" id="full-name" placeholder="John Doe" type="text"/>
                        </div>
                        <div className="group">
                           <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2 ml-1" htmlFor="email">Email Address</label>
                           <input className="block w-full rounded-xl border-0 bg-white/5 px-4 py-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/20 focus:ring-2 focus:ring-inset focus:ring-primary/50 focus:bg-white/10 transition-all sm:text-sm" id="email" placeholder="john@example.com" type="email"/>
                        </div>
                     </div>
                     <div className="group">
                        <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2 ml-1" htmlFor="subject">Subject</label>
                        <input className="block w-full rounded-xl border-0 bg-white/5 px-4 py-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/20 focus:ring-2 focus:ring-inset focus:ring-primary/50 focus:bg-white/10 transition-all sm:text-sm" id="subject" placeholder="Project Inquiry" type="text"/>
                     </div>
                     <div className="group">
                        <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2 ml-1" htmlFor="message">Message</label>
                        <textarea className="block w-full rounded-xl border-0 bg-white/5 px-4 py-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/20 focus:ring-2 focus:ring-inset focus:ring-primary/50 focus:bg-white/10 transition-all sm:text-sm resize-none" id="message" placeholder="Tell me about your project..." rows={5}></textarea>
                     </div>
                     <div className="pt-2">
                        <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary py-4 px-8 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40" type="submit">
                           Send Message <span className="material-symbols-outlined text-[1.25em] group-hover:translate-x-1 transition-transform duration-300">send</span>
                        </button>
                     </div>
                  </form>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;