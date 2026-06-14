"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Send, X, ChevronRight, Loader2 } from "lucide-react";
import { products } from "@/lib/data";

const categories = ["All", "Structural", "Flat Products", "Custom"];

interface InquiryProduct {
  name: string;
}

function InquiryModal({ product, onClose }: { product: InquiryProduct; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = {
      name: (form.querySelector('[name="name"]') as HTMLInputElement).value,
      phone: (form.querySelector('[name="phone"]') as HTMLInputElement).value,
      email: (form.querySelector('[name="email"]') as HTMLInputElement).value,
      message: (form.querySelector('[name="message"]') as HTMLTextAreaElement).value,
      product: product.name,
      type: "product",
    };
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.error);
      setSubmitted(true);
      setTimeout(() => { onClose(); }, 2000);
    } catch {
      setError("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md p-8">
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-red-100 hover:text-red-500 transition-colors">
          <X size={16} />
        </button>
        <h2 className="text-xl font-bold font-heading text-primary dark:text-white mb-1">Product Inquiry</h2>
        <p className="text-steel text-sm mb-6">Inquiring about: <strong>{product.name}</strong></p>

        {submitted ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-3">✅</div>
            <p className="text-green-600 font-semibold">Inquiry Sent Successfully!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-3 py-2 rounded-lg">{error}</div>}
            <input required name="name" type="text" placeholder="Your Name *" className="w-full border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-slate-700 dark:text-white" />
            <input required name="phone" type="tel" placeholder="Phone Number *" className="w-full border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-slate-700 dark:text-white" />
            <input name="email" type="email" placeholder="Email Address" className="w-full border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-slate-700 dark:text-white" />
            <textarea name="message" rows={3} placeholder="Quantity & requirements..." className="w-full border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none bg-white dark:bg-slate-700 dark:text-white" />
            <button disabled={loading} type="submit" className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70">
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {loading ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [filter, setFilter] = useState("All");
  const [inquiry, setInquiry] = useState<InquiryProduct | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-primary-900/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <div className="inline-block bg-accent/20 text-accent border border-accent/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Our Products</div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Premium Steel Products</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of steel products engineered for strength and durability.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-400">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Products</span>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                  filter === cat
                    ? "bg-accent text-white shadow-lg"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-accent/10 hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filtered.map((product) => (
              <div key={product.id} id={product.slug} className="card overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-60 h-52 md:h-auto shrink-0 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 240px"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-xl text-primary dark:text-white mb-2">
                        {product.name}
                      </h3>
                      <p className="text-steel dark:text-slate-400 text-sm mb-4 leading-relaxed">
                        {product.description}
                      </p>

                      {expanded === product.id && (
                        <div className="mt-3 space-y-3 text-sm">
                          <div>
                            <p className="font-semibold text-primary dark:text-white mb-1">Specifications:</p>
                            <ul className="space-y-1">
                              {product.specs.map((s) => (
                                <li key={s} className="flex items-center gap-2 text-steel dark:text-slate-400">
                                  <ChevronRight size={12} className="text-accent" />{s}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-primary dark:text-white mb-1">Features:</p>
                            <div className="flex flex-wrap gap-2">
                              {product.features.map((f) => (
                                <span key={f} className="flex items-center gap-1 text-xs bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full">
                                  <CheckCircle2 size={10} />{f}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="font-semibold text-primary dark:text-white mb-1">Applications:</p>
                            <div className="flex flex-wrap gap-2">
                              {product.applications.map((a) => (
                                <span key={a} className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded-full">
                                  {a}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3 mt-5">
                      <button
                        onClick={() => setExpanded(expanded === product.id ? null : product.id)}
                        className="text-sm text-accent font-semibold hover:underline"
                      >
                        {expanded === product.id ? "Show Less" : "View Details"}
                      </button>
                      <button
                        onClick={() => setInquiry(product)}
                        className="btn-primary text-sm py-2 px-4 flex items-center gap-2"
                      >
                        <Send size={14} /> Send Inquiry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {inquiry && <InquiryModal product={inquiry} onClose={() => setInquiry(null)} />}
    </>
  );
}
