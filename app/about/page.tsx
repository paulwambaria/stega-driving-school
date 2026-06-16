import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  IconShield,
  IconBook,
  IconHandshake,
  IconLightbulb,
  IconTarget,
  IconGlobe,
  IconTrafficLight,
  IconMap,
  IconClipboard,
  IconAcademic,
  IconEye,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us | Stega Driving School",
  description:
    "Learn about Stega Driving School — Nairobi's trusted NTSA-approved driving institution on Mfangano Street with over 1,000 graduates.",
};

const values: { icon: ReactNode; title: string; desc: string; color: string }[] = [
  { icon: <IconShield className="w-8 h-8" />, title: "Safety First", desc: "Defensive driving habits that protect every road user, for life.", color: "bg-red-50 border-red-100 text-[#DC2626]" },
  { icon: <IconBook className="w-8 h-8" />, title: "Excellence", desc: "The highest standards in instruction quality and student outcomes.", color: "bg-blue-50 border-blue-100 text-[#1D4DA1]" },
  { icon: <IconHandshake className="w-8 h-8" />, title: "Integrity", desc: "Transparent pricing, honest feedback, no shortcuts — ever.", color: "bg-red-50 border-red-100 text-[#DC2626]" },
  { icon: <IconLightbulb className="w-8 h-8" />, title: "Innovation", desc: "Curriculum that reflects modern roads, regulations, and best practices.", color: "bg-blue-50 border-blue-100 text-[#1D4DA1]" },
  { icon: <IconTarget className="w-8 h-8" />, title: "Results-Driven", desc: "Our 96% pass rate is the outcome of structured, dedicated training.", color: "bg-red-50 border-red-100 text-[#DC2626]" },
  { icon: <IconGlobe className="w-8 h-8" />, title: "Community", desc: "Producing safer drivers who make Nairobi's roads better for everyone.", color: "bg-blue-50 border-blue-100 text-[#1D4DA1]" },
];

