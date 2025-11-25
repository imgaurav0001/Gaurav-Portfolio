import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-pi-jade-72.vercel.app/"),
  title: "Gaurav Joshi | Software & AI Engineer",
  description:
    "Final-year MTech CSE student building human-centered software, AI assistants, and polished developer experiences.",
  keywords: [
    "Gaurav Joshi",
    "Software Developer",
    "MERN",
    "AI Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Gaurav Joshi", url: "https://github.com/imgaurav0001" }],
  openGraph: {
    title: "Gaurav Joshi | Software & AI Engineer",
    description:
      "Full-stack & AI-driven developer crafting delightful user experiences.",
    url: "https://portfolio-pi-jade-72.vercel.app/",
    images: [
      {
        url: "/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "Gaurav Joshi Portfolio preview",
      },
    ],
    siteName: "Gaurav Joshi Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@gauravjoshi327",
    title: "Gaurav Joshi | Software & AI Engineer",
    description:
      "Building AI assistants, immersive web apps, and reliable systems.",
    images: ["/og-cover.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
