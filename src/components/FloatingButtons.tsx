"use client";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 left-4 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/917678284818?text=Hello%2C%20I%20am%20interested%20in%20your%20steel%20products."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group"
      >
        <MessageCircle size={22} />
        <span className="text-sm font-semibold hidden sm:inline">WhatsApp Us</span>
      </a>

      {/* Call */}
      <a
        href="tel:+917678284818"
        aria-label="Call Us"
        className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
      >
        <Phone size={22} />
        <span className="text-sm font-semibold hidden sm:inline">Call Us</span>
      </a>
    </div>
  );
}
