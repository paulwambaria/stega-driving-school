"use client";

import { useState } from "react";
import type { Metadata } from "next";
import {
  IconMapPin,
  IconPhone,
  IconWhatsApp,
  IconClock,
  IconMail,
  IconBuilding,
  IconTree,
  IconPlane,
  IconLeaf,
  IconHomes,
  IconCheckCircle,
  IconCheck,
} from "@/components/Icons";

const branches = [
  {
    name: "Nairobi CBD Branch",
    tag: "Main Branch",
    tagColor: "bg-[#DC2626] text-white",
    address: "Reli Co-op House, Mfangano Street",
    area: "Nairobi CBD",
    icon: <IconBuilding className="w-6 h-6" />,
    accent: "border-[#DC2626]/30 bg-red-50",
    accentText: "text-[#DC2626]",
    mapSrc:
      "https://maps.google.com/maps?q=Reli+Coop+House+Mfangano+Street+Nairobi+CBD&output=embed&z=16",
    mapsLink: "https://maps.google.com/?q=Reli+Coop+House+Mfangano+Street+Nairobi",
  },
  {
    name: "Jevanjee Branch",
    tag: "CBD",
    tagColor: "bg-[#1D4DA1] text-white",
    address: "Jevanjee Gardens Area",
    area: "Nairobi CBD",
    icon: <IconTree className="w-6 h-6" />,
    accent: "border-[#1D4DA1]/20 bg-blue-50",
    accentText: "text-[#1D4DA1]",
    mapSrc:
      "https://maps.google.com/maps?q=Jevanjee+Gardens+Nairobi+CBD&output=embed&z=16",
    mapsLink: "https://maps.google.com/?q=Jevanjee+Gardens+Nairobi",
  },
  {
    name: "Embakasi Branch",
    tag: "East Nairobi",
    tagColor: "bg-slate-700 text-white",
    address: "Embakasi, Nairobi",
    area: "Embakasi",
    icon: <IconPlane className="w-6 h-6" />,
    accent: "border-slate-200 bg-slate-50",
    accentText: "text-slate-700",
    mapSrc:
      "https://maps.google.com/maps?q=Embakasi+Nairobi+Kenya&output=embed&z=14",
    mapsLink: "https://maps.google.com/?q=Embakasi+Nairobi",
  },
  {
    name: "Savannah Branch",
    tag: "Nairobi",
    tagColor: "bg-emerald-600 text-white",
    address: "Savannah, Nairobi",
    area: "Savannah",
    icon: <IconLeaf className="w-6 h-6" />,
    accent: "border-emerald-200 bg-emerald-50",
    accentText: "text-emerald-700",
    mapSrc:
      "https://maps.google.com/maps?q=Savannah+Estate+Nairobi+Kenya&output=embed&z=14",
    mapsLink: "https://maps.google.com/?q=Savannah+Nairobi",
  },
  {
    name: "Kayole Branch",
    tag: "East Nairobi",
    tagColor: "bg-amber-600 text-white",
    address: "Kayole, Nairobi",
    area: "Kayole",
    icon: <IconHomes className="w-6 h-6" />,
    accent: "border-amber-200 bg-amber-50",
    accentText: "text-amber-700",
    mapSrc:
      "https://maps.google.com/maps?q=Kayole+Nairobi+Kenya&output=embed&z=14",
    mapsLink: "https://maps.google.com/?q=Kayole+Nairobi",
  },
];

