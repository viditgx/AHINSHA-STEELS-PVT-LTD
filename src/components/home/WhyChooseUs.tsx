import { Award, ShieldCheck, Truck, Users, BadgePercent, HeartHandshake } from "lucide-react";
import { whyChooseUs } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Award,
  ShieldCheck,
  Truck,
  Users,
  BadgePercent,
  HeartHandshake,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="section-title">What Sets Us Apart</h2>
          <p className="section-subtitle mx-auto text-center">
            We combine decades of expertise, cutting-edge technology, and unwavering commitment to quality to deliver steel solutions you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, idx) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={idx}
                className="card p-8 group cursor-default"
              >
                <div className="w-14 h-14 bg-accent/10 group-hover:bg-accent rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon size={26} className="text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-lg text-primary dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-steel dark:text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
