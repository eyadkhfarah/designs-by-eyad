import Navbar from "@/Components/Navbar";
import "./globals.css";
import Footer from "@/Components/Footer";
import { Metadata, Viewport } from "next";

const title = "%s — Designs By Eyad";
const desc =
  "A studio located in Aswan make graphic design, motion graphics, Web design, UI design and more in an Egyptian style.";

const siteUrl =
  process.env.PUBLIC_DOMAIN_URL || "https://designs-by-eyad.vercel.app";

export const viewport: Viewport = {
  themeColor: "black",
};

export const metadata: Metadata = {
  title: {
    default: "Designs By Eyad",
    template: title,
  },
  description: desc,
  alternates: {
    canonical: "/",
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
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
