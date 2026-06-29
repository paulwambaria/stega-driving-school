import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Branch Locations | 5 Branches Across Nairobi",
  description:
    "Find Stega Driving School near you. 5 branches: CBD (Reli Co-op House, Mfangano St), Jevanjee Gardens, Embakasi, Savannah & Kayole. Call 0722 213 810 or WhatsApp 0750 323 372.",
  keywords: [
    "Stega Driving School contact",
    "driving school Mfangano Street Nairobi",
    "driving school Embakasi",
    "driving school Kayole Nairobi",
    "driving school Jevanjee Nairobi",
    "driving school Savannah Nairobi",
    "NTSA driving school near me Nairobi",
  ],
  openGraph: {
    title: "Contact Stega Driving School | 5 Branches Across Nairobi",
    description:
      "5 branches: CBD (Mfangano St), Jevanjee, Embakasi, Savannah & Kayole. Open Mon–Sat 9AM–6PM. Call 0722 213 810.",
    url: "https://stegadrivingschool.com/contact",
  },
  alternates: { canonical: "https://stegadrivingschool.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
