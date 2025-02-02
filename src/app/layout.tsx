import Navbar from "@/Components/Navbar";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import Footer from "@/Components/Footer";
import { Metadata, Viewport } from "next";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-B5QZVD5E94" />
      <GoogleTagManager gtmId="GTM-5MWXJS6P" />
    </html>
  );
}
