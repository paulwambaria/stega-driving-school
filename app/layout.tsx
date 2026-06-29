import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const BASE_URL = "https://stegadrivingschool.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Stega Driving School Nairobi | NTSA-Approved | 96% Pass Rate",
    template: "%s | Stega Driving School Nairobi",
  },
  description:
    "Nairobi's most trusted NTSA-approved driving school. 5 branches: CBD (Mfangano St), Jevanjee, Embakasi, Savannah & Kayole. 96% first-attempt pass rate. 1,000+ graduates since 1995. Call 0722 213 810.",
  keywords: [
    "driving school Nairobi",
    "NTSA approved driving school Kenya",
    "learn to drive Nairobi",
    "driving lessons Nairobi",
    "manual driving course Nairobi",
    "automatic driving course Nairobi",
    "motorcycle training Nairobi",
    "PSV driving course Kenya",
    "light truck training Nairobi",
    "driving licence Kenya",
    "Stega Driving School",
    "Stega driving school Nairobi",
    "driving school Mfangano Street",
    "driving school Embakasi",
    "driving school Kayole",
    "driving school Jevanjee",
    "driving school Savannah Nairobi",
    "NTSA test preparation Nairobi",
    "best driving school Nairobi",
    "affordable driving school Nairobi",
    "Class B1 B2 driving course Kenya",
    "Class A2 motorcycle licence Kenya",
    "PSV matatu training Kenya",
    "driving school near me Nairobi",
    "NTSA test registration Kenya",
  ],
  authors: [{ name: "Stega Driving School", url: BASE_URL }],
  creator: "Stega Driving School",
  publisher: "Stega Driving School",
  category: "Education",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: BASE_URL,
    siteName: "Stega Driving School",
    title: "Stega Driving School Nairobi | NTSA-Approved | 96% Pass Rate",
    description:
      "Nairobi's most trusted NTSA-approved driving school. 5 branches across Nairobi. 96% first-attempt pass rate. Call 0722 213 810.",
    images: [
      {
        url: "/images/slider3.jpg",
        width: 1200,
        height: 630,
        alt: "Stega Driving School — Nairobi's Most Trusted NTSA-Approved Driving School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stega Driving School Nairobi | NTSA-Approved | 96% Pass Rate",
    description:
      "Nairobi's most trusted driving school. 5 branches: CBD, Jevanjee, Embakasi, Savannah & Kayole. Call 0722 213 810.",
    images: ["/images/slider3.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  other: {
    "geo.region": "KE-30",
    "geo.placename": "Nairobi, Kenya",
    "geo.position": "-1.2869;36.8195",
    ICBM: "-1.2869, 36.8195",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["DrivingSchool", "LocalBusiness"],
      "@id": `${BASE_URL}/#organization`,
      name: "Stega Driving School",
      alternateName: ["Stega Driving", "Stega School of Motoring"],
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logo.png`,
      },
      image: `${BASE_URL}/images/slider3.jpg`,
      description:
        "Nairobi's most trusted NTSA-approved driving school since 1995. 5 branches across Nairobi — CBD (Mfangano Street), Jevanjee, Embakasi, Savannah and Kayole. 96% first-attempt NTSA pass rate. 1,000+ licensed graduates.",
      foundingDate: "1995",
      telephone: "+254722213810",
      email: "stegadrivingschool@gmail.com",
      priceRange: "KSh",
      currenciesAccepted: "KES",
      paymentAccepted: "Cash, M-Pesa, Bank Transfer",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Reli Co-op House, Mfangano Street",
        addressLocality: "Nairobi CBD",
        addressRegion: "Nairobi County",
        postalCode: "00100",
        addressCountry: "KE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -1.2869,
        longitude: 36.8195,
      },
      hasMap: "https://maps.google.com/?q=Reli+Coop+House+Mfangano+Street+Nairobi",
      areaServed: [
        { "@type": "City", name: "Nairobi" },
        { "@type": "Neighborhood", name: "Nairobi CBD" },
        { "@type": "Neighborhood", name: "Embakasi" },
        { "@type": "Neighborhood", name: "Kayole" },
        { "@type": "Neighborhood", name: "Savannah" },
        { "@type": "Neighborhood", name: "Jevanjee" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
        bestRating: "5",
        worstRating: "1",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "NTSA-Approved Driving Courses",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Manual Driving Course — Class B2",
              description: "Master clutch control, gear shifting, and confident driving in Nairobi traffic. Includes theory, practical, and NTSA test preparation.",
              provider: { "@id": `${BASE_URL}/#organization` },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Automatic Driving Course — Class B1",
              description: "Beginner-friendly automatic driving course. Get licensed faster with focus on road awareness and confidence.",
              provider: { "@id": `${BASE_URL}/#organization` },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Combined Course — Class B1/B2",
              description: "Get licensed for both manual and automatic vehicles. Best value — dual certification in one program.",
              provider: { "@id": `${BASE_URL}/#organization` },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Motorcycle Training — Class A2",
              description: "Comprehensive motorcycle training from balance to defensive riding on Nairobi roads.",
              provider: { "@id": `${BASE_URL}/#organization` },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Light Truck Training — Class C1",
              description: "Commercial light truck operation, load management, and NTSA test preparation for logistics and delivery drivers.",
              provider: { "@id": `${BASE_URL}/#organization` },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "PSV / Professional Driving — Class D1, D2, B3",
              description: "Full PSV certification for matatu drivers, bus operators, and tour vehicle professionals. Covers all NTSA PSV requirements.",
              provider: { "@id": `${BASE_URL}/#organization` },
            },
          },
        ],
      },
      department: [
        {
          "@type": "LocalBusiness",
          name: "Stega Driving School — CBD Branch (Main)",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Reli Co-op House, Mfangano Street",
            addressLocality: "Nairobi CBD",
            addressRegion: "Nairobi County",
            addressCountry: "KE",
          },
          geo: { "@type": "GeoCoordinates", latitude: -1.2869, longitude: 36.8195 },
          telephone: "+254722213810",
        },
        {
          "@type": "LocalBusiness",
          name: "Stega Driving School — Jevanjee Branch",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jevanjee Gardens Area",
            addressLocality: "Nairobi CBD",
            addressRegion: "Nairobi County",
            addressCountry: "KE",
          },
          geo: { "@type": "GeoCoordinates", latitude: -1.2833, longitude: 36.8200 },
          telephone: "+254722213810",
        },
        {
          "@type": "LocalBusiness",
          name: "Stega Driving School — Embakasi Branch",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Embakasi",
            addressLocality: "Embakasi",
            addressRegion: "Nairobi County",
            addressCountry: "KE",
          },
          geo: { "@type": "GeoCoordinates", latitude: -1.3195, longitude: 36.9102 },
          telephone: "+254722213810",
        },
        {
          "@type": "LocalBusiness",
          name: "Stega Driving School — Savannah Branch",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Savannah Estate",
            addressLocality: "Savannah",
            addressRegion: "Nairobi County",
            addressCountry: "KE",
          },
          telephone: "+254722213810",
        },
        {
          "@type": "LocalBusiness",
          name: "Stega Driving School — Kayole Branch",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Kayole",
            addressLocality: "Kayole",
            addressRegion: "Nairobi County",
            addressCountry: "KE",
          },
          geo: { "@type": "GeoCoordinates", latitude: -1.2833, longitude: 36.9000 },
          telephone: "+254722213810",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Stega Driving School",
      description: "Nairobi's most trusted NTSA-approved driving school.",
      inLanguage: "en-KE",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
