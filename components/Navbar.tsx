"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg shadow-slate-200/60 border-b border-slate-100"
          : "bg-white/95 backdrop-blur-md border-b border-slate-100/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px] md:h-20">

          {/* ── Logo ──────────────────────────────── */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Stega Driving School"
              width={160}
              height={103}
              className="h-11 sm:h-13 w-auto"
              priority
            />
          </Link>

          {/* ── Desktop nav ───────────────────────── */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors relative group pb-0.5 ${
                    isActive
                      ? "text-[#DC2626]"
                      : "text-slate-700 hover:text-[#DC2626]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-[#DC2626] rounded-full transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* ── CTA + phone ───────────────────────── */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0722213810"
              className="hidden lg:flex items-center gap-1.5 text-[#1D4DA1] text-sm font-semibold hover:text-[#DC2626] transition-colors"
            >
              <span className="text-base">📞</span>
              <span>0722 213 810</span>
            </a>
            <div className="hidden md:block w-px h-5 bg-slate-200" />
            <Link
              href="/book"
              className="hidden md:inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-red-200 hover:shadow-red-300 hover:-translate-y-px"
            >
              Book a Course
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-slate-700 rounded-full transition-all duration-300 origin-center ${
                    isOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${
                    isOpen ? "opacity-0 -translate-x-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-slate-700 rounded-full transition-all duration-300 origin-center ${
                    isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* ── Mobile menu ───────────────────────── */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border border-slate-100 rounded-2xl mb-4 p-3 space-y-1 shadow-xl shadow-slate-200/60">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-red-50 text-[#DC2626]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#DC2626]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-slate-100 space-y-2">
              <a
                href="tel:0722213810"
                className="flex items-center justify-center gap-2 text-[#1D4DA1] text-sm font-semibold py-2.5"
              >
                📞 0722 213 810
              </a>
              <Link
                href="/book"
                className="flex items-center justify-center bg-[#DC2626] hover:bg-[#B91C1C] text-white text-sm font-bold px-4 py-3 rounded-xl transition-colors shadow-md shadow-red-200"
              >
                Book a Course
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
