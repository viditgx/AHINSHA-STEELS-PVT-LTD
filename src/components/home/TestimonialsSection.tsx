"use client";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </div>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="relative bg-slate-50 dark:bg-slate-800 rounded-3xl p-10 md:p-14 text-center shadow-lg">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Quote size={28} className="text-accent" />
            </div>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 leading-relaxed mb-8 italic">
              &ldquo;{testimonials[active].content}&rdquo;
            </p>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(testimonials[active].rating)].map((_, i) => (
                <Star key={i} size={20} className="text-accent fill-accent" />
              ))}
            </div>
            <div className="font-heading font-bold text-lg text-primary dark:text-white">
              {testimonials[active].name}
            </div>
            <div className="text-steel dark:text-slate-400 text-sm">{testimonials[active].role}</div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 bg-slate-100 dark:bg-slate-700 hover:bg-accent hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-accent" : "w-2 bg-slate-300 dark:bg-slate-600"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 bg-slate-100 dark:bg-slate-700 hover:bg-accent hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
