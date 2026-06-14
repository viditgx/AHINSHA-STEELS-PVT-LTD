import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

const highlights = [
  "ISO certified quality management",
  "10+ years of industry excellence",
  "Serving 500+ satisfied clients",
  "BIS & IS standard compliant products",
  "State-of-the-art manufacturing facility",
  "Pan-India delivery network",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        {/* Images */}
        <div className="relative">
          <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=800&q=80"
              alt="Ahinsha Steels Factory"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-accent text-white rounded-2xl p-6 shadow-xl">
            <div className="text-4xl font-bold font-heading">10+</div>
            <div className="text-sm font-medium opacity-90">Years of Excellence</div>
          </div>
          {/* Small overlay image */}
          <div className="absolute top-8 -left-8 w-36 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=300&q=80"
              alt="Steel products"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            About Our Company
          </div>
          <h2 className="section-title">
            A Legacy of Steel Excellence in Kasganj
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            Ahinsha Steels Pvt. Ltd. is a trusted steel manufacturing and supply company based in
            Kasganj, Uttar Pradesh. We are committed to delivering high-quality steel products
            that meet industry standards and customer expectations.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            With a focus on strength, reliability, and customer satisfaction, we serve construction,
            infrastructure, and industrial sectors across India. Our state-of-the-art facility
            and experienced team ensure that every product leaving our plant is a testament to
            our commitment to quality.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-accent shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <Link href="/about" className="btn-primary flex items-center gap-2">
              Learn More <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="border-2 border-primary text-primary dark:border-white dark:text-white hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
