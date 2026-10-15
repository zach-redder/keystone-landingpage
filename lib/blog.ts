import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');
const WORDS_PER_MINUTE = 200;

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  author: string;
  readTime: number;
  isStub: boolean;
}

export interface BlogPost extends BlogPostMeta {
  contentHtml: string;
}

function readPostFile(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, 'utf8');
  return matter(raw);
}

// Placeholder posts ("# COMING SOON") must stay out of the sitemap and search index.
function isStubContent(content: string): boolean {
  return /^#\s*coming soon\s*$/i.test(content.trim());
}

function computeReadTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

export function getAllPosts(): BlogPostMeta[] {
  return getAllSlugs()
    .map((slug) => {
      const { data, content } = readPostFile(slug);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        tags: (data.tags as string[]) ?? [],
        author: data.author as string,
        readTime: computeReadTime(content),
        isStub: isStubContent(content),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const { data, content } = readPostFile(slug);
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    tags: (data.tags as string[]) ?? [],
    author: data.author as string,
    readTime: computeReadTime(content),
    isStub: isStubContent(content),
    contentHtml: marked.parse(content, { async: false }) as string,
  };
}
