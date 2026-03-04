import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { meta } from "../../content/siteData";
import { Analytics } from "@vercel/analytics/next"

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
