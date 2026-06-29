import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Driving in Kenya — Blog | NTSA Rules, Licensing & Road Safety Guides",
  description:
    "Expert guides on everything driving in Kenya — how to get your NTSA driving licence, Kenya road traffic rules 2025, highway code, PSV licensing, manual vs automatic, and tips to pass your driving test first time.",
  keywords: [
    "Kenya driving blog",
    "NTSA driving licence guide Kenya",
    "Kenya road rules 2025",
    "driving tips Nairobi",
    "NTSA test guide Kenya",
    "Kenya highway code explained",
    "PSV licence Kenya guide",
  ],
  alternates: { canonical: "https://stegadrivingschool.com/blog" },
  openGraph: {
    title: "Driving in Kenya — Blog | Stega Driving School",
    description:
      "Expert guides on NTSA licensing, Kenya road rules, highway code, and driving tips from Nairobi's most trusted driving school.",
    url: "https://stegadrivingschool.com/blog",
  },
};

const categoryColors: Record<string, string> = {
  Licensing: "bg-[#1D4DA1] text-white",
  "Road Rules": "bg-[#DC2626] text-white",
  "Driving Test": "bg-emerald-600 text-white",
  "Highway Code": "bg-amber-600 text-white",
  Courses: "bg-[#1D4DA1] text-white",
  PSV: "bg-slate-700 text-white",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Stega Driving School Blog",
    description: "Expert guides on driving in Kenya — NTSA licensing, road rules, highway code, and driving tips.",
    url: "https://stegadrivingschool.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Stega Driving School",
      url: "https://stegadrivingschool.com",
    },
    blogPost: blogPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      datePublished: p.date,
      dateModified: p.updated,
      url: `https://stegadrivingschool.com/blog/${p.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 bg-[#0F1C3F] overflow-hidden">
        <div className="absolute inset-0 bg-grid-white" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DC2626]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1D4DA1]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-white/10 text-white/70 text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6">
            Stega Knowledge Hub
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.03]">
            Driving in Kenya.{" "}
            <span className="text-gradient-red">Expert Guides.</span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Everything you need to know about NTSA licensing, Kenya road traffic
            rules, highway code, and how to pass your driving test — written by
            Nairobi&apos;s most trusted driving school.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            {["NTSA Licensing", "Road Rules", "Highway Code", "Driving Test", "PSV", "Manual vs Auto"].map((tag) => (
              <span key={tag} className="bg-white/8 border border-white/12 text-white/60 px-4 py-1.5 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-slate-100">
            {[
              { v: `${blogPosts.length}`, l: "Expert Articles" },
              { v: "2025", l: "Latest NTSA Rules" },
              { v: "Free", l: "Always & Forever" },
            ].map((s) => (
              <div key={s.l} className="py-5 px-6 text-center">
                <div className="text-2xl font-black text-[#DC2626]">{s.v}</div>
                <div className="text-slate-500 text-sm font-medium mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURED POST ────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-slate-900 font-black text-2xl flex items-center gap-3">
              <span className="w-4 h-0.5 bg-[#DC2626] rounded-full" />
              Featured Guide
            </h2>
          </div>

          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="grid lg:grid-cols-2 bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {/* Image */}
              <div className="relative h-64 lg:h-full min-h-[280px] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0F1C3F]/20" />
                <div className="absolute top-4 left-4">
                  <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${featured.categoryColor}`}>
                    {featured.category}
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-slate-400 text-xs font-semibold mb-4">
                  <span>{new Date(featured.updated).toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "numeric" })}</span>
                  <span>·</span>
                  <span>{featured.readTime} min read</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight group-hover:text-[#DC2626] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.toc.slice(0, 4).map((t) => (
                    <span key={t.id} className="text-xs bg-slate-50 border border-slate-100 text-slate-500 px-3 py-1 rounded-full">
                      {t.title}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-[#DC2626] font-bold text-sm group-hover:gap-3 transition-all">
                  Read Full Guide
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── ALL ARTICLES ─────────────────────────────────────── */}
      <section className="py-8 pb-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 font-black text-2xl flex items-center gap-3 mb-8">
            <span className="w-4 h-0.5 bg-[#1D4DA1] rounded-full" />
            All Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-widest ${post.categoryColor}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-slate-400 text-[11px] font-semibold mb-3">
                      <span>{new Date(post.updated).toLocaleDateString("en-KE", { year: "numeric", month: "short", day: "numeric" })}</span>
                      <span>·</span>
                      <span>{post.readTime} min read</span>
                    </div>
                    <h3 className="text-slate-900 font-black text-base leading-tight mb-3 group-hover:text-[#DC2626] transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[#1D4DA1] font-bold text-xs group-hover:gap-2.5 transition-all">
                      Read Article
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-[#DC2626] to-[#991B1B] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Ready to Start Driving?
          </h2>
          <p className="text-red-100 text-base sm:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Reading is good. Driving is better. Register at Stega Driving School today — it&apos;s free to enrol and we have 5 branches across Nairobi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-[#DC2626] hover:bg-red-50 font-black px-8 py-4 rounded-xl transition-all shadow-2xl hover:-translate-y-0.5 text-sm sm:text-base"
            >
              Register Free — No Payment Needed →
            </Link>
            <a
              href="tel:0722213810"
              className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl transition-all hover:bg-white/10 text-sm sm:text-base"
            >
              Call 0722 213 810
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
