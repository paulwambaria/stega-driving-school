import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { blogPosts, getBlogPost, type ContentBlock } from "@/lib/blog-posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: "Stega Driving School", url: "https://stegadrivingschool.com" }],
    alternates: { canonical: `https://stegadrivingschool.com/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://stegadrivingschool.com/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
      authors: ["Stega Driving School"],
    },
  };
}

function renderBlock(block: ContentBlock, idx: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={idx}
          id={block.id}
          className="text-2xl sm:text-3xl font-black text-slate-900 mt-12 mb-5 scroll-mt-24 leading-tight"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={idx} className="text-xl font-black text-slate-800 mt-7 mb-4 leading-tight">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={idx} className="text-slate-600 leading-relaxed mb-5 text-base">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={idx} className="space-y-2.5 mb-6 pl-0">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
              <span className="w-5 h-5 bg-[#DC2626]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="w-1.5 h-1.5 bg-[#DC2626] rounded-full" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={idx} className="space-y-3 mb-6 pl-0">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
              <span className="w-6 h-6 bg-[#1D4DA1] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[11px] font-black">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "tip":
      return (
        <div key={idx} className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6 flex gap-3">
          <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="text-emerald-800 font-bold text-sm mb-1">{block.title}</p>
            <p className="text-emerald-700 text-sm leading-relaxed">{block.text}</p>
          </div>
        </div>
      );
    case "warning":
      return (
        <div key={idx} className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6 flex gap-3">
          <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="text-amber-800 font-bold text-sm mb-1">{block.title}</p>
            <p className="text-amber-700 text-sm leading-relaxed">{block.text}</p>
          </div>
        </div>
      );
    case "callout": {
      const colors = {
        red: "bg-red-50 border-red-200 text-red-800 text-red-700",
        blue: "bg-blue-50 border-blue-200 text-blue-800 text-blue-700",
        green: "bg-green-50 border-green-200 text-green-800 text-green-700",
        amber: "bg-amber-50 border-amber-200 text-amber-800 text-amber-700",
      };
      const c = colors[block.color];
      const [bg, border, titleC, textC] = c.split(" ");
      return (
        <div key={idx} className={`${bg} border ${border} rounded-xl p-5 mb-6`}>
          <p className={`${titleC} font-bold text-sm mb-2`}>{block.title}</p>
          <p className={`${textC} text-sm leading-relaxed`}>{block.text}</p>
        </div>
      );
    }
    case "table":
      return (
        <div key={idx} className="overflow-x-auto mb-6 rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0F1C3F]">
                {block.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left text-white font-bold text-xs uppercase tracking-wide">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-slate-600 border-t border-slate-100 leading-relaxed">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "keypoints":
      return (
        <div key={idx} className="bg-[#0F1C3F] rounded-xl p-5 mb-6">
          <p className="text-white font-black text-sm mb-3 uppercase tracking-wide">{block.title}</p>
          <ul className="space-y-2">
            {block.points.map((pt, i) => (
              <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm">
                <span className="text-[#DC2626] flex-shrink-0 mt-0.5">▸</span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://stegadrivingschool.com${post.image}`,
    datePublished: post.date,
    dateModified: post.updated,
    author: {
      "@type": "Organization",
      name: "Stega Driving School",
      url: "https://stegadrivingschool.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Stega Driving School",
      logo: {
        "@type": "ImageObject",
        url: "https://stegadrivingschool.com/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://stegadrivingschool.com/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://stegadrivingschool.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://stegadrivingschool.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://stegadrivingschool.com/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 bg-[#0F1C3F] overflow-hidden">
        <div className="absolute inset-0 bg-grid-white" />
        <div className="absolute inset-0">
          <Image src={post.image} alt={post.imageAlt} fill className="object-cover opacity-15" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C3F] via-[#0F1C3F]/80 to-[#0F1C3F]/60" />
        <div className="relative max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/40 text-xs font-semibold mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>›</span>
            <span className="text-white/60">{post.category}</span>
          </nav>

          <span className={`inline-block text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-5 ${post.categoryColor}`}>
            {post.category}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.07]">
            {post.title}
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Updated {new Date(post.updated).toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {post.readTime} min read
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Stega Driving School
            </span>
          </div>
        </div>
      </section>

      {/* ── CONTENT + SIDEBAR ────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-10">

            {/* ── MAIN CONTENT ─────────────────────────── */}
            <article className="lg:col-span-3">
              {post.content.map((block, idx) => renderBlock(block, idx))}

              {/* ── FAQ SECTION ──────────────────────── */}
              <div className="mt-14 pt-10 border-t border-slate-100">
                <h2 className="text-2xl font-black text-slate-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {post.faqs.map((faq, i) => (
                    <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-6 hover:border-[#DC2626]/20 hover:shadow-sm transition-all">
                      <h3 className="text-slate-900 font-bold text-base mb-3 flex items-start gap-3">
                        <span className="w-6 h-6 bg-[#DC2626] text-white rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">Q</span>
                        {faq.q}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed pl-9">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── AUTHOR BOX ───────────────────────── */}
              <div className="mt-10 bg-[#0F1C3F] rounded-2xl p-6 flex items-start gap-4">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <Image src="/images/logo.png" alt="Stega Driving School" width={48} height={32} className="w-auto h-8" />
                </div>
                <div>
                  <p className="text-white font-black mb-1">Stega Driving School</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Nairobi&apos;s most trusted NTSA-approved driving school since 1995. 5 branches across Nairobi.
                    96% first-attempt pass rate. 1,000+ licensed graduates.
                  </p>
                  <Link href="/about" className="inline-flex items-center gap-1 text-[#DC2626] text-xs font-semibold mt-2 hover:text-red-400 transition-colors">
                    Learn about us →
                  </Link>
                </div>
              </div>

              {/* ── TAGS ─────────────────────────────── */}
              <div className="mt-8 flex flex-wrap gap-2">
                {post.keywords.slice(0, 5).map((kw) => (
                  <span key={kw} className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full border border-slate-200">
                    {kw}
                  </span>
                ))}
              </div>
            </article>

            {/* ── SIDEBAR ──────────────────────────────── */}
            <aside className="lg:col-span-1 space-y-6">

              {/* TOC */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sticky top-24">
                <p className="text-slate-900 font-black text-sm uppercase tracking-wide mb-4">In This Guide</p>
                <nav className="space-y-1">
                  {post.toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center gap-2 text-slate-500 hover:text-[#DC2626] text-sm py-1.5 transition-colors group"
                    >
                      <span className="w-1 h-1 bg-slate-300 group-hover:bg-[#DC2626] rounded-full flex-shrink-0 transition-colors" />
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* CTA card */}
              <div className="bg-[#DC2626] rounded-2xl p-5 text-center">
                <p className="text-white font-black text-lg mb-2 leading-tight">Ready to Drive?</p>
                <p className="text-red-100 text-xs mb-4 leading-relaxed">
                  Register at Stega Driving School — 5 branches, free enrolment.
                </p>
                <Link
                  href="/book"
                  className="block bg-white text-[#DC2626] font-black px-4 py-3 rounded-xl text-sm hover:bg-red-50 transition-colors"
                >
                  Register Free →
                </Link>
                <a
                  href="tel:0722213810"
                  className="block text-red-100 hover:text-white text-xs font-semibold mt-3 transition-colors"
                >
                  Call 0722 213 810
                </a>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/254750323372"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#25D366] rounded-2xl p-4 text-center hover:bg-[#1ebe5d] transition-colors"
              >
                <p className="text-white font-bold text-sm">WhatsApp Us</p>
                <p className="text-white/80 text-xs mt-0.5">0750 323 372</p>
              </a>

              {/* Branches */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <p className="text-slate-900 font-bold text-sm mb-3">5 Nairobi Branches</p>
                <ul className="space-y-1.5 text-xs text-slate-500">
                  {["CBD — Reli Co-op House, Mfangano St", "Jevanjee Gardens", "Embakasi", "Savannah", "Kayole"].map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#DC2626] rounded-full flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block text-center text-[#1D4DA1] text-xs font-bold mt-3 hover:text-[#163B7C] transition-colors">
                  View Maps & Directions →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── RELATED ARTICLES ─────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
            <span className="w-4 h-0.5 bg-[#DC2626] rounded-full" />
            More Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((rp) => (
              <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group">
                <article className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-40 overflow-hidden">
                    <Image src={rp.image} alt={rp.imageAlt} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className={`absolute top-3 left-3 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-widest ${rp.categoryColor}`}>
                      {rp.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-slate-400 text-[11px] font-semibold mb-2">{rp.readTime} min read</p>
                    <h3 className="text-slate-900 font-black text-sm leading-tight group-hover:text-[#DC2626] transition-colors line-clamp-2">
                      {rp.title}
                    </h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0F1C3F]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm uppercase tracking-[0.2em] font-semibold mb-3">Start Your Journey</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">
            Turn Knowledge Into Your{" "}
            <span className="text-[#DC2626]">NTSA Licence.</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
            Stega Driving School has 5 branches across Nairobi. 96% pass rate. NTSA-approved since 1995. Register free — no payment required to enrol.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black px-8 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-0.5"
            >
              Register Free Now →
            </Link>
            <Link
              href="/courses"
              className="border-2 border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:bg-white/8"
            >
              View All 6 Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
