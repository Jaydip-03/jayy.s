import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono, Caveat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Navbar from "@/components/layout/Navbar";
import IntroGate from "@/components/intro/IntroGate";
import { siteConfig } from "@/lib/site";
import { INTRO_BOOT_SCRIPT } from "@/lib/intro";

import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [...siteConfig.keywords],

  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.name,

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@Desale_Jay27",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      jobTitle: siteConfig.role,
      url: siteConfig.url,
      sameAs: [
        siteConfig.links.github,
        siteConfig.links.linkedin,
        siteConfig.links.twitter,
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.title,
      publisher: {
        "@id": `${siteConfig.url}/#person`,
      },
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialMode = "normal";

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      data-theme={initialMode}
      data-intro-active="true"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${caveat.variable} antialiased`}
      >
        {/*
          Runs synchronously before React hydrates.
          If the intro has already been seen (sessionStorage flag set),
          this removes data-intro-active from <html> so #portfolio-shell
          is never hidden on repeat visits.
        */}
        <Script
          id="intro-boot"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: INTRO_BOOT_SCRIPT }}
        />

        <ThemeProvider initialMode={initialMode}>
          {/* Main portfolio */}
          <div id="portfolio-shell">
            <CustomCursor />

            <Navbar />

            {children}

            <Footer />
          </div>

          {/* First-visit intro */}
          <IntroGate />
        </ThemeProvider>
      </body>
    </html>
  );
}