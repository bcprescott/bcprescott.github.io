import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
   {
      id: 'complex-ai-bias',
      title: 'Understanding Complex AI Bias',
      category: ['Generative AI', 'Agentic AI'],
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Exploring how various types of bias artificial intelligence influences the quality and trustworthiness of AI-generated content.',
      author: 'Ben Prescott',
      date: 'Apr 18, 2025',
      readTime: '10 min read',
      featured: true
   },
   {
      id: 'intro-gan',
      title: 'Introduction to Generative Networks',
      category: ['GAN', 'Deep Learning'],
      image: '/public/images/arch1.png',
      excerpt: 'Basic introduction to Generative Adversarial Networks and how they work, from art generation to data augmentation.',
      author: 'Ben Prescott',
      date: 'Sep 26, 2022',
      readTime: '6 min read',
      featured: false
   },
   {
      id: 'getting-started-faceapi',
      title: 'Getting Started With Azure Face API',
      category: ['Azure', 'Face Recognition'],
      image: '/public/images/benface.png',
      excerpt: 'A guide to using Azure Face API for face detection and recognition, distinguishing between the two and exploring ethical considerations.',
      author: 'Ben Prescott',
      date: 'Jun 7, 2022',
      readTime: '8 min read',
      featured: false
   },
   {
      id: 'visualizing-cnn',
      title: 'Peering Inside A Convolutional Neural Network',
      category: ['CNN', 'Deep Learning', 'XAI'],
      image: '/public/images/cnn.jpeg',
      excerpt: 'Visualizing feature maps in a Convolutional Neural Network to understand model predictions and explainability.',
      author: 'Ben Prescott',
      date: 'Aug 4, 2021',
      readTime: '8 min read',
      featured: false
   },
   {
      id: 'google-vertex-ai-demo',
      title: 'House Sale Prediction Using GCP Vertex AI',
      category: ['Regression', 'GCP'],
      image: '/public/images/vertex.png',
      excerpt: 'Training and deploying a linear regression model for house price prediction using Google Cloud Vertex AI.',
      author: 'Ben Prescott',
      date: 'May 20, 2021',
      readTime: '8 min read',
      featured: false
   },
   {
      id: 'lets-talk-artificial-intelligence',
      title: 'Let\'s Talk Artificial Intelligence',
      category: ['Opinion', 'Basics', 'AI'],
      image: '/public/images/alexa.png',
      excerpt: 'A discussion on the definition of AI, Machine Learning, and the history of intelligent systems.',
      author: 'Ben Prescott',
      date: 'May 4, 2021',
      readTime: '6 min read',
      featured: false
   },
   {
      id: 'project-crashing',
      title: 'Project Crashing - A Prescriptive Analytics Approach',
      category: ['Operations Research', 'Optimization', 'Gurobi', 'MLP'],
      image: '/public/images/pert.png',
      excerpt: 'Using Mixed-Integer Programming and Gurobi to optimize project schedules and reduce costs.',
      author: 'Ben Prescott',
      date: 'Mar 30, 2021',
      readTime: '12 min read',
      featured: false
   },
   {
      id: 'graph-databases-part2',
      title: 'Basics of Graph Databases - Part 2',
      category: ['Neo4j', 'Graph', 'Database', 'Architecture'],
      image: '/public/images/graph2.png',
      excerpt: 'Deploying, configuring, and querying a Neo4j graph database on Microsoft Azure.',
      author: 'Ben Prescott',
      date: 'Dec 3, 2020',
      readTime: '10 min read',
      featured: false
   },
   {
      id: 'graph-databases-part1',
      title: 'Basics of Graph Databases - Part 1',
      category: ['Neo4j', 'Graph', 'Database', 'Architecture'],
      image: '/public/images/graph.png',
      excerpt: 'An introduction to graph databases, focusing on Neo4j and the Cypher query language.',
      author: 'Ben Prescott',
      date: 'Nov 30, 2020',
      readTime: '7 min read',
      featured: false
   },
   {
      id: 'lr-cancer',
      title: 'Univariate & Multivariate Linear Regression',
      category: ['Regression', 'Cancer'],
      image: '/public/images/regression.png',
      excerpt: 'Exploring univariate and multivariate Linear Regression using a cancer mortality dataset.',
      author: 'Ben Prescott',
      date: 'Sep 14, 2020',
      readTime: '6 min read',
      featured: false
   },
   {
      id: 'email-sentiment-part2',
      title: 'Email Sentiment Analysis - Part 2',
      category: ['Sentiment', 'Python', 'Azure', 'NLP'],
      image: '/public/images/thinkpositive.jpg',
      excerpt: 'Analyzing and performing sentiment analysis on sanitized emails using Microsoft Azure and Python.',
      author: 'Ben Prescott',
      date: 'Jun 11, 2020',
      readTime: '6 min read',
      featured: false
   },
   {
      id: 'email-sentiment-part1',
      title: 'Email Sentiment Analysis - Part 1',
      category: ['Sentiment', 'Python', 'Azure', 'NLP'],
      image: '/public/images/happy.jpg',
      excerpt: 'Analyzing and performing sentiment analysis on sanitized emails using Microsoft Azure and Python.',
      author: 'Ben Prescott',
      date: 'May 8, 2020',
      readTime: '8 min read',
      featured: false
   }
];

