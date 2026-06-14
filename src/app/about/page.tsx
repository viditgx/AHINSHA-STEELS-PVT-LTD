import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Target, Eye, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ahinsha Steels Pvt. Ltd. – our history, mission, vision, core values, and why we are a trusted steel manufacturer in Kasganj, Uttar Pradesh.",
};

const values = [
  { icon: "🏆", title: "Quality", desc: "We never compromise on the quality of our products. Every batch is tested and certified before dispatch." },
  { icon: "🤝", title: "Integrity", desc: "Transparent dealings, honest pricing, and ethical business practices are at our core." },
  { icon: "⚡", title: "Reliability", desc: "From order placement to delivery, we are known for our dependability and consistency." },
  { icon: "🌱", title: "Sustainability", desc: "We adopt eco-friendly manufacturing practices to minimize our environmental footprint." },
];

const milestones = [
  { year: "2014", title: "Company Founded", desc: "Ahinsha Steels Pvt. Ltd. established in Kasganj, UP." },
  { year: "2016", title: "BIS Certification", desc: "Received BIS certification for steel products." },
  { year: "2018", title: "Production Expansion", desc: "Doubled production capacity with new machinery." },
  { year: "2020", title: "500+ Clients Milestone", desc: "Crossed 500 satisfied customers across North India." },
  { year: "2022", title: "ISO 9001:2015", desc: "Achieved ISO 9001:2015 quality management certification." },
  { year: "2024", title: "Pan-India Reach", desc: "Extended delivery and supply network across India." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-primary-900/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <div className="inline-block bg-accent/20 text-accent border border-accent/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            About Us
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Story & Values</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Discover the people, principles, and passion behind Ahinsha Steels Pvt. Ltd.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-400">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About</span>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Company Overview
            </div>
            <h2 className="section-title">Strength in Every Strand of Steel</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Ahinsha Steels Pvt. Ltd. is a trusted steel manufacturing and supply company based in Kasganj,
              Uttar Pradesh. Founded with a mission to deliver superior quality steel products, we have
              grown to become one of the region&apos;s most reliable steel suppliers.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Over more than a decade, we have served hundreds of clients across construction,
              infrastructure, manufacturing, and industrial sectors. Our commitment to quality,
              timely delivery, and customer satisfaction has earned us the trust of contractors,
              engineers, and builders across North India.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              With state-of-the-art manufacturing equipment and a team of experienced professionals,
              we ensure that every product meets the highest national and international standards.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "ISO 9001:2015 Certified",
                "BIS Standard Products",
                "IS 2062 & IS 1786 Compliant",
                "In-house testing lab",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
              alt="Ahinsha Steels Manufacturing"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="card p-10">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
              <Target size={28} className="text-accent" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-primary dark:text-white mb-4">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg italic border-l-4 border-accent pl-4">
              &ldquo;To provide superior quality steel products with integrity and customer satisfaction,
              contributing to the growth and development of India&apos;s infrastructure.&rdquo;
            </p>
          </div>
          <div className="card p-10">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
              <Eye size={28} className="text-accent" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-primary dark:text-white mb-4">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg italic border-l-4 border-accent pl-4">
              &ldquo;To become one of the most trusted and innovative steel companies in India, setting
              benchmarks in quality, sustainability, and customer service.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Core Values
            </div>
            <h2 className="section-title">What Drives Us Every Day</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="card p-8 text-center group hover:bg-primary hover:text-white">
                <div className="text-5xl mb-5">{v.icon}</div>
                <h3 className="font-heading font-bold text-xl text-primary dark:text-white group-hover:text-white mb-3">
                  {v.title}
                </h3>
                <p className="text-steel dark:text-slate-400 group-hover:text-slate-200 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Our Journey
            </div>
            <h2 className="section-title">Milestones That Define Us</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="hidden md:flex w-16 h-16 bg-accent text-white rounded-full items-center justify-center font-bold font-heading text-sm shrink-0 shadow-lg z-10">
                    {m.year}
                  </div>
                  <div className="card p-6 flex-1">
                    <div className="md:hidden text-accent font-bold font-heading text-sm mb-1">{m.year}</div>
                    <h3 className="font-heading font-bold text-lg text-primary dark:text-white mb-1">{m.title}</h3>
                    <p className="text-steel dark:text-slate-400 text-sm">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading mb-4">Partner with Ahinsha Steels Today</h2>
          <p className="text-slate-300 mb-8">
            Join 500+ satisfied clients who trust us for their steel requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary flex items-center gap-2">
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link href="/products" className="border-2 border-white/60 hover:bg-white hover:text-primary text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
