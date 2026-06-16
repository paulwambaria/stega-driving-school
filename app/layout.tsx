import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import Preloader from "@/components/Preloader";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Stega Driving School | Learn to Drive with Confidence",
  description:
    "Nairobi's most trusted driving school on Mfangano Street. 96% first-attempt pass rate, NTSA-approved training, flexible schedules for all vehicle classes.",
  keywords: "driving school Nairobi, NTSA driving test, learn to drive Kenya, Stega driving school, manual automatic driving",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased">
        <Navbar />
        <Preloader />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
