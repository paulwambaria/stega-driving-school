"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/images/slider1.jpg",
    badge: "NTSA Approved · Est. 1995",
    headline: "Learn to Drive",
    accent: "with Confidence.",
    sub: "Nairobi's most trusted driving school. Expert instructors, flexible schedules, and a proven 96% first-attempt pass rate.",
    cta1: { label: "Book a Course Now", href: "/book" },
    cta2: { label: "View Programs", href: "/courses" },
  },
  {
    image: "/images/slider2.jpg",
    badge: "Well-Maintained Training Fleet",
    headline: "Train in Our",
    accent: "Branded Vehicles.",
    sub: "Our iconic Stega-branded training cars are equipped with dual controls and driven by NTSA-certified instructors on real Nairobi roads.",
    cta1: { label: "Register Today", href: "/book" },
    cta2: { label: "About Our School", href: "/about" },
  },
  {
    image: "/images/slider3.jpg",
    badge: "Certified Expert Instructors",
    headline: "Professional Training,",
    accent: "Real Results.",
    sub: "Patient, NTSA-certified instructors with deep knowledge of Nairobi's test routes guiding you every step of the way.",
    cta1: { label: "View All Programs", href: "/courses" },
    cta2: { label: "Book a Lesson", href: "/book" },
  },
  {
    image: "/images/slider4.jpg",
    badge: "Nairobi's Streets Are Your Classroom",
    headline: "Real Roads.",
    accent: "Real Skills.",
    sub: "We train you in actual Nairobi traffic — the same roads you'll face on test day and every day after. No surprises.",
    cta1: { label: "Start Training", href: "/book" },
    cta2: { label: "Our Programs", href: "/courses" },
  },
  {
    image: "/images/slider5.jpg",
    badge: "1,000+ Licensed Graduates",
    headline: "Nairobi's Most",
    accent: "Trusted School.",
    sub: "Since 1995, over a thousand Nairobi residents have earned their licenses through Stega Driving School. Join them today.",
    cta1: { label: "Register Now — Free", href: "/book" },
    cta2: { label: "Contact Us", href: "/contact" },
  },
];

const SLIDE_DURATION = 5500;
const PROGRESS_INTERVAL = 55;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(t);
  }, [isPaused, next]);

  useEffect(() => {
    setProgress(0);
    if (isPaused) return;
    const steps = SLIDE_DURATION / PROGRESS_INTERVAL;
    const t = setInterval(() => {
      setProgress((p) => Math.min(p + 100 / steps, 100));
    }, PROGRESS_INTERVAL);
    return () => clearInterval(t);
  }, [current, isPaused]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Slides ─────────────────────────────────────────────── */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={i !== current}
        >
          {/* Background photo */}
          <Image
            src={slide.image}
            alt={slide.headline}
            fill
            className="object-cover object-center"
            priority={i === 0}
            quality={85}
            sizes="100vw"
          />

          {/* Layered dark overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          {/* Slide content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-20">
              <div className={`max-w-2xl ${i === current ? "slide-content-enter" : ""}`}>

                {/* Badge */}
                <span className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.12em]">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  {slide.badge}
                </span>

                {/* Headline */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-5 leading-[1.04] tracking-tight drop-shadow-lg">
                  {slide.headline}
                  <br />
                  <span className="text-[#DC2626]">{slide.accent}</span>
                </h1>

                {/* Red accent line */}
                <div className="w-16 h-1 bg-[#DC2626] rounded-full mb-5" />

                {/* Sub */}
                <p className="text-white/85 text-base sm:text-lg mb-9 leading-relaxed max-w-lg drop-shadow">
                  {slide.sub}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={slide.cta1.href}
                    className="inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold px-7 py-4 rounded-xl text-base transition-all shadow-xl shadow-black/40 hover:-translate-y-0.5"
                  >
                    {slide.cta1.label} →
                  </Link>
                  <Link
                    href={slide.cta2.href}
                    className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/60 text-white font-semibold px-7 py-4 rounded-xl text-base transition-all backdrop-blur-sm"
                  >
                    {slide.cta2.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ── Prev / Next arrows ──────────────────────────────────── */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/10 hover:bg-[#DC2626] border border-white/20 hover:border-[#DC2626] rounded-full flex items-center justify-center text-white text-2xl font-thin transition-all backdrop-blur-sm hover:scale-110"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/10 hover:bg-[#DC2626] border border-white/20 hover:border-[#DC2626] rounded-full flex items-center justify-center text-white text-2xl font-thin transition-all backdrop-blur-sm hover:scale-110"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* ── Slide counter ───────────────────────────────────────── */}
      <div className="absolute top-24 right-6 sm:right-10 z-20 flex items-baseline gap-1 text-white/60 font-medium select-none">
        <span className="text-white font-black text-lg leading-none">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="text-xs">/</span>
        <span className="text-sm">{String(slides.length).padStart(2, "0")}</span>
      </div>

      {/* ── Dot navigation ─────────────────────────────────────── */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex items-center justify-center gap-3 px-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-9 h-2.5 bg-[#DC2626]"
                : "w-2.5 h-2.5 bg-white/35 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* ── Progress bar ───────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-[3px] bg-white/10">
        <div
          className="h-full bg-[#DC2626]"
          style={{ width: `${progress}%`, transition: "width 0.05s linear" }}
        />
      </div>
    </div>
  );
}
