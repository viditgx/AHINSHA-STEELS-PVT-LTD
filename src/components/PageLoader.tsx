"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary-900 transition-all duration-500",
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-2xl font-heading shadow-lg">
          AS
        </div>
        <div>
          <div className="text-white font-bold font-heading text-2xl">Ahinsha Steels</div>
          <div className="text-slate-400 text-sm">Pvt. Ltd.</div>
        </div>
      </div>
      <div className="loader" />
      <p className="text-slate-400 text-sm mt-4 animate-pulse">Loading...</p>
    </div>
  );
}
