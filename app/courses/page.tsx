import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { IconClock, IconCheck, IconPhone } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Driving Programs | Stega Driving School",
  description:
    "Explore all 6 NTSA-approved driving programs at Stega Driving School — manual, automatic, motorcycle, light truck, PSV, and combined courses.",
};

const courses = [
  {
    image: "/images/course-manual.jpg",
    title: "Manual Driving Course",
    class: "Class B2",
    duration: "2–4 Weeks",
    badge: "Most Popular",
    badgeStyle: "bg-amber-100 text-amber-700",
    accent: "#DC2626",
    desc: "Our manual transmission course is the foundation of professional driving. Master clutch control, gear shifting, hill starts, and smooth driving in Nairobi's real traffic conditions.",
    includes: [
      "Theory & Highway Code sessions",
      "Practical clutch and gear training",
      "Urban traffic navigation",
      "Highway and roundabout confidence",
      "NTSA test route familiarization",
      "Test registration assistance",
    ],
    ideal: "First-time drivers, anyone upgrading from automatic",
  },
  {
    image: "/images/course-automatic.jpg",
    title: "Automatic Driving Course",
    class: "Class B1",
    duration: "1–3 Weeks",
    badge: "Beginner Friendly",
    badgeStyle: "bg-green-100 text-green-700",
    accent: "#1D4DA1",
    desc: "Perfect for those who want to get on the road faster. Automatic transmission eliminates gear changing, letting you focus on traffic awareness, road positioning, and confidence.",
    includes: [
      "Theory & Highway Code sessions",
      "Practical automatic driving",
      "Nairobi urban traffic training",
      "Parking and reversing techniques",
      "NTSA test route practice",
      "Test preparation guidance",
    ],
    ideal: "Beginners, city commuters, those who prefer ease of driving",
  },
  {
    image: "/images/hero2.jpg",
    title: "Combined Course",
    class: "Class B1/B2",
    duration: "3–5 Weeks",
    badge: "Best Value",
    badgeStyle: "bg-purple-100 text-purple-700",
    accent: "#DC2626",
    desc: "Get licensed for both manual and automatic vehicles in one comprehensive course. The most versatile program we offer, giving you complete freedom in the vehicles you can drive.",
    includes: [
      "Full manual + automatic theory",
      "Practical sessions on both vehicle types",
      "Advanced road skills training",
      "Both NTSA test route preparations",
      "Test booking for both classes",
      "Combined dual certification",
    ],
    ideal: "Anyone who wants maximum flexibility and full licensing",
  },
  {
    image: "/images/course-motorcycle.jpg",
    title: "Motorcycle Training",
    class: "Class A2",
    duration: "2–3 Weeks",
    badge: "2-Wheeler",
    badgeStyle: "bg-orange-100 text-orange-700",
    accent: "#1D4DA1",
    desc: "Master two-wheel riding with our comprehensive motorcycle program. From basic balance and clutch control to defensive riding techniques and Nairobi's diverse road conditions.",
    includes: [
      "Motorcycle theory & road rules",
      "Basic riding balance and control",
      "Clutch, throttle & brake mastery",
      "Road positioning & lane discipline",
      "Defensive riding techniques",
      "NTSA motorcycle test preparation",
    ],
    ideal: "Courier riders, commuters, motorcycle enthusiasts",
  },
  {
    image: "/images/course-truck.jpg",
    title: "Light Truck Training",
    class: "Class C1",
    duration: "3–4 Weeks",
    badge: "Commercial",
    badgeStyle: "bg-sky-100 text-sky-700",
    accent: "#DC2626",
    desc: "Professional training for commercial light truck operation. Covers load management, advanced braking, reversing, and commercial route driving specific to Kenyan conditions.",
    includes: [
      "Commercial vehicle theory",
      "Pre-trip vehicle inspection",
      "Load management & weight distribution",
      "Advanced braking techniques",
      "Reversing & maneuvering in tight spaces",
      "Commercial route and NTSA test prep",
    ],
    ideal: "Delivery drivers, logistics workers, small business operators",
  },
  {
    image: "/images/course-psv.jpg",
    title: "PSV / Professional Driving",
    class: "Class D1, D2, B3",
    duration: "4–6 Weeks",
    badge: "Professional",
    badgeStyle: "bg-emerald-100 text-emerald-700",
    accent: "#1D4DA1",
    desc: "Comprehensive training for public service vehicle operators and professional drivers. Meets all PSV licensing requirements including passenger safety, route management, and advanced vehicle handling.",
    includes: [
      "PSV regulations & passenger safety",
      "Advanced large vehicle handling",
      "Route planning and management",
      "Emergency procedures training",
      "Customer service for transport",
      "Full PSV NTSA test preparation",
    ],
    ideal: "Matatu drivers, bus operators, tour vehicle drivers, career professionals",
  },
];

