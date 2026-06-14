"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

export default function CTASection() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/97 via-primary-900/90 to-accent/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-5">
            Ready to Start Your Project?
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Get premium quality steel products delivered to your site. Contact us today for a
            competitive quote and expert advice from our experienced team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setQuoteOpen(true)}
              className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Request a Quote <ArrowRight size={20} />
            </button>
            <a
              href="https://wa.me/917678284818"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={20} /> WhatsApp Us
            </a>
            <a
              href="tel:+917678284818"
              className="flex items-center gap-2 border-2 border-white/70 text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              <Phone size={20} /> Call Now
            </a>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
