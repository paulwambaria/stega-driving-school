"use client";

import { useState } from "react";
import Link from "next/link";
import { IconCheckCircle, IconMapPin, IconCheck } from "@/components/Icons";

const courseOptions = [
  { value: "manual-b2", label: "Manual Driving Course (Class B2)" },
  { value: "automatic-b1", label: "Automatic Driving Course (Class B1)" },
  { value: "combined-b1b2", label: "Combined Course (Class B1/B2)" },
  { value: "motorcycle-a2", label: "Motorcycle Training (Class A2)" },
  { value: "truck-c1", label: "Light Truck Training (Class C1)" },
  { value: "psv-professional", label: "PSV / Professional Driving (Class D1, D2, B3)" },
  { value: "unsure", label: "Not Sure — Help Me Choose" },
];

const scheduleOptions = [
  { value: "morning", label: "Morning (9 AM – 12 PM)" },
  { value: "afternoon", label: "Afternoon (12 PM – 4 PM)" },
  { value: "weekend", label: "Weekend Only (Sat)" },
  { value: "flexible", label: "Flexible — Any Time" },
];

const steps = [
  { step: "01", title: "Register", desc: "Submit your details online.", color: "text-[#DC2626]" },
  { step: "02", title: "Confirmation", desc: "We call you within 24 hours.", color: "text-[#1D4DA1]" },
  { step: "03", title: "First Lesson", desc: "Start training at your scheduled time.", color: "text-[#DC2626]" },
  { step: "04", title: "Get Licensed", desc: "Pass NTSA test and drive!", color: "text-[#1D4DA1]" },
];

