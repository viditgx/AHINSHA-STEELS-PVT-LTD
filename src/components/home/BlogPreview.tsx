import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    slug: "tmt-bars-guide",
    title: "The Complete Guide to TMT Bars: Grades, Sizes, and Uses",
    excerpt: "TMT (Thermo-Mechanically Treated) bars are the backbone of modern construction. Learn about different grades, sizes, and how to choose the right one.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    date: "June 5, 2026",
    readTime: "5 min read",
    category: "Education",
  },
  {
    slug: "structural-steel-types",
    title: "Understanding Structural Steel: Beams, Columns, and More",
    excerpt: "Explore the different types of structural steel sections and how each is used in construction and industrial applications.",
    image: "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=600&q=80",
    date: "May 28, 2026",
    readTime: "4 min read",
    category: "Products",
  },
  {
    slug: "steel-market-trends-2026",
    title: "Steel Market Trends in India: What to Expect in 2026",
    excerpt: "India's steel sector is seeing remarkable growth driven by infrastructure projects. Here's what the market data shows for 2026.",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&q=80",
    date: "May 20, 2026",
    readTime: "6 min read",
    category: "Industry News",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Blog & News
            </div>
            <h2 className="section-title !mb-0">Latest Insights</h2>
          </div>
          <Link href="/blog" className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="card overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-steel dark:text-slate-400 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                </div>
                <h3 className="font-heading font-bold text-base text-primary dark:text-white mb-3 line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-steel dark:text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
