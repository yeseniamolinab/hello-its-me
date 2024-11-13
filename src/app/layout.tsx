import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/globals/Header";
import Footer from "./components/globals/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Yesenia Molina Bejarano - Software Engineer",
  description:
    "Full-stack engineer with over 13 years of experience developing scalable software solutions for diverse global teams, including mission-oriented nonprofits and fast-growing tech firms",
};

const interRegular = Inter({
  weight: "400",
  subsets: ["latin"],
  display: "block",
  adjustFontFallback: false,
  preload: true,
  variable: "--font-inter-regular",
});

const interBold = Inter({
  weight: "600",
  subsets: ["latin"],
  display: "block",
  adjustFontFallback: false,
  preload: true,
  variable: "--font-inter-bold",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interRegular.variable} h-full antialiased`}>
      <body
        className={`${interBold.variable} antialiased flex h-full bg-zinc-50 dark:bg-black`}
      >
        <div className={`flex w-full ${interRegular.className}`}>
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
            </div>
          </div>
          <div className="relative flex w-full flex-col border-none">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
