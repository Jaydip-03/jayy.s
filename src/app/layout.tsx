import type { Metadata } from "next";
import { cookies } from "next/headers";
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
        addressLocality: "Pune",
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
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("portfolio-theme")?.value;
  const initialMode: "spidey" | "normal" =
    themeCookie === "spidey" ? "spidey" : "normal";
  const introSeen = cookieStore.get("jaydip-intro-seen")?.value === "1";

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      data-theme={initialMode}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Instant zero-latency theme detection before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                document.cookie = "jaydip-intro-seen=; path=/; max-age=0;";
                var c = document.cookie.match(/(?:^|;\\s*)portfolio-theme=([^;]+)/);
                var t = c ? c[1] : sessionStorage.getItem('portfolio-theme');
                if (t === 'spidey' || t === 'normal') document.documentElement.dataset.theme = t;
              } catch(e) {}
            `,
          }}
        />
        {/* Intro Boot Lock: Synchronously prevents hero flash before intro on first visit */}
        <script
          id="intro-boot"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (sessionStorage.getItem("jaydip-intro-seen") !== "1") {
                  document.documentElement.setAttribute("data-intro-active", "true");
                }
              } catch(e) {}
              setTimeout(function() {
                try { document.documentElement.removeAttribute("data-intro-active"); } catch(e) {}
              }, 4500);
            `,
          }}
        />
      </head>
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