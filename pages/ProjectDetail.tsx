import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import yaml from 'js-yaml';

interface ProjectFrontmatter {
  title: string;
  category: string;
  heroImage: string;
  description: string;
  demoLink?: string;
  repoLink?: string;
  techStack?: string[];
  projectType?: string;
  timeline?: string;
}

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [frontmatter, setFrontmatter] = useState<ProjectFrontmatter | null>(null);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(`projects/${id}.md`);
        if (!response.ok) {
           throw new Error('Project not found');
        }
        const text = await response.text();
        
        // Simple frontmatter parsing
        // Assumes file starts with ---, then frontmatter, then ---
        const matches = text.match(/^---([\s\S]*?)---([\s\S]*)$/);
        
        if (matches && matches.length >= 3) {
          const rawYaml = matches[1];
          const rawContent = matches[2];
          
          const parsedFrontmatter = yaml.load(rawYaml) as ProjectFrontmatter;
          setFrontmatter(parsedFrontmatter);
          setContent(rawContent);
        } else {
          // Fallback if no frontmatter found, just render text
          setContent(text);
          setFrontmatter({
            title: id || 'Project',
            category: 'Portfolio',
            heroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
            description: ''
          });
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
         <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !frontmatter) {
     return (
        <div className="min-h-screen flex flex-col items-center justify-center pt-20 gap-4">
           <h1 className="text-3xl font-bold text-white">Project Not Found</h1>
           <p className="text-slate-400">The project you are looking for doesn't exist or is currently unavailable.</p>
           <Link to="/projects" className="px-6 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">Back to Projects</Link>
        </div>
     );
  }

  return (
    <div className="min-h-screen w-full flex-col pt-20 pb-12">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 mx-auto max-w-6xl">
        <div className="mb-10">
          <Link to="/projects" className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white">
            <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
            Back to Projects
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-end mb-12">
          <div className="space-y-6">
             <h1 className="font-display text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
                {frontmatter.title}
             </h1>
             <p className="max-w-xl text-lg text-slate-400 leading-relaxed">
                {frontmatter.description}
             </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
             {frontmatter.demoLink && (
               <a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-primary px-8 font-medium text-white transition-all hover:bg-primary-hover" href={frontmatter.demoLink}>
                  <span className="mr-2">Live Demo</span>
                  <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">open_in_new</span>
               </a>
             )}
             {frontmatter.repoLink && (
               <a className="group inline-flex h-12 items-center justify-center rounded-lg border border-white/10 bg-background-light px-8 font-medium text-white transition-all hover:border-white/20 hover:bg-white/5" href={frontmatter.repoLink}>
                  <span className="mr-2">GitHub Repo</span>
                  <span className="material-symbols-outlined text-lg">code</span>
               </a>
             )}
          </div>
        </div>

        <div className="relative mb-20 group">
           <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-accent-cyan opacity-20 blur transition duration-500 group-hover:opacity-40"></div>
           <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-background-light border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url("${frontmatter.heroImage}")` }}></div>
           </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_350px]">
           <div className="space-y-16">
              {/* Markdown Content */}
              <article className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:text-accent-purple prose-img:rounded-xl">
                 <ReactMarkdown>{content}</ReactMarkdown>
              </article>
           </div>
           
           <aside className="space-y-8 lg:mt-2">
              <div className="sticky top-24 rounded-2xl border border-white/5 bg-background-light p-6 shadow-xl">
                 <h3 className="mb-6 font-display text-lg font-bold text-white">Technologies Used</h3>
                 <div className="flex flex-wrap gap-2">
                    {frontmatter.techStack?.map(tech => (
                       <span key={tech} className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">{tech}</span>
                    )) || <span className="text-slate-500 text-sm">No tech stack specified</span>}
                 </div>
                 
                 {frontmatter.projectType && (
                   <div className="mt-8 border-t border-white/10 pt-6">
                      <h4 className="mb-3 text-sm font-semibold text-slate-400">Project Type</h4>
                      <p className="text-sm text-white">{frontmatter.projectType}</p>
                   </div>
                 )}
                 
                 {frontmatter.timeline && (
                   <div className="mt-4">
                      <h4 className="mb-3 text-sm font-semibold text-slate-400">Timeline</h4>
                      <p className="text-sm text-white">{frontmatter.timeline}</p>
                   </div>
                 )}
              </div>
           </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;