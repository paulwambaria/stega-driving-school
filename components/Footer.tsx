import Link from "next/link";
import Image from "next/image";
import { IconMapPin, IconPhone, IconWhatsApp, IconMail, IconClock } from "@/components/Icons";

const programs = [
  { label: "Manual Driving (Class B2)", href: "/courses" },
  { label: "Automatic Driving (Class B1)", href: "/courses" },
  { label: "Motorcycle Training (Class A2)", href: "/courses" },
  { label: "Light Truck Training (Class C1)", href: "/courses" },
  { label: "PSV / Professional (D1, D2, B3)", href: "/courses" },
  { label: "Combined Course (B1/B2)", href: "/courses" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Book a Course", href: "/book" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F1C3F] border-t-4 border-[#DC2626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* ── Brand ────────────────────────────── */}
          <div className="lg:col-span-1">
            {/* Logo on dark bg — white box so logo reads clearly */}
            <Link href="/" className="inline-block bg-white rounded-xl px-3 py-2 mb-5">
              <Image
                src="/images/logo.png"
                alt="Stega Driving School"
                width={140}
                height={90}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Nairobi&apos;s most trusted driving school since Est. 1995.
              NTSA-approved training helping students master the road with
              confidence.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { label: "F", title: "Facebook" },
                { label: "T", title: "Twitter" },
                { label: "IG", title: "Instagram" },
              ].map((s) => (
                <a
                  key={s.title}
                  href="#"
                  title={s.title}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#DC2626] flex items-center justify-center text-slate-400 hover:text-white transition-all text-xs font-bold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Programs ─────────────────────────── */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-[#DC2626] rounded-full" />
              Programs
            </h4>
            <ul className="space-y-3">
              {programs.map((p) => (
                <li key={p.label}>
                  <Link
                    href={p.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors flex items-start gap-2 group"
                  >
                    <span className="text-[#DC2626] group-hover:text-red-400 mt-0.5 flex-shrink-0">›</span>
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Quick Links ──────────────────────── */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-[#1D4DA1] rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#1D4DA1] group-hover:text-blue-400">›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ──────────────────────────── */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-[#DC2626] rounded-full" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#DC2626] mt-0.5 flex-shrink-0"><IconMapPin className="w-4 h-4" /></span>
                <div>
                  <p className="text-slate-300 text-sm font-semibold mb-1.5">5 Branches Across Nairobi</p>
                  <ul className="space-y-1">
                    {["CBD — Reli Co-op House, Mfangano St", "Jevanjee Gardens", "Embakasi", "Savannah", "Kayole"].map((b) => (
                      <li key={b} className="text-slate-500 text-xs flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-[#DC2626]/60 rounded-full flex-shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#DC2626] flex-shrink-0"><IconPhone className="w-4 h-4" /></span>
                <a href="tel:0722213810" className="text-slate-400 hover:text-white text-sm transition-colors">
                  0722 213 810
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#25D366] flex-shrink-0"><IconWhatsApp className="w-4 h-4" /></span>
                <a href="https://wa.me/254750323372" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm transition-colors">
                  WhatsApp: 0750 323 372
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#DC2626] flex-shrink-0"><IconMail className="w-4 h-4" /></span>
                <a href="mailto:stegadrivingschool@gmail.com" className="text-slate-400 hover:text-white text-sm transition-colors break-all">
                  stegadrivingschool@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#DC2626] flex-shrink-0"><IconClock className="w-4 h-4" /></span>
                <span className="text-slate-400 text-sm">Mon – Sat: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────── */}
        <div className="border-t border-white/[0.07] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Stega Driving School. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <p className="text-slate-500 text-xs">NTSA Approved · Est. 1995 · 5 Branches Across Nairobi</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
