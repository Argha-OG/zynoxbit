import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogs';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const BlogPost = () => {
    const { slug } = useParams();
    const post = BLOG_POSTS.find(p => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <>
            <Helmet>
                <title>{post.title} | ZynoxBit</title>
                <meta name="description" content={post.excerpt} />
            </Helmet>

            <div className="py-24 px-4 max-w-3xl mx-auto">
                <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Blog
                </Link>

                <article className="prose prose-lg dark:prose-invert max-w-none">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-12 border-b border-border pb-8">
                        <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
                        <span className="flex items-center gap-2"><User size={16} /> {post.author}</span>
                    </div>

                    <div
                        className="blog-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </div>
        </>
    );
};

export default BlogPost;
