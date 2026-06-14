import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProductsPreview from "@/components/home/ProductsPreview";
import IndustriesSection from "@/components/home/IndustriesSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import BlogPreview from "@/components/home/BlogPreview";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Ahinsha Steels Pvt. Ltd. | Strength, Quality, and Trust in Every Steel Product",
  description:
    "Ahinsha Steels Pvt. Ltd. – A trusted steel manufacturing and supply company in Kasganj, Uttar Pradesh. TMT Bars, Structural Steel, Steel Sheets, and more.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <ProductsPreview />
      <IndustriesSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogPreview />
      <CTASection />
    </>
  );
}
