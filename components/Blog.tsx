'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { CalendarDays } from 'lucide-react';

const blogPosts = [
  {
    title: '5 Legal Mistakes Small Businesses Make',
    excerpt:
      'From ignoring contracts to misclassifying employees — avoid these costly pitfalls as a Nigerian entrepreneur.',
    slug: '/blog/legal-mistakes-small-business',
    date: 'June 20, 2025',
  },
  {
    title: 'Recent Changes in Nigerian Property Law',
    excerpt:
      'Learn how the Land Use Act reforms impact your rights as a landlord or tenant in 2025.',
    slug: '/blog/property-law-update-2025',
    date: 'June 10, 2025',
  },
  {
    title: 'Understanding Child Custody in Nigerian Courts',
    excerpt:
      'Gain clarity on custody arrangements, visitation rights, and how courts decide what’s best for the child.',
    slug: '/blog/child-custody-nigeria',
    date: 'May 28, 2025',
  },
];

export default function Blog() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-20 bg-[var(--card)] text-[var(--foreground)] px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold">Legal Insights & Blog</h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)] max-w-3xl mx-auto">
            Practical legal tips, updates on case law, and expert commentary on Nigeria’s evolving legal landscape.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
          {blogPosts.map((post, index) => (
            <Link
              href={post.slug}
              key={index}
              className="block border border-[var(--border)] rounded-xl p-5 bg-[var(--background)] hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-[var(--primary)] mb-2">{post.title}</h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center text-xs text-[var(--muted-foreground)]">
                <CalendarDays className="w-4 h-4 mr-2" />
                {post.date}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
