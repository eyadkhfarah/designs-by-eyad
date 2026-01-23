import type { Metadata } from "next";
import React from "react";
import ContactList from "./ContactList";
import Link from "next/link";

const meta = {
  title: "Contact",
  description: "Get in touch to discuss your brand identity and social media design needs. Reach out via phone or social media for personalized graphic design services in Aswan, Egypt.",
  url: "/contact",
}

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: "%s — Designs By Eyad",
  },
  description: meta.description,
  alternates: {
    canonical: meta.url,
  },
  openGraph: {
    title: {
      default: meta.title,
      template: "%s — Designs By Eyad",
    },
    description: meta.description,
    url: meta.url,
  },
};

// ... (imports and metadata)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen pt-32 pb-20 relative"> {/* Added relative and enough padding-top */}
      <section className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <header className="flex flex-col gap-6 mb-16 lg:mb-24 relative z-10">
          <span className="text-primary font-mono tracking-[0.3em] uppercase text-sm">
            Get in Touch
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-none tracking-tighter uppercase">
            Contact<span className="text-primary">.</span>
          </h1>
          {/* ... paragraph ... */}
        </header>

        {/* --- Main Content Grid --- */}
        {/* Added items-start to prevent the sidebar from stretching or sticking incorrectly */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* Sidebar: Remove 'sticky' if you want it to stay at the top of the grid */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
             {/* If you want it sticky, use 'sticky top-40'. If not, just remove these classes */}
            <div className="lg:sticky lg:top-40"> 
              <ContactList />
            </div>
          </aside>

          {/* Main: Contact Form */}
          <div className="lg:col-span-8 order-1 lg:order-2">
             {children}
          </div>
          
        </div>
      </section>
    </main>
  );
}