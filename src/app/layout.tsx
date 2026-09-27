import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { meta } from "../../content/siteData";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${meta.name} — ${meta.title}`,
  description: `${meta.tagline} ${meta.subTagline}`,
  keywords: [
    "Industrial Engineering",
    "RIT Dubai",
    "Basel BaderEddin",
    "portfolio",
    "process optimization",
  ],
  openGraph: {
    title: `${meta.name} — ${meta.title}`,
    description: meta.tagline,
    url: meta.siteUrl,
    siteName: meta.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${meta.name} — ${meta.title}`,
    description: meta.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
