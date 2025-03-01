import Navbar from "@/Components/Navbar";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import Footer from "@/Components/Footer";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

import Script from 'next/script';
import { Metadata, Viewport } from "next";
import { NavList } from "@/lib/NavList";
import CookieBanner from "@/Components/Client/CookieBanner";

// Localization

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { cookies } from "next/headers";

const title = "%s — Designs By Eyad";
const desc =
  "Discover Designs By Eyad, a creative studio specializing in brand identity, social media designs, and web development with an Egyptian touch. Explore innovative and unique designs!";

const siteUrl =
  process.env.PUBLIC_DOMAIN_URL || "https://designs-by-eyad.vercel.app";

export const viewport: Viewport = {
  themeColor: "black",
};

export const metadata: Metadata = {
  title: {
    default: "Designs By Eyad — Creative Branding & Web Design Portfolio",
    template: title,
  },
  description: desc,
  alternates: {
    canonical: "/",
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: {
      default: "Designs By Eyad",
      template: title,
    },
    description: desc,
    images: {
      url: "/main-og.png",
      width: 1800,
      height: 1600,
      alt: "Designs By Eyad",
    },
    type: "website",
  },

  verification: {
    google: "SAdpay-liv1rI5Wv_WMEhQWbAXRtsm96riCif7zyOzs",
  },
  other: {
    "p:domain_verify": '0ce530fb8b315b5b57336f9008379e96',
  },

  twitter: {
    site: "@designs.by.eyad",
    card: "summary_large_image",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://designs-by-eyad.vercel.app/"
      },
    ]
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Eyad Farah",
    "jobTitle": "Graphic Designer",
    "worksFor": {
      "@type": "Organization",
      "name": "Designs By Eyad",
      "url": siteUrl,
      "sameAs": [
        "https://www.facebook.com/designs.by.eyad",
        "https://www.instagram.com/designs.by.eyad",
        "https://www.linkedin.com/company/designsbyeyad",
        "https://www.youtube.com/@designsbyeyad"
      ]
    },
    "telephone": "(+20) 155 571 5783",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Aswan",
      "addressCountry": "EG"
    },
    "url": siteUrl,
    "sameAs": [
      "https://www.facebook.com/designs.by.eyad",
      "https://www.instagram.com/designs.by.eyad",
      "https://www.linkedin.com/company/designsbyeyad",
      "https://www.youtube.com/@designsbyeyad"
    ]
  };

  const locale = (await cookies()).get('locale')?.value || 'en';

  // Dynamically load the messages file based on the locale.
  const messages = await import(`../../messages/${locale}.json`).then(
    (module) => module.default
  );
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": siteUrl
                },
                ...NavList.map((nav) => ({
                  "@type": "ListItem",
                  "position": Number(nav.id) + 1,
                  "name": nav.name,
                  "item": siteUrl + nav.link
                })),
                {
                  "@type": "ListItem",
                  "position": 8,
                  "name": "Contact",
                  "item": siteUrl + "/contact"
                }
              ]
            })
          }}
        />
        {/* <Partytown
          forward={['dataLayer.push']}
          debug={process.env.NODE_ENV === 'development'}
        /> */}
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];`,
          }}
        />
      </head>
      <body className={locale === 'ar' ? 'font-arabicRegular' : 'font-regular'}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          <main>{children}</main>
          <CookieBanner />
          <Footer />
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-B5QZVD5E94" />
      <GoogleTagManager gtmId="GTM-5MWXJS6P" />
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
