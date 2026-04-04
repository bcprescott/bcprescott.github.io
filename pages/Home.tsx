import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

// Hook for scroll-triggered animations
const useInView = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(el);
      }
    }, { threshold: 0.15, ...options });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
};

// Animated counter for stats
const AnimatedNumber: React.FC<{ target: number; suffix?: string; duration?: number; isInView: boolean }> = ({ target, suffix = '+', duration = 1500, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span>{count}{suffix}</span>;
};

// Blog post data (recent 3)
const recentPosts = [
  {
    id: 'using-ai-without-losing-yourself',
    title: 'A Guide to Using AI Without Losing Yourself',
    category: 'Opinion',
    date: 'Mar 23, 2026',
    readTime: '9 min read',
    excerpt: 'Exploring some of the implications of over-reliance of AI.',
  },
  {
    id: 'complex-ai-bias',
    title: 'Understanding Complex AI Bias',
    category: 'Generative AI',
    date: 'Apr 18, 2025',
    readTime: '10 min read',
    excerpt: 'Exploring how various types of bias in artificial intelligence influences the quality and trustworthiness of AI-generated content.',
  },
  {
    id: 'intro-gan',
    title: 'Introduction to Generative Networks',
    category: 'Generative AI',
    date: 'Sep 26, 2022',
    readTime: '6 min read',
    excerpt: 'Basic introduction to Generative Adversarial Networks and how they work, from art generation to data augmentation.',
  },
];

const techCategories = [
  {
    label: 'Cloud & Infrastructure',
    items: [
      { name: 'Azure', icon: 'devicon-azure-plain', iconType: 'devicon' as const },
      { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark', iconType: 'devicon' as const },
      { name: 'Docker', icon: 'devicon-docker-plain', iconType: 'devicon' as const },
      { name: 'Kubernetes', icon: 'devicon-kubernetes-plain', iconType: 'devicon' as const },
      { name: 'Terraform', icon: 'devicon-terraform-plain', iconType: 'devicon' as const },
    ],
  },
  {
    label: 'AI & Machine Learning',
    items: [
      { name: 'PyTorch', icon: 'devicon-pytorch-plain', iconType: 'devicon' as const },
      { name: 'TensorFlow', icon: 'devicon-tensorflow-original', iconType: 'devicon' as const },
      { name: 'LlamaIndex', icon: 'hub', iconType: 'material' as const },
      { name: 'LangChain', icon: 'link', iconType: 'material' as const },
      { name: 'OpenAI', icon: 'auto_awesome', iconType: 'material' as const },
      { name: 'MLflow', icon: 'conversion_path', iconType: 'material' as const },
    ],
  },
  {
    label: 'Data & Analytics',
    items: [
      { name: 'Python', icon: 'devicon-python-plain', iconType: 'devicon' as const },
      { name: 'SQL', icon: 'devicon-azuresqldatabase-original', iconType: 'devicon' as const },
      { name: 'Power BI', icon: 'devicon-plotly-plain', iconType: 'devicon' as const },
      { name: 'Databricks', icon: 'devicon-apachespark-original', iconType: 'devicon' as const },
    ],
  },
];

const expertise = [
  {
    icon: 'all_inclusive',
    title: 'End-to-End AI Lifecycle',
    description: 'From use case discovery through deployment and integration, managing the complete AI delivery process.',
    color: 'from-primary/20 to-primary/5',
    iconBg: 'bg-primary/15 text-primary',
  },
  {
    icon: 'tactic',
    title: 'Strategy & Use Case Definition',
    description: 'Translating business objectives into actionable AI roadmaps with measurable outcomes.',
    color: 'from-purple-500/20 to-purple-500/5',
    iconBg: 'bg-purple-500/15 text-purple-400',
  },
  {
    icon: 'automation',
    title: 'Production Solution Design',
    description: 'Architecting scalable ML pipelines and agentic systems built to run reliably in production.',
    color: 'from-emerald-500/20 to-emerald-500/5',
    iconBg: 'bg-emerald-500/15 text-emerald-400',
  },
];

const Home: React.FC = () => {
  useDocumentTitle();
  const statsSection = useInView();
  const expertiseSection = useInView();
  const techSection = useInView();
  const blogSection = useInView();

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none" style={{ backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)' }}></div>
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/30 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative z-10 min-h-screen flex items-center pt-20 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="relative hero-stagger hero-stagger-1">
              <h1 className="font-display font-bold text-5xl md:text-7xl xl:text-[5.2rem] leading-[0.95] tracking-tight">
                <span className="block text-white mb-2">Practical AI.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-glow to-accent-cyan">Production Ready.</span>
              </h1>
              <div className="hidden lg:block absolute -left-10 top-4 w-[3px] h-full bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"></div>
            </div>

            <p className="hero-stagger hero-stagger-2 text-lg text-gray-400 leading-relaxed max-w-xl">
              I'm Ben, and I specialize in stripping the hype away from AI. With over a decade in applied data science, I bridge the gap between strategy and production to deliver solutions focused on measurable business outcomes.
            </p>

            <div className="hero-stagger hero-stagger-3 flex flex-wrap items-center gap-4 mt-2">
              <Link to="/blog" className="group relative px-8 py-4 bg-white text-background-dark font-bold text-base rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-0.5">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center gap-2">
                  <span>Read Blog</span>
                  <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                </div>
              </Link>
              <Link to="/contact" className="group px-8 py-4 border border-white/10 text-white font-medium text-base rounded-lg hover:bg-white/5 transition-all hover:border-white/30 flex items-center gap-2">
                <span>Contact Me</span>
              </Link>
            </div>
          </div>

          {/* Right Visual - Professional Headshot */}
          <div className="lg:col-span-5 flex items-center justify-center hero-stagger hero-stagger-4">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glow effect behind photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent-cyan/20 to-primary/10 rounded-full blur-[60px] scale-110"></div>
              {/* Gradient border ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary-glow to-accent-cyan p-[3px]">
                <div className="w-full h-full rounded-full bg-background overflow-hidden">
                  <img
                    src="/images/prescott.jpg"
                    alt="Ben Prescott"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              {/* Subtle decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-white/5"></div>
              <div className="absolute -inset-8 rounded-full border border-dashed border-primary/10"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator arrow */}
        <button
          onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors cursor-pointer group"
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <span className="material-symbols-outlined text-[28px] animate-bounce">expand_more</span>
        </button>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section id="stats" ref={statsSection.ref} className="relative z-10 py-20 border-t border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 transition-all duration-700 ${statsSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { value: 10, label: 'Years of AI Experience' },
              { value: 30, label: 'Client-Facing AI Projects' },
              { value: 25, label: 'Technical Experts Led' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-2">
                  <AnimatedNumber target={stat.value} isInView={statsSection.isInView} />
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERTISE SECTION ===== */}
      <section ref={expertiseSection.ref} className="relative z-10 py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className={`mb-14 transition-all duration-700 ${expertiseSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-primary"></span>
              <span className="text-primary font-bold uppercase tracking-widest text-xs">What I Do</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Core Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertise.map((item, idx) => (
              <div
                key={idx}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${item.color} border border-white/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 ${expertiseSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: expertiseSection.isInView ? `${idx * 150}ms` : '0ms' }}
              >
                <div className={`size-14 rounded-xl ${item.iconBg} flex items-center justify-center mb-6`}>
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECH STACK SECTION ===== */}
      <section ref={techSection.ref} className="relative z-10 py-20 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className={`mb-12 transition-all duration-700 ${techSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-primary"></span>
              <span className="text-primary font-bold uppercase tracking-widest text-xs">Tools & Technologies</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Tech Stack</h2>
          </div>

          <div className={`flex flex-col gap-10 transition-all duration-700 delay-200 ${techSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {techCategories.map((category, catIdx) => (
              <div key={catIdx}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">{category.label}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-background-light border border-white/5 text-sm font-medium text-gray-300 hover:border-primary/30 hover:text-white transition-all duration-300"
                    >
                      {tech.iconType === 'devicon' ? (
                        <i className={`${tech.icon} text-base opacity-60`}></i>
                      ) : (
                        <span className="material-symbols-outlined text-[16px] opacity-60">{tech.icon}</span>
                      )}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RECENT BLOG POSTS SECTION ===== */}
      <section ref={blogSection.ref} className="relative z-10 py-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className={`flex items-end justify-between mb-14 transition-all duration-700 ${blogSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-primary"></span>
                <span className="text-primary font-bold uppercase tracking-widest text-xs">Latest Insights</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Recent Posts</h2>
            </div>
            <Link to="/blog" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors group">
              <span>View all posts</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post, idx) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className={`group flex flex-col gap-5 p-6 rounded-2xl bg-background-light/50 border border-white/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 ${blogSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: blogSection.isInView ? `${idx * 150}ms` : '0ms' }}
              >
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">{post.category}</span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white leading-snug group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <span className="material-symbols-outlined text-[18px] text-gray-500 group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="sm:hidden mt-8 text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              <span>View all posts</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
