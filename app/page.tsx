import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import {
  IconTrophy,
  IconAcademic,
  IconCalendar,
  IconCar,
  IconBanknotes,
  IconClipboard,
  IconTarget,
  IconSparkle,
  IconStar,
  IconMapPin,
  IconPhone,
} from "@/components/Icons";
import type { ReactNode } from "react";

const trustItems = [
  "96% First-Attempt Pass Rate",
  "1,000+ Licensed Graduates",
  "NTSA Fully Approved",
  "Est. 1995 · Mfangano Street, Nairobi",
  "6 Certified Driving Programs",
  "Flexible Schedules Mon – Sat",
  "Expert Certified Instructors",
  "Transparent Pricing · No Hidden Fees",
];

const courses = [
  {
    image: "/images/course-manual.jpg",
    title: "Manual Driving",
    class: "Class B2",
    desc: "Master clutch, gear shifting, and confident driving in Nairobi traffic.",
    featured: true,
  },
  {
    image: "/images/course-automatic.jpg",
    title: "Automatic Driving",
    class: "Class B1",
    desc: "Get on the road faster with our streamlined automatic program.",
  },
  {
    image: "/images/hero2.jpg",
    title: "Combined Course",
    class: "Class B1 / B2",
    desc: "Licensed for both manual and automatic — maximum flexibility.",
  },
  {
    image: "/images/course-motorcycle.jpg",
    title: "Motorcycle Training",
    class: "Class A2",
    desc: "From basic balance to defensive riding on Nairobi roads.",
  },
  {
    image: "/images/course-truck.jpg",
    title: "Light Truck",
    class: "Class C1",
    desc: "Professional commercial vehicle operation and test preparation.",
  },
  {
    image: "/images/course-psv.jpg",
    title: "PSV & Professional Driving",
    class: "Class D1, D2, B3",
    desc: "Complete certification for public service vehicle operators and professional transport careers in Kenya.",
    wide: true,
  },
];

const features: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <IconTrophy className="w-4 h-4 text-white" />, title: "96% First-Attempt Pass Rate", desc: "Structured training that consistently delivers results on test day." },
  { icon: <IconAcademic className="w-4 h-4 text-white" />, title: "NTSA-Certified Instructors", desc: "Patient, knowledgeable, and deeply experienced on Nairobi roads." },
  { icon: <IconCalendar className="w-4 h-4 text-white" />, title: "Flexible Scheduling", desc: "Morning, afternoon & weekend slots — Mon through Sat." },
  { icon: <IconCar className="w-4 h-4 text-white" />, title: "Well-Maintained Fleet", desc: "Modern branded dual-control vehicles you've seen on Nairobi streets." },
  { icon: <IconBanknotes className="w-4 h-4 text-white" />, title: "Transparent Pricing", desc: "No hidden fees. Flexible M-Pesa and cash payment options." },
];

const stats = [
  { value: "96%", label: "Pass Rate", sub: "First attempt", color: "text-[#DC2626]" },
  { value: "1,000+", label: "Graduates", sub: "Licensed & driving", color: "text-[#1D4DA1]" },
  { value: "30+", label: "Years", sub: "Est. 1995", color: "text-[#DC2626]" },
  { value: "6", label: "Programs", sub: "All vehicle classes", color: "text-[#1D4DA1]" },
];

const steps: { num: string; title: string; desc: string; icon: ReactNode }[] = [
  {
    num: "01",
    title: "Register",
    desc: "Fill in the form online or visit us on Mfangano Street. No payment required to register.",
    icon: <IconClipboard className="w-6 h-6 text-white" />,
  },
  {
    num: "02",
    title: "Choose Program",
    desc: "Select your vehicle class and pick a schedule that fits your lifestyle.",
    icon: <IconTarget className="w-6 h-6 text-white" />,
  },
  {
    num: "03",
    title: "Train on Real Roads",
    desc: "Learn on actual Nairobi streets with your NTSA-certified instructor.",
    icon: <IconCar className="w-6 h-6 text-white" />,
  },
  {
    num: "04",
    title: "Pass & Drive",
    desc: "Ace the NTSA test with our 96% pass rate methodology and start your life on the road.",
    icon: <IconSparkle className="w-6 h-6 text-white" />,
  },
];

