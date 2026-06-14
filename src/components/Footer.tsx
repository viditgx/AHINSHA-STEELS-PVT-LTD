import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { navLinks, products } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-lg font-heading">
              AS
            </div>
            <div>
              <div className="font-bold font-heading text-lg leading-tight">Ahinsha Steels</div>
              <div className="text-xs text-slate-400 leading-tight">Pvt. Ltd.</div>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            A trusted steel manufacturing and supply company delivering quality products to construction,
            infrastructure, and industrial sectors across India.
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Facebook, href: "#", label: "Facebook" },
              { Icon: Twitter, href: "#", label: "Twitter" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Youtube, href: "#", label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 bg-slate-700 hover:bg-accent rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading font-semibold text-lg mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-400 hover:text-accent text-sm transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-heading font-semibold text-lg mb-4 text-white">Our Products</h3>
          <ul className="space-y-2">
            {products.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/products#${p.slug}`}
                  className="text-slate-400 hover:text-accent text-sm transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading font-semibold text-lg mb-4 text-white">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-slate-400">
              <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
              <span>Kasganj, Uttar Pradesh, India – 207123</span>
            </li>
            <li>
              <a href="tel:+917678284818" className="flex items-center gap-3 text-sm text-slate-400 hover:text-accent transition-colors">
                <Phone size={18} className="text-accent shrink-0" />
                +91 76782 84818
              </a>
            </li>
            <li>
              <a href="mailto:info@ahinsha-steels.com" className="flex items-center gap-3 text-sm text-slate-400 hover:text-accent transition-colors">
                <Mail size={18} className="text-accent shrink-0" />
                info@ahinsha-steels.com
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-400">
              <span className="text-accent text-lg">🕐</span>
              <span>Mon–Sat: 9:00 AM – 6:00 PM<br />Sunday: Closed</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-slate-500">
          <p>© 2026 Ahinsha Steels Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms of Use</Link>
            <Link href="/sitemap" className="hover:text-accent transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
