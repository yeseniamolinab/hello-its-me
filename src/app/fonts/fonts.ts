import { Inter } from "next/font/google";

export const interLight = Inter({
  weight: "200",
  subsets: ["latin"],
  display: "block",
  adjustFontFallback: false,
  preload: true,
  variable: "--font-inter-light",
});

export const interRegular = Inter({
  weight: "400",
  subsets: ["latin"],
  display: "block",
  adjustFontFallback: false,
  preload: true,
  variable: "--font-inter-regular",
});

export const interBold = Inter({
  weight: "600",
  subsets: ["latin"],
  display: "block",
  adjustFontFallback: false,
  preload: true,
  variable: "--font-inter-bold",
});

export const interBlack = Inter({
  weight: "700",
  subsets: ["latin"],
  display: "block",
  adjustFontFallback: false,
  preload: true,
  variable: "--font-inter-black",
});
