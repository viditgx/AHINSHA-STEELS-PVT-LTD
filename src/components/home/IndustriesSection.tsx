import { Building2, Landmark, Factory, Cog, Home, Layers } from "lucide-react";
import { industries } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Building2, Landmark, Factory, Cog, Home, Layers,
};

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Industries We Serve
          </div>
          <h2 className="section-title">Powering Every Sector</h2>
          <p className="section-subtitle mx-auto text-center">
            Our steel products are trusted across diverse industries, supporting India&apos;s growth story.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((ind, idx) => {
            const Icon = iconMap[ind.icon];
            return (
              <div
                key={idx}
                className="card p-6 text-center group hover:bg-primary hover:text-white cursor-default"
              >
                <div className="w-14 h-14 bg-accent/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <Icon size={28} className="text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-sm text-primary dark:text-white group-hover:text-white">
                  {ind.name}
                </h3>
                <p className="text-xs text-steel dark:text-slate-400 group-hover:text-slate-300 mt-1 leading-relaxed hidden sm:block">
                  {ind.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
