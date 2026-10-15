import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllSlugs, getPostBySlug } from '../../../lib/blog';
import DownloadButtons from '../../../components/DownloadButtons';
import JsonLd from '../../../components/JsonLd';
import {
  absoluteUrl,
  FOUNDER_NAME,
  OG_IMAGE,
  ORGANIZATION_NAME,
  SITE_NAME,
} from '../../../lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const path = `/blog/${encodeURIComponent(post.slug)}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: path },
    robots: post.isStub ? { index: false, follow: false } : undefined,
    authors: [{ name: post.author }],
    openGraph: {
      type: 'article',
      siteName: SITE_NAME,
      title: post.title,
      description: post.excerpt,
      url: path,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const postUrl = absoluteUrl(`/blog/${encodeURIComponent(post.slug)}`);
  // The page already has one H1 (the post title), so body-level H1s become H2s.
  const bodyHtml = post.contentHtml.replace(/<(\/?)h1(?=[\s>])/g, '<$1h2');
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      dateModified: post.date,
      keywords: post.tags.join(', '),
      image: absoluteUrl(OG_IMAGE.url),
      mainEntityOfPage: postUrl,
      url: postUrl,
      author: { '@type': 'Person', name: post.author || FOUNDER_NAME },
      publisher: { '@type': 'Organization', name: ORGANIZATION_NAME, url: absoluteUrl('/') },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: SITE_NAME, item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: absoluteUrl('/blog') },
        { '@type': 'ListItem', position: 3, name: post.title, item: postUrl },
      ],
    },
  ];

  return (
    <div style={{ width: '100%', paddingTop: '80px' }}>
      {!post.isStub && <JsonLd data={structuredData} />}
      <article style={{ padding: 'clamp(2.5rem, 6vw, 4rem) 0 clamp(3rem, 6vw, 5rem)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <Link
            href="/blog"
            style={{ color: 'var(--accent)', fontSize: '0.9375rem', display: 'inline-block', marginBottom: '2rem' }}
          >
            ← Back to Blog
          </Link>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  background: 'rgba(212, 222, 149, 0.12)',
                  border: '1px solid rgba(212, 222, 149, 0.2)',
                  borderRadius: '9999px',
                  padding: '0.25rem 0.75rem',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 'bold',
              lineHeight: 1.25,
              color: 'white',
              marginBottom: '1.25rem',
            }}
          >
            {post.title}
          </h1>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              color: '#a0a0a0',
              fontSize: '0.9375rem',
              paddingBottom: '2rem',
              marginBottom: '2rem',
              borderBottom: '1px solid rgba(212, 222, 149, 0.12)',
            }}
          >
            <span>{post.author}</span>
            <span>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readTime} min read</span>
          </div>

          {/* Trusted content: rendered from markdown files in content/blog/, authored only via this repo — not user-submitted input. */}
          <div className="post-body" dangerouslySetInnerHTML={{ __html: bodyHtml }} />

          <div
            style={{
              marginTop: 'clamp(3rem, 6vw, 4rem)',
              padding: 'clamp(2rem, 4vw, 2.5rem)',
              borderRadius: '1.5rem',
              background: 'linear-gradient(145deg, rgba(60, 60, 60, 0.4), rgba(30, 30, 30, 0.4))',
              border: '1px solid rgba(212, 222, 149, 0.2)',
              textAlign: 'center',
            }}
          >
            <h3 style={{ color: 'white', fontSize: '1.375rem', marginBottom: '0.5rem' }}>Ready to build who you're becoming?</h3>
            <p style={{ color: '#a0a0a0', marginBottom: '1.5rem' }}>Download Keystone and start today.</p>
            <DownloadButtons size="section" />
          </div>
        </div>
      </article>
    </div>
  );
}
