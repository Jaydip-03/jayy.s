import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";

import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Navbar from "@/components/layout/Navbar";
import IntroGate from "@/components/intro/IntroGate";
import { siteConfig } from "@/lib/site";

import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${caveat.variable} antialiased`}
      >
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