const faqs = [
  { q: "How long does it take to get a driving license?", a: "Most students complete training in 2–6 weeks, then book the NTSA test. The full process from enrolment to license typically takes 4–8 weeks." },
  { q: "Do you offer payment plans?", a: "Yes. We offer flexible payment options including installments. Discuss arrangements with our team at registration." },
  { q: "What if I fail the NTSA test on first attempt?", a: "Our 96% pass rate is very high, but if you don't pass, we provide additional coaching to address gaps before your re-test." },
  { q: "Do you provide vehicles for training?", a: "Yes. All training is in our well-maintained, dual-control Stega fleet. You don't need your own vehicle." },
  { q: "Can I choose my training schedule?", a: "Absolutely. We offer morning, afternoon, and weekend slots Mon–Sat. We'll fit around your lifestyle." },
  { q: "Are your instructors NTSA-certified?", a: "Yes. Every Stega instructor is fully certified and approved by the National Transport & Safety Authority of Kenya." },
];

export default function CoursesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 bg-[#0F1C3F] overflow-hidden">
        <div className="absolute inset-0 bg-grid-white" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DC2626]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-white/10 text-white/70 text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6">
            Our Programs
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.03]">
            6 Programs.
            <br />
            <span className="text-gradient-red">One Goal — Your License.</span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Every program includes theory, practical road sessions, and full
            NTSA test preparation — on real Nairobi roads with certified instructors.
          </p>
        </div>
      </section>

      {/* ── COURSE CARDS ─────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {courses.map((c, index) => (
            <div
              key={c.title}
              className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-5">
                {/* Image panel */}
                <div className="lg:col-span-2 relative h-60 lg:h-auto min-h-[220px] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${c.badgeStyle}`}>
                        {c.badge}
                      </span>
                    </div>
                    <div
                      className="inline-block text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-3"
                      style={{ backgroundColor: c.accent }}
                    >
                      {c.class}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight drop-shadow-lg">
                      {c.title}
                    </h2>
                    <div className="flex items-center gap-1.5 text-white/70 text-xs mt-2">
                      <IconClock className="w-3.5 h-3.5 flex-shrink-0" /> {c.duration}
                    </div>
                  </div>
                </div>

                {/* Details panel */}
                <div className="lg:col-span-3 p-7 sm:p-9">
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">{c.desc}</p>

                  <div className="bg-slate-50 rounded-xl p-4 mb-6 flex items-start gap-3">
                    <span className="text-[#DC2626] flex-shrink-0"><IconCheck className="w-4 h-4" /></span>
                    <div>
                      <span className="text-slate-500 text-xs uppercase font-bold tracking-wide block mb-1">Ideal For</span>
                      <p className="text-slate-700 text-sm">{c.ideal}</p>
                    </div>
                  </div>

                  <h4 className="text-slate-900 font-black text-xs uppercase tracking-widest mb-4">
                    What&apos;s Included
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5 mb-8">
                    {c.includes.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                          style={{ backgroundColor: c.accent }}
                        />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-md hover:-translate-y-0.5 text-sm"
                    style={{ backgroundColor: c.accent }}
                  >
                    Enrol in This Program →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#1D4DA1]/10 text-[#1D4DA1] text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
              Got Questions?
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              Frequently Asked <span className="text-gradient-red">Questions</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="bg-white border border-slate-100 rounded-2xl p-6 hover:border-[#DC2626]/20 hover:shadow-sm transition-all"
              >
                <h4 className="text-slate-900 font-bold mb-3 flex items-start gap-3 text-sm sm:text-base">
                  <span className="w-6 h-6 bg-[#DC2626] text-white rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">Q</span>
                  {f.q}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed pl-9">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-[#1D4DA1] to-[#0F1C3F] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Not Sure Which Course?
          </h2>
          <p className="text-blue-200 mb-10 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Our team is happy to help you choose the right program. Call us or register and
            we&apos;ll guide you to your perfect fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-0.5"
            >
              Register Now — Free
            </Link>
            <a
              href="tel:0722213810"
              className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-all hover:bg-white/10"
            >
              <IconPhone className="w-4 h-4" /> Call: 0722 213 810
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
