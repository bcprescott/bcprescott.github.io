import React, { useEffect, useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import yaml from 'js-yaml';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

interface BlogFrontmatter {
    title: string;
    category: string;
    heroImage: string;
    description: string;
    author?: string;
    date?: string;
    readTime?: string;
}

// Lightbox modal for zooming into images
const ImageLightbox: React.FC<{ src: string; alt: string; onClose: () => void }> = ({ src, alt, onClose }) => {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-zoom-out p-4 sm:p-8"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close"
            >
                <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
            <img
                src={src}
                alt={alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
};

const BlogDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [frontmatter, setFrontmatter] = useState<BlogFrontmatter | null>(null);
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [lightboxSrc, setLightboxSrc] = useState<{ src: string; alt: string } | null>(null);

    useDocumentTitle(frontmatter?.title || 'Blog');

    const openLightbox = useCallback((src: string, alt: string) => {
        setLightboxSrc({ src, alt });
    }, []);

    const closeLightbox = useCallback(() => {
        setLightboxSrc(null);
    }, []);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            setError(false);
            try {
                const response = await fetch(`/blog/${id}.md`);
                if (!response.ok) {
                    throw new Error('Post not found');
                }
                const text = await response.text();

                // Simple frontmatter parsing
                const matches = text.match(/^---([\s\S]*?)---([\s\S]*)$/);

                if (matches && matches.length >= 3) {
                    const rawYaml = matches[1];
                    const rawContent = matches[2];

                    const parsedFrontmatter = yaml.load(rawYaml) as BlogFrontmatter;
                    setFrontmatter(parsedFrontmatter);
                    setContent(rawContent);
                } else {
                    setContent(text);
                    setFrontmatter({
                        title: id || 'Blog Post',
                        category: 'General',
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
            fetchPost();
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
                <h1 className="text-3xl font-bold text-white">Post Not Found</h1>
                <p className="text-slate-400">The article you are looking for doesn't exist or is currently unavailable.</p>
                <Link to="/blog" className="px-6 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">Back to Blog</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full flex-col pt-20 pb-12">
            {lightboxSrc && (
                <ImageLightbox src={lightboxSrc.src} alt={lightboxSrc.alt} onClose={closeLightbox} />
            )}

            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 mx-auto max-w-4xl">
                <div className="mb-10">
                    <Link to="/blog" className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white">
                        <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
                        Back to Blog
                    </Link>
                </div>

                <div className="space-y-6 mb-12 text-center">
                    <div className="flex items-center justify-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-medium text-slate-400">{frontmatter.category}</span>
                        {frontmatter.readTime && <span className="text-slate-500 text-xs">• {frontmatter.readTime}</span>}
                    </div>
                    <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                        {frontmatter.title}
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
                        {frontmatter.description}
                    </p>
                    {frontmatter.author && (
                        <div className="flex items-center justify-center gap-3 mt-4">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                {frontmatter.author.charAt(0)}
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-bold text-white">{frontmatter.author}</p>
                                {frontmatter.date && <p className="text-xs text-slate-500">{frontmatter.date}</p>}
                            </div>
                        </div>
                    )}
                </div>

                <div
                    className="relative mb-16 group cursor-zoom-in"
                    onClick={() => openLightbox(frontmatter.heroImage, frontmatter.title)}
                >
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-accent-cyan opacity-20 blur transition duration-500 group-hover:opacity-40"></div>
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-background-light border border-white/10 shadow-2xl">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${frontmatter.heroImage}")` }}></div>
                    </div>
                </div>

                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:text-accent-purple prose-img:rounded-xl">
                    <ReactMarkdown
                        components={{
                            img: ({ src, alt, ...props }) => (
                                <img
                                    {...props}
                                    src={src}
                                    alt={alt || ''}
                                    className="rounded-xl cursor-zoom-in hover:opacity-90 transition-opacity"
                                    onClick={() => openLightbox(src || '', alt || '')}
                                />
                            ),
                        }}
                    >
                        {content}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