const Blog: React.FC = () => {
   const [activeCategories, setActiveCategories] = useState<string[]>([]);

   const toggleCategory = (category: string) => {
      if (category === 'All') {
         setActiveCategories([]);
         return;
      }
      setActiveCategories(prev =>
         prev.includes(category)
            ? prev.filter(c => c !== category)
            : [...prev, category]
      );
   };

   // Logic: 
   // 1. Get all featured posts (if multiple, maybe just take the first one or filter? Assuming one main featured post for now).
   // 2. Filter grid posts based on Active Categories (Intersection).
   // 3. Featured post is excluded from grid? Yes, generally.

   const featuredPost = blogPosts.find(post => post.featured);

   const gridPosts = blogPosts.filter(post => {
      if (post.featured) return false;
      if (activeCategories.length === 0) return true;
      // Ensure post.category is always an array for filtering
      const postCategories = Array.isArray(post.category) ? post.category : [post.category];
      return activeCategories.every(cat => postCategories.includes(cat));
   });

   return (
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-32">
         {/* ... Header Section ... */}
         <div className="mb-16 md:mb-24 max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
               <span className="h-px w-12 bg-primary"></span>
               <span className="text-primary font-bold uppercase tracking-widest text-xs">Blog / Insights</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-serif font-medium leading-[1.1] text-white mb-6">
               Exploring my thoughts in <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 italic pr-2">Artificial Intelligence</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
               A collection of thoughts on artificial intelligence, operations research, and the future of an AI-powered society. Curated for builders and thinkers.
            </p>
         </div>

         <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
            <div className="flex-grow w-full">
               {/* Featured Post */}
               {featuredPost && (
                  <Link to={`/blog/${featuredPost.id}`} className="block relative group cursor-pointer mb-24">
                     <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-slate-800/50 to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                     <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                           <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url("${featuredPost.image}")` }}></div>
                           <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
                        </div>
                        <div className="flex flex-col gap-6">
                           <div className="flex flex-wrap gap-3">
                              <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-bold uppercase tracking-wide text-white group-hover:bg-white group-hover:text-primary transition-all">Featured</span>
                              {/* Ensure featuredPost.category is an array before mapping */}
                              {(Array.isArray(featuredPost.category) ? featuredPost.category : [featuredPost.category]).slice(0, 2).map(cat => (
                                 <span key={cat} className="px-3 py-1 rounded-full bg-slate-800 text-xs font-medium text-slate-400">{cat}</span>
                              ))}
                           </div>
                           <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight text-white group-hover:text-primary transition-colors">{featuredPost.title}</h2>
                           <p className="text-slate-400 leading-relaxed">{featuredPost.excerpt}</p>
                           <div className="flex items-center gap-4 mt-2 pt-4 border-t border-slate-800">
                              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">{featuredPost.author.charAt(0)}</div>
                              <div>
                                 <p className="text-sm font-bold text-white">{featuredPost.author}</p>
                                 <p className="text-xs text-slate-500">{featuredPost.date} • {featuredPost.readTime}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Link>
               )}

               {/* Grid Posts */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {gridPosts.map((post) => (
                     <Link key={post.id} to={`/blog/${post.id}`} className="flex flex-col gap-5 group cursor-pointer">
                        <div className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl bg-slate-800">
                           <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url("${post.image}")` }}></div>
                        </div>
                        <div className="flex flex-col gap-3">
                           <div className="flex gap-2">
                              {/* Ensure post.category is an array before mapping */}
                              {(Array.isArray(post.category) ? post.category : [post.category]).map(cat => (
                                 <span key={cat} className="text-xs font-semibold uppercase tracking-wider text-accent mr-2">{cat}</span>
                              ))}
                           </div>
                           <h3 className="text-2xl font-serif font-bold leading-snug text-white group-hover:underline decoration-primary decoration-2 underline-offset-4">{post.title}</h3>
                           <p className="text-slate-400 text-sm line-clamp-2">{post.excerpt}</p>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-80 lg:flex-shrink-0">
               <div className="sticky top-28 flex flex-col gap-10">
                  <div className="relative">
                     <input className="w-full bg-background-light border-none rounded-xl py-4 pl-12 pr-4 text-white placeholder-slate-500 shadow-sm focus:ring-2 focus:ring-primary" placeholder="Search articles..." type="text" />
                     <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                  </div>
                  <div className="flex flex-col gap-5">
                     <h3 className="font-serif text-xl font-bold text-white border-b border-slate-700 pb-3">Topics</h3>
                     <div className="flex flex-wrap gap-2">
                        {['All', 'Agentic AI', 'Generative AI', 'Machine Learning', 'Operations Research', 'Deep Learning', 'NLP', 'Graph Databases', 'Azure', 'GCP'].map(tag => (
                           <button
                              key={tag}
                              onClick={() => toggleCategory(tag)}
                              className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${(tag === 'All' && activeCategories.length === 0) || activeCategories.includes(tag)
                                 ? 'bg-primary text-white border-primary'
                                 : 'bg-background-light border-slate-700 text-slate-300 hover:border-primary hover:text-white'
                                 }`}
                           >
                              {tag}
                           </button>
                        ))}
                     </div>
                  </div>
                  {/* <div className="rounded-2xl bg-slate-800 p-6 text-slate-200">
                     <span className="material-symbols-outlined text-3xl mb-3">mail</span>
                     <h4 className="font-serif text-lg font-bold mb-2">Weekly Insights</h4>
                     <p className="text-sm text-slate-400 mb-4">Get the latest articles delivered to your inbox.</p>
                     <div className="flex gap-2">
                        <input className="w-full rounded-lg bg-white/10 border-transparent placeholder-slate-400 text-sm focus:bg-white/20 focus:ring-0" placeholder="Email" type="email" />
                        <button className="bg-white text-background-dark rounded-lg px-3 font-bold hover:bg-slate-200 transition-colors">
                           <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                     </div>
                  </div> */}
               </div>
            </aside>
         </div>
      </div>
   );
};

export default Blog;