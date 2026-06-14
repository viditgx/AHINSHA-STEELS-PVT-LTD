import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import PageLoader from "@/components/PageLoader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Ahinsha Steels Pvt. Ltd. | Premium Steel Products in Kasganj, UP",
    template: "%s | Ahinsha Steels Pvt. Ltd.",
  },
  description:
    "Ahinsha Steels Pvt. Ltd. is a trusted steel manufacturing and supply company in Kasganj, Uttar Pradesh. We supply TMT Bars, Structural Steel, Steel Sheets, and more.",
  keywords: [
    "steel company kasganj",
    "TMT bars kasganj",
    "steel manufacturer uttar pradesh",
    "structural steel supplier",
    "Ahinsha Steels",
    "steel rods kasganj",
  ],
  authors: [{ name: "Ahinsha Steels Pvt. Ltd." }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ahinsha-steels.com",
    siteName: "Ahinsha Steels Pvt. Ltd.",
    title: "Ahinsha Steels Pvt. Ltd. | Premium Steel Products",
    description: "Quality steel manufacturing and supply in Kasganj, Uttar Pradesh.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body>
        <PageLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <ScrollToTop />
      </body>
    </html>
  );
}