const testimonials = [
  {
    name: "James Mwangi",
    location: "Nairobi CBD",
    initial: "JM",
    color: "from-[#DC2626] to-[#B91C1C]",
    quote:
      "I had zero driving experience when I joined but the instructors were very patient and professional. I passed my test on the first attempt!",
  },
  {
    name: "Faith Achieng",
    location: "Embakasi",
    initial: "FA",
    color: "from-[#1D4DA1] to-[#163B7C]",
    quote:
      "What I loved most was how organized and flexible the school was. The scheduling made learning very easy around my work.",
  },
  {
    name: "Brian Otieno",
    location: "Donholm",
    initial: "BO",
    color: "from-[#DC2626] to-[#1D4DA1]",
    quote:
      "Excellent experience. The cars were in great condition and they really teach you safe driving in real-life situations.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO CAROUSEL ───────────────────────────────────── */}
      <HeroCarousel />

      {/* ── MARQUEE TRUST STRIP ─────────────────────────────── */}
      <div className="overflow-hidden bg-[#DC2626] py-3.5">
        <div className="animate-marquee">
          {[...trustItems, ...trustItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 px-8 text-white text-sm font-semibold whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 bg-white/50 rounded-full flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── COURSES BENTO GRID ──────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-block bg-[#DC2626]/10 text-[#DC2626] text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
                6 NTSA-Certified Programs
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.05]">
                Pick Your License.
                <br />
                <span className="text-gradient-red">We&apos;ll Do the Rest.</span>
              </h2>
            </div>
            <Link
              href="/courses"
              className="flex-shrink-0 inline-flex items-center gap-2 border-2 border-[#1D4DA1] text-[#1D4DA1] hover:bg-[#1D4DA1] hover:text-white font-bold px-6 py-3 rounded-xl transition-all text-sm whitespace-nowrap"
            >
              View all programs →
            </Link>
          </div>

          {/* Bento grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            style={{ gridAutoRows: "280px" }}
          >
            {/* Manual — featured tall card */}
            <div className="relative rounded-2xl overflow-hidden group sm:row-span-2 cursor-pointer">
              <Image
                src={courses[0].image}
                alt={courses[0].title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-[#DC2626] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    {courses[0].class}
                  </span>
                  <span className="ml-2 inline-block bg-amber-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    Most Popular
                  </span>
                </div>
                <div>
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-3 leading-tight drop-shadow-lg">
                    {courses[0].title}
                  </h3>
                  <p className="text-white/80 text-sm mb-5 leading-relaxed">{courses[0].desc}</p>
                  <Link
                    href="/courses"
                    className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-[#B91C1C] transition-colors"
                  >
                    Enrol Now →
                  </Link>
                </div>
              </div>
            </div>

            {/* Auto, Combined, Motorcycle, Truck — regular cards */}
            {courses.slice(1, 5).map((c) => (
              <Link
                key={c.title}
                href="/courses"
                className="relative rounded-2xl overflow-hidden group cursor-pointer block"
              >
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <span className="self-start bg-white/15 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest border border-white/20">
                    {c.class}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-white mb-1.5 drop-shadow-lg">{c.title}</h3>
                    <p className="text-white/75 text-xs leading-relaxed line-clamp-2">{c.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-white/80 group-hover:text-white text-xs font-semibold transition-colors">
                      Learn more
                      <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {/* PSV — wide card */}
            <Link
              href="/courses"
              className="relative rounded-2xl overflow-hidden group cursor-pointer block sm:col-span-2 lg:col-span-3"
            >
              <Image
                src={courses[5].image}
                alt={courses[5].title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
              <div className="absolute inset-0 flex items-center px-8 sm:px-10">
                <div className="max-w-lg">
                  <span className="inline-block bg-[#1D4DA1] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                    {courses[5].class}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">{courses[5].title}</h3>
                  <p className="text-white/80 text-sm">{courses[5].desc}</p>
                </div>
                <div className="ml-auto hidden sm:flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-white font-bold text-sm hover:bg-white/20 transition-colors whitespace-nowrap">
                  View Program →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY STEGA — DARK SECTION ────────────────────────── */}
      <section className="py-14 bg-[#0F1C3F] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#DC2626]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1D4DA1]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — Text */}
            <div>
              <span className="inline-flex items-center gap-2 bg-white/8 border border-white/12 text-white/70 text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
                Why Choose Stega?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
                The driving school
                <br />
                Nairobi has{" "}
                <span className="text-gradient-red">trusted</span>
                <br />
                for 30 years.
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
                From our first student in 1995 to over a thousand licensed graduates
                today, Stega has built its reputation one lesson at a time — with
                expert instructors, real Nairobi roads, and results that speak
                for themselves.
              </p>

              {/* Feature list */}
              <div className="space-y-3 mb-7">
                {features.map((f) => (
                  <div key={f.title} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/[0.06] border border-white/[0.08] rounded-lg flex items-center justify-center text-base flex-shrink-0">
                      {f.icon}
                    </div>
                    <p className="text-white/80 text-sm font-medium">{f.title}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#DC2626]/20 hover:-translate-y-0.5 text-sm"
              >
                Our Story →
              </Link>
            </div>

            {/* Right — Photo + floating stats */}
            <div className="relative mt-6 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                <Image
                  src="/images/slider2.jpg"
                  alt="Stega Driving School branded training car on Nairobi streets"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: "300px", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C3F]/50 to-transparent" />
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-white rounded-xl px-4 py-3 shadow-xl shadow-black/20">
                <div className="text-2xl font-black text-[#DC2626] leading-none">96%</div>
                <div className="text-slate-500 text-xs font-semibold mt-0.5">Pass Rate</div>
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -top-4 -right-3 sm:-right-6 bg-[#DC2626] rounded-xl px-4 py-3 shadow-xl shadow-[#DC2626]/30">
                <div className="text-2xl font-black text-white leading-none">1K+</div>
                <div className="text-red-200 text-xs font-semibold mt-0.5">Graduates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BIG STATS ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Numbers that <span className="text-gradient-red">prove the difference.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`text-center ${i < stats.length - 1 ? "lg:border-r lg:border-slate-100" : ""}`}
              >
                <div className={`text-6xl sm:text-7xl lg:text-8xl font-black mb-3 leading-none ${s.color}`}>
                  {s.value}
                </div>
                <div className="text-slate-900 font-black text-lg sm:text-xl mb-1">{s.label}</div>
                <div className="text-slate-400 text-sm">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────── */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#1D4DA1]/10 text-[#1D4DA1] text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
              Simple Process
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              4 Steps to Your <span className="text-gradient-blue">License.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line — desktop only */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-slate-200 pointer-events-none" />

            {steps.map((s, i) => (
              <div key={s.num} className="relative flex flex-col items-center text-center">
                {/* Step circle */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10 text-white font-black text-xl ${i % 2 === 0 ? "bg-[#DC2626] shadow-[#DC2626]/25" : "bg-[#1D4DA1] shadow-[#1D4DA1]/25"}`}>
                  {s.num}
                </div>
                <h4 className="text-slate-900 font-black text-xl mb-3">{s.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-red-200 hover:-translate-y-0.5 text-base"
            >
              Start Step 1 — Register Free →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-600 text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
              <IconStar className="w-3.5 h-3.5 text-amber-500" />
              <IconStar className="w-3.5 h-3.5 text-amber-500" />
              <IconStar className="w-3.5 h-3.5 text-amber-500" />
              <IconStar className="w-3.5 h-3.5 text-amber-500" />
              <IconStar className="w-3.5 h-3.5 text-amber-500" />
              <span className="ml-1">Success Stories</span>
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              What Our <span className="text-gradient-red">Graduates</span> Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Decorative large quote */}
                <div className="absolute top-5 right-7 text-[96px] text-slate-100 font-serif leading-none select-none pointer-events-none">
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} className="w-4 h-4 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-600 leading-relaxed mb-8 flex-1 relative z-10 text-sm sm:text-base">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-5 border-t border-slate-100">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-black text-sm flex-shrink-0 shadow-md`}>
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold">{t.name}</p>
                    <p className="text-slate-400 text-sm flex items-center gap-1">
                      <IconMapPin className="w-3.5 h-3.5 text-[#DC2626] flex-shrink-0" /> {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLEET SHOWCASE BANNER ───────────────────────────── */}
      <section className="py-0 relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/images/slider3.jpg"
          alt="Stega Driving School fleet on Nairobi roads"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0F1C3F]/65" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-white/60 text-sm uppercase tracking-[0.2em] font-semibold mb-3">Our Fleet</p>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2">
            You&apos;ve Seen Us on the Streets.
          </h3>
          <p className="text-white/70 text-base max-w-lg">
            Our iconic branded training cars are a familiar sight across Nairobi — and now it&apos;s your turn to be behind the wheel.
          </p>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="py-28 bg-gradient-to-br from-[#DC2626] via-[#B91C1C] to-[#991B1B] relative overflow-hidden">
        {/* Decorative grid */}
        <div className="absolute inset-0 bg-grid-white" />

        {/* Giant watermark text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
          <span className="text-[180px] sm:text-[240px] font-black text-white/[0.04] leading-none tracking-tighter">
            STEGA
          </span>
        </div>

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <span className="inline-block bg-white/15 text-white text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-8">
            Ready to Start?
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.02]">
            Your License
            <br />
            Starts Here.
          </h2>
          <p className="text-red-100 text-lg mb-12 max-w-md mx-auto leading-relaxed">
            Join over 1,000 Nairobi drivers who got their license through Stega. Registration is free — no excuses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#DC2626] hover:bg-red-50 font-black px-8 py-4 rounded-xl transition-all shadow-2xl hover:-translate-y-0.5 text-base sm:text-lg"
            >
              Register Now — It&apos;s Free →
            </Link>
            <a
              href="tel:0722213810"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl transition-all hover:bg-white/10 text-base sm:text-lg"
            >
              <IconPhone className="w-5 h-5" /> 0722 213 810
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
