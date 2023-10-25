import Navbar from "@/Components/Navbar";
import "./globals.css";
import Footer from "@/Components/Footer";

const title = "Designs By Eyad ─ %s";
const desc =
  "A studio located in Aswan make graphic design, motion graphics, Web design, UI design and more in an Egyptian style.";
  const siteUrl = process.env.PUBLIC_DOMAIN_URL;

export const metadata = {
  title: {
    default: "Designs By Eyad",
    template: title,
  },
  description: desc,
  alternates: {
    canonical: siteUrl,
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

  twitter: {
    handle: "@designs.by.eyad",
    site: "@designs.by.eyad",
    cardType: "summary_large_image",
  },

  language: "en",
  "geo.country": "EG",
  "geo.region": "EG",
  distribution: "global",
  "revisit-after": "1 days",
  "geo.placename": "Egypt",

  HandheldFriendly: "True",
  MobileOptimized: "1100",
};

export default function RootLayout({ children }) {
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