const milestones = [
  { year: "Founded", label: "1995", desc: "Stega Driving School opens on Mfangano Street, Nairobi.", side: "red" },
  { year: "NTSA Certified", label: "Early 2000s", desc: "Full certification from Kenya's National Transport & Safety Authority.", side: "blue" },
  { year: "500 Graduates", label: "Milestone", desc: "Celebrated our 500th licensed driver — a milestone of dedication.", side: "red" },
  { year: "6 Programs", label: "Expansion", desc: "Expanded to all vehicle classes — motorcycles, trucks, and PSV.", side: "blue" },
  { year: "1,000+ Drivers", label: "Today", desc: "Over one thousand licensed Nairobi drivers, and counting.", side: "red" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 bg-[#0F1C3F] overflow-hidden">
        <div className="absolute inset-0 bg-grid-white" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DC2626]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div>
              <span className="inline-flex items-center gap-2 bg-white/8 border border-white/12 text-white/70 text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-7">
                Est. 1995 · Mfangano Street
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.03] mb-7">
                Nairobi&apos;s Most
                <br />
                <span className="text-gradient-red">Trusted School.</span>
              </h1>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-9 max-w-lg">
                For over 30 years, Stega Driving School has been turning nervous
                learners into confident, NTSA-licensed drivers — one lesson at a
                time. From our Mfangano Street home, we&apos;ve built a legacy of
                results, integrity, and community trust.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-[#DC2626]/20 hover:-translate-y-0.5"
                >
                  Book a Course
                </Link>
                <Link
                  href="/courses"
                  className="border-2 border-white/20 hover:border-white/50 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:bg-white/8"
                >
                  View Programs
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                <Image
                  src="/images/slider3.jpg"
                  alt="Stega Driving School — Team Stega branded car on Nairobi roads"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  style={{ maxHeight: "420px", objectFit: "cover" }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C3F]/40 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-[#DC2626] text-white rounded-xl px-5 py-3.5 shadow-xl shadow-[#DC2626]/30">
                <div className="text-3xl font-black leading-none">NTSA</div>
                <div className="text-red-200 text-xs font-semibold mt-0.5">Fully Approved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ROW ────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { value: "96%", label: "First-Attempt Pass Rate", color: "text-[#DC2626]" },
              { value: "1,000+", label: "Licensed Graduates", color: "text-[#1D4DA1]" },
              { value: "30+", label: "Years of Excellence", color: "text-[#DC2626]" },
              { value: "NTSA", label: "Fully Approved", color: "text-[#1D4DA1]" },
            ].map((s, i) => (
              <div key={s.label} className={`py-8 px-4 text-center ${i < 3 ? "border-r border-slate-100" : ""}`}>
                <div className={`text-4xl sm:text-5xl font-black ${s.color} mb-1`}>{s.value}</div>
                <div className="text-slate-500 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left — Photo */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-5 bg-[#DC2626]/5 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <Image
                  src="/images/about.png"
                  alt="Stega Driving School — Training environment"
                  width={904}
                  height={456}
                  className="w-full h-auto"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white border border-slate-100 rounded-2xl px-5 py-4 shadow-xl">
                <div className="text-4xl font-black text-[#1D4DA1] leading-none">30+</div>
                <div className="text-slate-500 text-xs font-semibold mt-1">Years in Nairobi</div>
              </div>
            </div>

            {/* Right — Text */}
            <div className="order-1 lg:order-2">
              <span className="inline-block bg-[#DC2626]/10 text-[#DC2626] text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6">
                Our Story
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-8 leading-tight">
                Rooted in Nairobi.
                <br />
                <span className="text-gradient-blue">Trusted by Thousands.</span>
              </h2>
              <div className="space-y-5 text-slate-500 leading-relaxed text-sm sm:text-base">
                <p>
                  Stega Driving School was founded with a simple but powerful goal:
                  to make driving education accessible, professional, and
                  results-driven for every Nairobi resident.
                </p>
                <p>
                  Located on Mfangano Street in the heart of Nairobi, we&apos;ve
                  built our reputation one satisfied student at a time. Our
                  certified instructors bring deep knowledge of local roads,
                  NTSA test routes, and the patience to guide every learner.
                </p>
                <p>
                  Today, our iconic branded training cars are a familiar sight
                  on Nairobi&apos;s streets — a visible symbol of the thousands of
                  students we&apos;ve helped become confident, licensed drivers.
                </p>
              </div>

              {/* Mission + Vision mini cards */}
              <div className="grid sm:grid-cols-2 gap-4 mt-10">
                <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                  <div className="mb-3 text-[#DC2626]"><IconTarget className="w-7 h-7" /></div>
                  <h4 className="text-slate-900 font-bold mb-2 text-sm">Our Mission</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Empower every student with the skills and confidence to be a safe,
                    responsible Kenyan driver.
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                  <div className="mb-3 text-[#1D4DA1]"><IconEye className="w-7 h-7" /></div>
                  <h4 className="text-slate-900 font-bold mb-2 text-sm">Our Vision</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    To be Kenya&apos;s leading driver training institution, recognized for
                    excellence and producing the safest drivers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THEORY CLASSROOM ─────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div>
              <span className="inline-block bg-[#DC2626]/10 text-[#DC2626] text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6">
                Theory Training
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Learn the Rules
                <br />
                <span className="text-gradient-red">Before You Drive.</span>
              </h2>
              <p className="text-slate-500 leading-relaxed text-sm sm:text-base mb-8">
                Every Stega student begins with dedicated theory sessions in our
                purpose-built classroom. Using Kenya&apos;s official Hi-Way Signs
                charts and our unique road-model training table, instructors walk
                you through road signs, right-of-way rules, roundabout navigation,
                and real-world traffic scenarios — before you ever touch a
                steering wheel.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <IconTrafficLight className="w-6 h-6" />, title: "Highway Code & Signs", desc: "All Kenyan road signs, markings, and traffic laws explained clearly." },
                  { icon: <IconMap className="w-6 h-6" />, title: "Road Model Table", desc: "Hands-on learning using a 3D road layout — junctions, roundabouts, parking." },
                  { icon: <IconClipboard className="w-6 h-6" />, title: "NTSA Theory Test Prep", desc: "Practice questions mapped directly to the official NTSA test format." },
                  { icon: <IconAcademic className="w-6 h-6" />, title: "Small Class Sizes", desc: "Personalised attention so every student fully understands before moving to practical." },
                ].map((f) => (
                  <div key={f.title} className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                    <div className="mb-2 text-[#1D4DA1]">{f.icon}</div>
                    <h4 className="text-slate-900 font-bold text-sm mb-1">{f.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[#1D4DA1]/5 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <Image
                  src="/images/theory-class.jpg"
                  alt="Stega Driving School theory classroom — Hi-Way signs and road model table"
                  width={924}
                  height={1232}
                  className="w-full h-auto"
                  style={{ maxHeight: "520px", objectFit: "cover", objectPosition: "top" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C3F]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-black text-lg leading-tight drop-shadow-lg">
                    Our Theory Classroom
                  </p>
                  <p className="text-white/70 text-sm mt-1">
                    Mfangano Street, Nairobi
                  </p>
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -top-4 -right-3 sm:-right-6 bg-[#1D4DA1] text-white rounded-xl px-4 py-3 shadow-xl shadow-blue-200">
                <div className="text-2xl font-black leading-none">Theory</div>
                <div className="text-blue-200 text-xs font-semibold mt-0.5">Included in all courses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────────────── */}
      <section className="py-24 bg-[#0F1C3F] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/10 text-white/70 text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
              What Drives Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Our Core <span className="text-gradient-red">Values</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white/[0.04] border border-white/[0.08] hover:border-white/20 rounded-2xl p-7 hover:bg-white/[0.07] transition-all group"
              >
                <div className="mb-5">{v.icon}</div>
                <h4 className="text-white font-black text-xl mb-3">{v.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MILESTONES ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#1D4DA1]/10 text-[#1D4DA1] text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
              Our Journey
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              30 Years of <span className="text-gradient-red">Milestones</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline spine */}
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#DC2626] via-[#1D4DA1] to-[#DC2626]/20" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-8 pl-20 relative">
                  {/* Dot */}
                  <div className={`absolute left-4 top-3 w-7 h-7 rounded-full flex items-center justify-center shadow-md ${m.side === "red" ? "bg-[#DC2626] shadow-red-200" : "bg-[#1D4DA1] shadow-blue-200"}`}>
                    <div className="w-2.5 h-2.5 bg-white rounded-full" />
                  </div>
                  {/* Card */}
                  <div className={`flex-1 rounded-xl p-5 border hover:shadow-sm transition-all ${m.side === "red" ? "bg-red-50 border-red-100" : "bg-blue-50 border-blue-100"}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-bold uppercase tracking-widest ${m.side === "red" ? "text-[#DC2626]" : "text-[#1D4DA1]"}`}>{m.year}</span>
                      <span className="text-slate-400 text-xs">·</span>
                      <span className="text-slate-400 text-xs">{m.label}</span>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FLEET PHOTO BANNER ───────────────────────────────── */}
      <section className="relative h-72 sm:h-96 overflow-hidden">
        <Image
          src="/images/slider4.jpg"
          alt="Stega Driving School car on Nairobi streets"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0F1C3F]/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            Ready to Join the{" "}
            <span className="text-[#DC2626]">Stega Family?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-0.5"
            >
              Book a Course
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-all hover:bg-white/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
