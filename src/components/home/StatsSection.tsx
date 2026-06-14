"use client";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-5xl font-bold font-heading text-white">
      {count}
      <span className="text-accent">{suffix}</span>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-primary-900/92" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-accent/30">
            Our Achievements
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Numbers That Tell Our Story
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-slate-300 mt-3 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
