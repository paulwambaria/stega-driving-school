import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { IconCamera, IconStar } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Gallery | Training Fleet & Classrooms | Stega Driving School Nairobi",
  description:
    "See Stega Driving School's NTSA-approved training fleet, branded cars, theory classroom, and students in action across Nairobi — CBD, Embakasi, Kayole, Savannah & Jevanjee branches.",
  keywords: [
    "Stega Driving School photos Nairobi",
    "driving school training cars Nairobi",
    "NTSA driving school fleet Kenya",
  ],
  alternates: { canonical: "https://stegadrivingschool.com/gallery" },
  openGraph: {
    title: "Gallery | Stega Driving School Training Fleet Nairobi",
    description:
      "Our iconic branded training cars are a familiar sight across Nairobi. 1,000+ licensed graduates.",
    url: "https://stegadrivingschool.com/gallery",
    images: [{ url: "/images/slider3.jpg", width: 1200, height: 630, alt: "Stega Driving School fleet" }],
  },
};

const galleryItems = [
  { src: "/images/slider3.jpg", alt: "Team Stega — White Mazda3 on Nairobi roads", label: "Team Stega Fleet", category: "Fleet", className: "col-span-2 row-span-2", imgClass: "object-cover object-top", accent: "bg-[#DC2626]" },
  { src: "/images/slider2.jpg", alt: "Branded Stega training car — blue and white", label: "Branded Training Car", category: "Fleet", className: "col-span-1 row-span-1", imgClass: "object-cover", accent: "bg-[#1D4DA1]" },
  { src: "/images/slider1.jpg", alt: "Stega student driver on Nairobi street", label: "Student Driver Training", category: "Training", className: "col-span-1 row-span-1", imgClass: "object-cover", accent: "bg-[#DC2626]" },
  { src: "/images/slider4.jpg", alt: "Red Stega car — Caution driver under instructions", label: "Caution — Driver in Training", category: "Fleet", className: "col-span-1 row-span-1", imgClass: "object-cover", accent: "bg-[#1D4DA1]" },
  { src: "/images/slider5.jpg", alt: "Blue and red Stega training car KCW 772F", label: "Stega Fleet — Starehe Road", category: "Fleet", className: "col-span-1 row-span-1", imgClass: "object-cover", accent: "bg-[#DC2626]" },
  { src: "/images/about.png", alt: "Stega Driving School training facility", label: "Our Training Setup", category: "Facility", className: "col-span-2 row-span-1", imgClass: "object-cover", accent: "bg-[#1D4DA1]" },
  { src: "/images/theory-class.jpg", alt: "Stega theory classroom — Hi-Way signs and road model table", label: "Theory Classroom", category: "Training", className: "col-span-2 row-span-1", imgClass: "object-cover object-top", accent: "bg-[#1D4DA1]" },
  { src: "/images/course-motorcycle.jpg", alt: "Motorcycle training — Class A2", label: "Motorcycle Training", category: "Class A2", className: "col-span-1 row-span-1", imgClass: "object-cover", accent: "bg-[#DC2626]" },
  { src: "/images/course-psv.jpg", alt: "PSV / Professional driving", label: "PSV Professional Driving", category: "Class D1/D2", className: "col-span-1 row-span-1", imgClass: "object-cover", accent: "bg-[#1D4DA1]" },
];

export default function GalleryPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 bg-[#0F1C3F] overflow-hidden">
        <div className="absolute inset-0 bg-grid-white" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#DC2626]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-white/10 text-white/70 text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6">
            Gallery
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.03]">
            Stega in{" "}
            <span className="text-gradient-red">Action.</span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Our iconic branded cars are a familiar sight across Nairobi. Here&apos;s
            a look at the fleet and training that&apos;s produced 1,000+ licensed drivers.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { v: "1,000+", l: "Students Trained", c: "text-[#DC2626]" },
              { v: "96%", l: "Pass Rate", c: "text-[#1D4DA1]" },
              { v: "6", l: "Programs", c: "text-[#DC2626]" },
              { v: "NTSA", l: "Approved", c: "text-[#1D4DA1]" },
            ].map((s, i) => (
              <div key={s.l} className={`py-7 px-6 text-center ${i < 3 ? "border-r border-slate-100" : ""}`}>
                <div className={`text-3xl sm:text-4xl font-black ${s.c}`}>{s.v}</div>
                <div className="text-slate-500 text-sm font-medium mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PHOTO GRID ───────────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
            style={{ gridAutoRows: "220px" }}
          >
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ${item.className}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={`${item.imgClass} group-hover:scale-110 transition-transform duration-700 ease-out`}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-0.5 group-hover:translate-y-0 transition-transform duration-300">
                  <span className={`inline-block ${item.accent} text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-widest mb-1.5`}>
                    {item.category}
                  </span>
                  <p className="text-white font-bold text-sm leading-tight drop-shadow-lg">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div className="mt-8 bg-white border border-slate-100 rounded-2xl p-10 text-center shadow-sm">
            <div className="mb-5 flex justify-center text-[#1D4DA1]"><IconCamera className="w-12 h-12" /></div>
            <h3 className="text-slate-900 font-black text-2xl mb-3">
              See More of Stega
            </h3>
            <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
              Follow us on social media or visit us at Mfangano Street to meet
              the instructors, see the fleet, and experience the Stega difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md shadow-red-100 hover:-translate-y-0.5"
              >
                Visit Us Today
              </Link>
              <Link
                href="/book"
                className="border-2 border-[#1D4DA1] text-[#1D4DA1] hover:bg-[#1D4DA1] hover:text-white font-bold px-8 py-4 rounded-xl transition-all"
              >
                Book a Lesson
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL BANNER ───────────────────────────────── */}
      <section className="relative h-80 sm:h-[420px] overflow-hidden">
        <Image
          src="/images/slider5.jpg"
          alt="Stega training car on Nairobi road"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0F1C3F]/75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="flex gap-0.5 mb-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} className="w-5 h-5 text-amber-400" />
            ))}
          </div>
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-5 max-w-2xl leading-relaxed">
            &ldquo;The cars were in great condition and they really teach you safe
            driving in real-life situations.&rdquo;
          </blockquote>
          <cite className="text-slate-400 text-sm not-italic">
            Brian Otieno &mdash; Donholm, Nairobi
          </cite>
        </div>
      </section>
    </>
  );
}
