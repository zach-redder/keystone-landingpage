'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { BlogPostMeta } from '../lib/blog';

const COVER_GRADIENTS = [
  'linear-gradient(135deg, rgba(212, 222, 149, 0.35) 0%, rgba(42, 42, 42, 0.95) 60%)',
  'linear-gradient(135deg, rgba(240, 245, 168, 0.28) 0%, rgba(30, 30, 30, 0.95) 60%)',
  'linear-gradient(135deg, rgba(180, 200, 120, 0.3) 0%, rgba(24, 24, 24, 0.95) 60%)',
];

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function PostCover({ index }: { index: number }) {
  return (
    <div
      className="post-cover"
      style={{
        background: COVER_GRADIENTS[index % COVER_GRADIENTS.length],
        borderRadius: '1rem 1rem 0 0',
        height: '160px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Abstract "keystone" wedge motif — brand-relevant, not a stock photo */}
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none" style={{ opacity: 0.5 }}>
        <path
          d="M26 12h20l8 48H18l8-48z"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="rgba(212, 222, 149, 0.08)"
        />
      </svg>
    </div>
  );
}

export default function BlogSearch({ posts }: { posts: BlogPostMeta[] }) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter((post) => {
      const haystack = [post.title, post.excerpt, ...post.tags].join(' ').toLowerCase();
      return haystack.includes(q);
    });
  }, [posts, query]);

  return (
    <div>
      <div
        className="search-bar"
        style={{
          position: 'relative',
          maxWidth: '480px',
          margin: '0 auto clamp(2.5rem, 5vw, 3.5rem)',
        }}
      >
        <Search
          size={18}
          color="#a0a0a0"
          style={{ position: 'absolute', left: '1.1rem', top: '50%', transform: 'translateY(-50%)', zIndex: 1, pointerEvents: 'none' }}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles..."
          aria-label="Search blog posts"
          style={{
            width: '100%',
            padding: '0.9rem 1rem 0.9rem 2.75rem',
            borderRadius: '9999px',
            background: 'rgba(47, 47, 47, 0.8)',
            border: '1px solid rgba(212, 222, 149, 0.2)',
            color: 'white',
            fontSize: '1rem',
            outline: 'none',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = 'rgba(212, 222, 149, 0.5)';
            e.target.style.boxShadow = '0 0 0 3px rgba(212, 222, 149, 0.1)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'rgba(212, 222, 149, 0.2)';
            e.target.style.boxShadow = 'none';
          }}
        />
      </div>

      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#a0a0a0' }}>
          <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>No articles match &quot;{query}&quot;.</p>
          <p style={{ fontSize: '0.95rem' }}>Try a different search term.</p>
        </div>
      ) : (
        <div
          className="post-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
          }}
        >
          {filtered.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card post-card"
              style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', textDecoration: 'none' }}
            >
              <PostCover index={index} />
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        color: 'var(--accent)',
                        background: 'rgba(212, 222, 149, 0.12)',
                        border: '1px solid rgba(212, 222, 149, 0.2)',
                        borderRadius: '9999px',
                        padding: '0.2rem 0.65rem',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', lineHeight: 1.35 }}>
                  {post.title}
                </h3>
                <p style={{ color: '#a0a0a0', fontSize: '0.9375rem', lineHeight: 1.6, flex: 1 }}>{post.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#777777', fontSize: '0.8125rem', marginTop: '0.5rem' }}>
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <style jsx global>{`
        .post-card {
          color: inherit;
        }
        .post-card:hover .post-cover svg {
          transform: scale(1.08);
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
}
