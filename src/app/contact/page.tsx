"use client";
import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    lines: ["Ahinsha Steels Pvt. Ltd.", "Kasganj, Uttar Pradesh, India – 207123"],
  },
  {
    icon: Phone,
    title: "Phone Number",
    lines: ["+91 76782 84818"],
    href: "tel:+917678284818",
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: ["info@ahinsha-steels.com", "sales@ahinsha-steels.com"],
    href: "mailto:info@ahinsha-steels.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday – Saturday: 9:00 AM – 6:00 PM", "Sunday: Closed"],
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-primary-900/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <div className="inline-block bg-accent/20 text-accent border border-accent/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Contact Us</div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Get in Touch</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Our team is ready to help you with the best steel solutions.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-400">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <div key={idx} className="card p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-primary dark:text-white mb-2">{info.title}</h3>
                {info.lines.map((line, i) => (
                  info.href && i === 0 ? (
                    <a key={i} href={info.href} className="block text-sm text-steel dark:text-slate-400 hover:text-accent transition-colors">{line}</a>
                  ) : (
                    <p key={i} className="text-sm text-steel dark:text-slate-400">{line}</p>
                  )
                ))}
              </div>
            );
          })}
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <div className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Send Us a Message
            </div>
            <h2 className="section-title mb-8">We&apos;d Love to Hear from You</h2>

            {submitted ? (
              <div className="card p-10 text-center">
                <CheckCircle2 size={64} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-heading text-primary dark:text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-steel dark:text-slate-400 mb-6">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-primary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">Name *</label>
                    <input required type="text" placeholder="Your full name" className="w-full border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-slate-700 dark:text-white" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">Phone *</label>
                    <input required type="tel" placeholder="+91 XXXXX XXXXX" className="w-full border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-slate-700 dark:text-white" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">Email</label>
                  <input type="email" placeholder="your@email.com" className="w-full border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-slate-700 dark:text-white" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">Subject</label>
                  <select className="w-full border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-slate-700 dark:text-white">
                    <option>Product Inquiry</option>
                    <option>Get a Quote</option>
                    <option>Bulk Order</option>
                    <option>Custom Requirements</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">Message *</label>
                  <textarea required rows={5} placeholder="Describe your requirements in detail..." className="w-full border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none bg-white dark:bg-slate-700 dark:text-white" />
                </div>
                <div className="flex gap-4">
                  <button type="submit" className="btn-primary flex items-center gap-2">
                    <Send size={16} /> Send Inquiry
                  </button>
                  <a
                    href="https://wa.me/917678284818"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Map */}
          <div>
            <div className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Find Us
            </div>
            <h2 className="section-title mb-8">Our Location</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56814.7!2d78.6456!3d27.8087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974827e0c3f9b35%3A0x6ac09d4f97bb5c07!2sKasganj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ahinsha Steels Location"
              />
            </div>
            <div className="mt-6 p-5 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <h4 className="font-semibold text-primary dark:text-white mb-2">Ahinsha Steels Pvt. Ltd.</h4>
              <p className="text-sm text-steel dark:text-slate-400">Kasganj, Uttar Pradesh, India – 207123</p>
              <a href="https://maps.google.com/?q=Kasganj,UP,India" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent text-sm font-semibold mt-2 hover:underline">
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
