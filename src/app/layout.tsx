import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import PageLoader from "@/components/PageLoader";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
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
