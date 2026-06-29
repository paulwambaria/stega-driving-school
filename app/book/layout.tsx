import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Driving Course | Register Free — No Upfront Payment",
  description:
    "Register for a driving course at Stega Driving School Nairobi. Free enrolment — no upfront payment. Choose your branch (CBD, Jevanjee, Embakasi, Savannah or Kayole) and schedule. We call within 24 hours.",
  keywords: [
    "book driving lesson Nairobi",
    "register driving school Nairobi",
    "enrol driving course Kenya",
    "NTSA driving course registration",
    "Stega Driving School booking",
    "free driving school registration Nairobi",
  ],
  openGraph: {
    title: "Book a Driving Course | Stega Driving School Nairobi",
    description:
      "Register free — no upfront payment. Choose your course and schedule. We confirm within 24 hours. Call 0722 213 810.",
    url: "https://stegadrivingschool.com/book",
  },
  alternates: { canonical: "https://stegadrivingschool.com/book" },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
