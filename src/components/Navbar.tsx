"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white dark:bg-slate-900 shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      {/* Top bar */}
      <div className="hidden md:block bg-primary-900 text-white py-1.5 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-slate-300">📍 Kasganj, Uttar Pradesh, India</span>
          <div className="flex items-center gap-4">
            <a href="tel:+917678284818" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone size={14} />
              <span>+91 76782 84818</span>
            </a>
            <span className="text-slate-400">|</span>
            <a href="mailto:info@ahinsha-steels.com" className="hover:text-accent transition-colors">
              info@ahinsha-steels.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-lg font-heading">
            AS
          </div>
          <div>
            <div className={cn("font-bold font-heading text-lg leading-tight transition-colors",
              scrolled ? "text-primary-900" : "text-white"
            )}>
              Ahinsha Steels
            </div>
            <div className={cn("text-xs leading-tight transition-colors",
              scrolled ? "text-steel" : "text-slate-300"
            )}>
              Pvt. Ltd.
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-medium text-sm transition-colors duration-200 hover:text-accent",
                pathname === link.href ? "text-accent" : scrolled ? "text-slate-700" : "text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className="btn-primary text-sm py-2 px-5">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("lg:hidden p-2 rounded-lg transition-colors", scrolled ? "text-primary" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-200 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "py-3 px-4 rounded-lg font-medium transition-colors",
                  pathname === link.href
                    ? "bg-accent text-white"
                    : "text-slate-700 hover:bg-slate-100"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-primary text-center mt-2">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
