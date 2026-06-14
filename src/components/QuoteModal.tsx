"use client";
import { useState } from "react";
import { X, Send, Loader2 } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.querySelector('[name="name"]') as HTMLInputElement).value,
      phone: (form.querySelector('[name="phone"]') as HTMLInputElement).value,
      email: (form.querySelector('[name="email"]') as HTMLInputElement).value,
      product: (form.querySelector('[name="product"]') as HTMLSelectElement).value,
      message: (form.querySelector('[name="message"]') as HTMLTextAreaElement).value,
      type: "quote",
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
      setTimeout(() => { setSubmitted(false); onClose(); }, 2500);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-lg p-8 animate-slide-up">
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-red-100 hover:text-red-500 transition-colors">
          <X size={16} />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold font-heading text-primary dark:text-white">Request a Quote</h2>
          <p className="text-steel text-sm mt-1">Fill out the form and our team will contact you shortly.</p>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✅</span>
            </div>
            <p className="text-green-600 font-semibold text-lg">Quote Request Sent!</p>
            <p className="text-steel text-sm mt-1">We&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-2 rounded-lg">{error}</div>}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1">Name *</label>
                <input required name="name" type="text" placeholder="Your Name" className="w-full border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-slate-700 dark:text-white" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1">Phone *</label>
                <input required name="phone" type="tel" placeholder="Phone Number" className="w-full border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-slate-700 dark:text-white" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1">Email</label>
              <input name="email" type="email" placeholder="email@example.com" className="w-full border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-slate-700 dark:text-white" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1">Product Required *</label>
              <select required name="product" className="w-full border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-slate-700 dark:text-white">
                <option value="">Select Product</option>
                <option>TMT Bars</option>
                <option>Steel Rods</option>
                <option>Structural Steel</option>
                <option>Steel Sheets</option>
                <option>Angles &amp; Channels</option>
                <option>Custom Steel Products</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1">Message</label>
              <textarea name="message" rows={3} placeholder="Tell us about your requirements..." className="w-full border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none bg-white dark:bg-slate-700 dark:text-white" />
            </div>
            <button disabled={loading} type="submit" className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70">
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {loading ? "Sending..." : "Send Quote Request"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
