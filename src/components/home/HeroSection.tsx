"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

export default function HeroSection() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/80 to-primary-700/60" />

        {/* Steel texture pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              India&apos;s Trusted Steel Manufacturer
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold font-heading leading-tight mb-6">
              Ahinsha Steels
              <span className="block text-accent">Pvt. Ltd.</span>
            </h1>

            <p className="text-2xl md:text-3xl font-semibold text-slate-200 mb-4 font-heading italic">
              &ldquo;Strength, Quality, and Trust in Every Steel Product&rdquo;
            </p>

            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
              A trusted steel manufacturing and supply company based in Kasganj, Uttar Pradesh,
              delivering high-quality steel products to construction, infrastructure, and industrial sectors.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setQuoteOpen(true)}
                className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-accent/30 hover:shadow-xl transform hover:-translate-y-1"
              >
                Get a Quote <ArrowRight size={20} />
              </button>
              <Link
                href="/contact"
                className="flex items-center gap-2 border-2 border-white/70 text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>

            {/* Stats bar */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/20">
              {[
                { value: "10+", label: "Years" },
                { value: "500+", label: "Clients" },
                { value: "1000+", label: "Projects" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-accent font-heading">{s.value}</div>
                  <div className="text-slate-400 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-white">
              <h3 className="font-heading font-bold text-xl mb-6 text-accent">Quick Inquiry</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-accent text-sm"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-accent text-sm"
                />
                <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent text-sm">
                  <option value="" className="text-slate-800">Select Product</option>
                  <option className="text-slate-800">TMT Bars</option>
                  <option className="text-slate-800">Steel Rods</option>
                  <option className="text-slate-800">Structural Steel</option>
                  <option className="text-slate-800">Steel Sheets</option>
                  <option className="text-slate-800">Angles & Channels</option>
                  <option className="text-slate-800">Custom Products</option>
                </select>
                <textarea
                  rows={3}
                  placeholder="Your requirements..."
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-accent text-sm resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors flex flex-col items-center gap-1 text-xs"
        >
          <span>Scroll Down</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </section>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
