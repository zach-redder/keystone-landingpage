import { Metadata } from 'next';
import { getAllPosts } from '../../lib/blog';
import BlogSearch from '../../components/BlogSearch';

export const metadata: Metadata = {
  title: 'Blog — Keystone',
  description: 'Ideas on identity, discipline, and becoming who you say you want to be — from the team building Keystone.',
  openGraph: {
    title: 'Blog — Keystone',
    description: 'Ideas on identity, discipline, and becoming who you say you want to be — from the team building Keystone.',
    url: 'https://thekeystoneapp.com/blog',
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div style={{ width: '100%', paddingTop: '80px' }}>
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 0 clamp(2rem, 5vw, 3rem)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
            <h1
              style={{
                fontSize: 'clamp(2.25rem, 6vw, 4rem)',
                fontWeight: 'bold',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, var(--accent) 0%, #f0f5a8 50%, var(--accent) 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 20px rgba(212, 222, 149, 0.2)',
              }}
            >
              The Keystone Blog
            </h1>
            <p
              style={{
                color: '#e0e0e0',
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                maxWidth: '650px',
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              Ideas on identity, discipline, and becoming who you say you want to be.
            </p>
          </div>

          <BlogSearch posts={posts} />
        </div>
      </section>
    </div>
  );
}