export default function BookPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    course: "",
    schedule: "",
    experience: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-slate-50 border border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/10 text-slate-900 placeholder-slate-400 rounded-xl px-4 py-3 text-sm outline-none transition-all";

  const sectionNumClass =
    "w-5 h-5 bg-[#DC2626]/15 rounded-full flex items-center justify-center text-[#DC2626] text-xs font-black flex-shrink-0";

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 bg-gradient-to-br from-[#1D4DA1] to-[#163B7C] overflow-hidden">
        <div className="absolute inset-0 bg-grid-white" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-white/15 text-white text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
            Enrolment
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Book Your{" "}
            <span className="text-[#DC2626]">First Lesson</span>
          </h1>
          <p className="text-blue-100 text-lg sm:text-xl max-w-xl mx-auto">
            Fill in your details and we&apos;ll reach out within 24 hours to
            confirm your schedule and get you started.
          </p>
        </div>
      </section>

      {/* ─── PROCESS STRIP ─────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {steps.map((s) => (
              <div key={s.step} className="py-5 px-5 text-center">
                <div className={`font-black text-sm mb-1 ${s.color}`}>{s.step}</div>
                <div className="text-slate-900 font-semibold text-sm">{s.title}</div>
                <div className="text-slate-400 text-xs mt-0.5 hidden sm:block">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── FORM + SIDEBAR ────────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-9 shadow-sm">
                <h2 className="text-2xl font-black text-slate-900 mb-2">
                  Registration Form
                </h2>
                <p className="text-slate-500 text-sm mb-8">
                  All fields marked with * are required. We will contact you
                  within 24 hours of submission.
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-20 h-20 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mb-6">
                      <IconCheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-slate-900 font-black text-2xl mb-3">
                      You&apos;re Registered!
                    </h3>
                    <p className="text-slate-500 text-sm max-w-sm mb-2">
                      Welcome to Stega Driving School,{" "}
                      <strong className="text-slate-900">{formData.fullName}</strong>!
                      Our team will call you on{" "}
                      <strong className="text-slate-900">{formData.phone}</strong>{" "}
                      within 24 hours to confirm your schedule.
                    </p>
                    <p className="text-slate-400 text-xs mb-8">
                      If you don&apos;t hear from us, call us directly on{" "}
                      <a href="tel:0722213810" className="text-[#DC2626] hover:text-[#B91C1C]">
                        0722 213 810
                      </a>
                    </p>
                    <Link
                      href="/courses"
                      className="text-[#1D4DA1] hover:text-[#163B7C] text-sm font-semibold transition-colors"
                    >
                      Review our programs while you wait →
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Personal Info */}
                    <div>
                      <h3 className="text-slate-900 font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className={sectionNumClass}>1</span>
                        Personal Information
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            placeholder="John Kamau"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="07XX XXX XXX"
                            className={inputClass}
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="block text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@email.com (optional)"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="h-px bg-slate-100" />

                    {/* Course Selection */}
                    <div>
                      <h3 className="text-slate-900 font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className={sectionNumClass}>2</span>
                        Course & Schedule
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1.5">
                            Course Program *
                          </label>
                          <select
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                            className={inputClass}
                          >
                            <option value="">Select a course</option>
                            {courseOptions.map((o) => (
                              <option key={o.value} value={o.value}>
                                {o.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1.5">
                            Preferred Schedule *
                          </label>
                          <select
                            name="schedule"
                            value={formData.schedule}
                            onChange={handleChange}
                            required
                            className={inputClass}
                          >
                            <option value="">Select a schedule</option>
                            {scheduleOptions.map((o) => (
                              <option key={o.value} value={o.value}>
                                {o.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="block text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1.5">
                          Driving Experience *
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          required
                          className={inputClass}
                        >
                          <option value="">Select your experience level</option>
                          <option value="none">No experience — complete beginner</option>
                          <option value="some">Some experience — driven before but not licensed</option>
                          <option value="licensed">Already licensed — upgrading to new class</option>
                        </select>
                      </div>
                    </div>

                    <div className="h-px bg-slate-100" />

                    {/* Notes */}
                    <div>
                      <h3 className="text-slate-900 font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className={sectionNumClass}>3</span>
                        Additional Notes
                      </h3>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Any special requirements, questions, or anything we should know before your first lesson..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#DC2626] hover:bg-[#B91C1C] disabled:opacity-60 disabled:cursor-not-allowed text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-red-200 text-base tracking-wide"
                    >
                      {loading ? "Submitting..." : "Register Now →"}
                    </button>
                    <p className="text-slate-400 text-xs text-center">
                      We will call you within 24 hours to confirm your
                      enrolment. No payment required to register.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Why register */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-4">Why Register with Stega?</h3>
                <ul className="space-y-3">
                  {[
                    "96% first-attempt NTSA pass rate",
                    "Flexible morning, afternoon & weekend slots",
                    "Patient, NTSA-certified instructors",
                    "Well-maintained training vehicles",
                    "Affordable pricing, no hidden charges",
                    "Flexible payment options",
                  ].map((p, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-500">
                      <span className="text-[#DC2626] flex-shrink-0 mt-0.5"><IconCheck className="w-3.5 h-3.5" /></span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact card */}
              <div className="bg-[#1D4DA1] rounded-2xl p-6">
                <p className="text-white font-bold mb-1">Prefer to call us?</p>
                <p className="text-blue-200 text-sm mb-4">
                  Speak directly with our team.
                </p>
                <a
                  href="tel:0722213810"
                  className="text-2xl font-black text-white hover:text-blue-100 transition-colors block"
                >
                  0722 213 810
                </a>
                <p className="text-blue-300 text-xs mt-1">Mon–Sat · 9AM–6PM</p>
                <a
                  href="mailto:stegadrivingschool@gmail.com"
                  className="block text-blue-200 hover:text-white text-xs mt-3 transition-colors"
                >
                  stegadrivingschool@gmail.com
                </a>
              </div>

              {/* Visit us */}
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <div className="text-[#DC2626] mb-3"><IconMapPin className="w-7 h-7" /></div>
                <h4 className="text-slate-900 font-bold mb-2">Visit Us</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Mfangano Street, Nairobi
                  <br />
                  Walk-ins welcome during business hours.
                </p>
                <a
                  href="https://maps.google.com/?q=Mfangano+Street+Nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#DC2626] hover:text-[#B91C1C] text-sm font-semibold mt-3 transition-colors"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
