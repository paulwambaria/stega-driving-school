"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("stega_preloader")) {
      setVisible(false);
      return;
    }
    sessionStorage.setItem("stega_preloader", "1");

    const t1 = setTimeout(() => setFadeOut(true), 2400);
    const t2 = setTimeout(() => setVisible(false), 2900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0F1C3F] transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-white" />

      {/* Glowing blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#DC2626]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-[#1D4DA1]/15 rounded-full blur-2xl" />

      {/* Outer pulse rings */}
      <div className="absolute w-72 h-72 rounded-full border border-[#DC2626]/15 preloader-ring-outer" />
      <div className="absolute w-52 h-52 rounded-full border border-white/8 preloader-ring-inner" />

      {/* Logo card */}
      <div className="relative z-10 preloader-logo-enter">
        <div className="bg-white rounded-2xl px-10 py-6 shadow-2xl shadow-black/50">
          <Image
            src="/images/logo.png"
            alt="Stega Driving School"
            width={220}
            height={130}
            className="h-16 w-auto"
            priority
          />
        </div>
        {/* Red glow under card */}
        <div className="absolute -bottom-3 left-6 right-6 h-6 bg-[#DC2626]/30 blur-xl rounded-full" />
      </div>

      {/* Tagline */}
      <p className="relative z-10 text-white/50 text-[11px] font-bold uppercase tracking-[0.35em] mt-7 preloader-tagline-enter">
        Nairobi&apos;s Most Trusted Driving School
      </p>

      {/* Dots loader */}
      <div className="relative z-10 flex gap-2 mt-8 preloader-tagline-enter">
        <span className="w-1.5 h-1.5 bg-[#DC2626] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <span className="w-1.5 h-1.5 bg-[#1D4DA1] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/5">
        <div className="h-full bg-gradient-to-r from-[#DC2626] via-white to-[#1D4DA1] preloader-progress" />
      </div>
    </div>
  );
}
