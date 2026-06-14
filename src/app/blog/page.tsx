import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & News",
  description:
    "Stay updated with the latest news, insights, and guides from Ahinsha Steels Pvt. Ltd. on steel manufacturing, products, and industry trends.",
};

const posts = [
  {
    slug: "tmt-bars-guide",
    title: "The Complete Guide to TMT Bars: Grades, Sizes, and Uses",
    excerpt: "TMT (Thermo-Mechanically Treated) bars are the backbone of modern construction. Learn about different grades, sizes, and how to choose the right one for your project.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    date: "June 5, 2026",
    readTime: "5 min read",
    category: "Education",
    featured: true,
  },
  {
    slug: "structural-steel-types",
    title: "Understanding Structural Steel: Beams, Columns, and Sections",
    excerpt: "Explore the different types of structural steel sections and how each is used in construction and industrial applications. A must-read for every engineer.",
    image: "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=800&q=80",
    date: "May 28, 2026",
    readTime: "4 min read",
    category: "Products",
    featured: false,
  },
  {
    slug: "steel-market-trends-2026",
    title: "Steel Market Trends in India: What to Expect in 2026",
    excerpt: "India's steel sector is seeing remarkable growth driven by government infrastructure projects. Here's an analysis of market trends and what they mean for buyers.",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80",
    date: "May 20, 2026",
    readTime: "6 min read",
    category: "Industry News",
    featured: false,
  },
  {
    slug: "choosing-right-steel",
    title: "How to Choose the Right Steel for Your Construction Project",
    excerpt: "Not all steel is created equal. This guide helps contractors and engineers select the appropriate steel grade, type, and specification for different project requirements.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    date: "May 10, 2026",
    readTime: "7 min read",
    category: "Education",
    featured: false,
  },
  {
    slug: "steel-quality-standards-india",
    title: "Understanding Steel Quality Standards in India: IS, BIS, and More",
    excerpt: "A comprehensive overview of the quality standards that govern steel manufacturing in India, and why compliance matters for safety and performance.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    date: "April 30, 2026",
    readTime: "5 min read",
    category: "Compliance",
    featured: false,
  },
  {
    slug: "sustainable-steel-future",
    title: "The Future of Sustainable Steel Manufacturing in India",
    excerpt: "As environmental concerns grow, Indian steel manufacturers are embracing greener practices. Learn about sustainable innovations reshaping the industry.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    date: "April 20, 2026",
    readTime: "5 min read",
    category: "Sustainability",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-primary-900/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <div className="inline-block bg-accent/20 text-accent border border-accent/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Blog & News</div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Insights & Updates</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Stay informed with industry news, product guides, and expert insights from Ahinsha Steels.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-400">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Blog</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured Post */}
          {featured && (
            <div className="card overflow-hidden mb-12">
              <div className="grid md:grid-cols-2">
                <div className="relative h-72 md:h-auto overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">Featured</span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center gap-1 text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-semibold">
                      <Tag size={12} />{featured.category}
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary dark:text-white mb-4 leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-steel dark:text-slate-400 leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-steel dark:text-slate-400 mb-6">
                    <span className="flex items-center gap-1"><Calendar size={12} />{featured.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{featured.readTime}</span>
                  </div>
                  <Link href={`/blog/${featured.slug}`} className="btn-primary inline-flex items-center gap-2 self-start">
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Rest of Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
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
                    <span className="flex items-center gap-1 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                      <Tag size={10} />{post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-steel dark:text-slate-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-primary dark:text-white mb-3 leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-steel dark:text-slate-400 text-sm mb-5 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all duration-200">
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