export default function ContactPage() {
  const [activeBranch, setActiveBranch] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-slate-50 border border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/10 text-slate-900 placeholder-slate-400 rounded-xl px-4 py-3 text-sm outline-none transition-all";

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 bg-[#0F1C3F] overflow-hidden">
        <div className="absolute inset-0 bg-grid-white" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DC2626]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-white/10 text-white/70 text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
            Contact Us
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.03]">
            Find Us Across{" "}
            <span className="text-gradient-red">Nairobi.</span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            5 convenient branches so you never have to travel far to start
            your driving journey.
          </p>

          {/* Contact chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a
              href="tel:0722213810"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
            >
              <span>📞</span> 0722 213 810
            </a>
            <a
              href="https://wa.me/254750323372"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/30 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
            >
              <span>💬</span> WhatsApp: 0750 323 372
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ────────────────────────────── */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              {
                icon: <IconMapPin className="w-5 h-5" />,
                label: "5 Branches",
                value: "Across Nairobi",
                color: "text-[#DC2626]",
              },
              {
                icon: <IconPhone className="w-5 h-5" />,
                label: "Call Us",
                value: "0722 213 810",
                color: "text-[#1D4DA1]",
                href: "tel:0722213810",
              },
              {
                icon: <IconWhatsApp className="w-5 h-5" />,
                label: "WhatsApp",
                value: "0750 323 372",
                color: "text-[#25D366]",
                href: "https://wa.me/254750323372",
              },
              {
                icon: <IconClock className="w-5 h-5" />,
                label: "Working Hours",
                value: "Mon – Sat · 9AM–6PM",
                color: "text-[#DC2626]",
              },
            ].map((c, i) => (
              <div
                key={c.label}
                className={`py-7 px-5 text-center ${i < 3 ? "border-r border-slate-100" : ""}`}
              >
                <div className={`mb-1.5 flex justify-center ${c.color}`}>{c.icon}</div>
                <div className="text-slate-400 text-xs font-semibold uppercase tracking-wide mb-0.5">
                  {c.label}
                </div>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("https") ? "_blank" : undefined}
                    rel={c.href.startsWith("https") ? "noopener noreferrer" : undefined}
                    className={`font-bold text-sm sm:text-base hover:underline ${c.color}`}
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="font-bold text-slate-700 text-sm sm:text-base">
                    {c.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANCHES + MAP ────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#DC2626]/10 text-[#DC2626] text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-4">
              Our Locations
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              5 Branches,{" "}
              <span className="text-gradient-red">One Standard.</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
              Every Stega branch delivers the same NTSA-approved training,
              certified instructors, and dual-control fleet.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-3 mb-8">
            {branches.map((b, i) => (
              <button
                key={b.name}
                onClick={() => setActiveBranch(i)}
                className={`text-left p-4 rounded-2xl border-2 transition-all ${
                  activeBranch === i
                    ? "border-[#DC2626] bg-white shadow-lg shadow-red-50 scale-[1.02]"
                    : `${b.accent} border-transparent hover:border-slate-200`
                }`}
              >
                <div className="mb-2">{b.icon}</div>
                <span
                  className={`inline-block text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest mb-2 ${b.tagColor}`}
                >
                  {b.tag}
                </span>
                <p className="text-slate-900 font-bold text-sm leading-tight">
                  {b.name}
                </p>
                <p className={`text-xs mt-1 font-medium ${activeBranch === i ? b.accentText : "text-slate-400"}`}>
                  {b.address}
                </p>
              </button>
            ))}
          </div>

          {/* Map panel */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100">
            {/* Map header */}
            <div className="px-6 py-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span>{branches[activeBranch].icon}</span>
                  <h3 className="text-slate-900 font-black text-lg">
                    {branches[activeBranch].name}
                  </h3>
                  <span
                    className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest ${branches[activeBranch].tagColor}`}
                  >
                    {branches[activeBranch].tag}
                  </span>
                </div>
                <p className="text-slate-500 text-sm">
                  {branches[activeBranch].address} &middot;{" "}
                  {branches[activeBranch].area}
                </p>
              </div>
              <a
                href={branches[activeBranch].mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1D4DA1] hover:bg-[#163B7C] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all flex-shrink-0"
              >
                Open in Google Maps →
              </a>
            </div>

            {/* Embedded map */}
            <div className="relative h-[400px] sm:h-[480px]">
              <iframe
                src={branches[activeBranch].mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map — ${branches[activeBranch].name}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM + INFO ───────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Contact Form */}
            <div className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-slate-500 text-sm mb-7">
                Fill in the form and we&apos;ll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mb-5">
                    <IconCheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-slate-900 font-bold text-xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-500 text-sm max-w-xs">
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-6 text-[#DC2626] hover:text-[#B91C1C] text-sm font-semibold transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-600 text-xs font-semibold uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 text-xs font-semibold uppercase tracking-wider mb-2">
                        Phone *
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
                  <div>
                    <label className="block text-slate-600 text-xs font-semibold uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 text-xs font-semibold uppercase tracking-wider mb-2">
                      Preferred Branch
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    >
                      <option value="">Select a branch or topic</option>
                      <option value="cbd">CBD Branch — Mfangano Street</option>
                      <option value="jevanjee">Jevanjee Branch</option>
                      <option value="embakasi">Embakasi Branch</option>
                      <option value="savannah">Savannah Branch</option>
                      <option value="kayole">Kayole Branch</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-600 text-xs font-semibold uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="How can we help you?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#DC2626] hover:bg-[#B91C1C] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md shadow-red-200 text-sm"
                  >
                    {loading ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              )}
            </div>

            {/* Right info panel */}
            <div className="space-y-5">

              {/* Call / WhatsApp CTAs */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="tel:0722213810"
                  className="bg-[#0F1C3F] hover:bg-[#1a2d5a] text-white rounded-2xl p-5 text-center transition-all hover:-translate-y-0.5 shadow-md group"
                >
                  <div className="text-3xl mb-2">📞</div>
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-wide mb-1">
                    Call Us
                  </p>
                  <p className="text-white font-black text-lg">0722 213 810</p>
                  <p className="text-white/40 text-xs mt-1">Mon – Sat · 9AM–6PM</p>
                </a>
                <a
                  href="https://wa.me/254750323372"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-2xl p-5 text-center transition-all hover:-translate-y-0.5 shadow-md"
                >
                  <div className="text-3xl mb-2">💬</div>
                  <p className="text-white/80 text-xs font-semibold uppercase tracking-wide mb-1">
                    WhatsApp
                  </p>
                  <p className="text-white font-black text-lg">0750 323 372</p>
                  <p className="text-white/70 text-xs mt-1">Chat with us now</p>
                </a>
              </div>

              {/* Before you visit */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-4 flex items-center gap-2">
                  <span className="text-[#DC2626]"><IconCheck className="w-4 h-4" /></span> Before You Visit
                </h3>
                <ul className="space-y-3">
                  {[
                    "Open Monday – Saturday, 9AM to 6PM at all branches",
                    "Walk-ins welcome — no appointment needed to enquire",
                    "Bring your National ID for registration",
                    "We accept M-Pesa, bank transfer, and cash",
                    "Flexible payment plans — pay in installments",
                    "Our instructors speak Swahili and English",
                  ].map((tip, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-500"
                    >
                      <span className="text-[#DC2626] flex-shrink-0 mt-0.5">
                        <IconCheck className="w-3.5 h-3.5" />
                      </span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Email */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 bg-[#1D4DA1] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <IconMail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:stegadrivingschool@gmail.com"
                    className="text-[#1D4DA1] font-bold text-sm hover:underline break-all"
                  >
                    stegadrivingschool@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
