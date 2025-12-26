import type { Metadata } from 'next'
import React from 'react'

const meta = {
  title: "Image Usage Guidelines",
  description:
    "Learn how to use images from Designs By Eyad, including permitted uses, attribution rules, and licensing for commercial work.",
  url: "/usage-guidelines", // Updated from /privacy-policy
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: meta.url,
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
  },
  robots: {
    index: false,
    follow: false,
  },
}

const sections = [
  { id: "ownership", title: "Ownership" },
  { id: "permitted", title: "Permitted Use" },
  { id: "prohibited", title: "Prohibited Use" },
  { id: "requests", title: "Permissions" },
  { id: "disclaimer", title: "Disclaimer" },
];

const HowToUseImages: React.FC = () => {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* --- Left Side: Sticky Navigation --- */}
        <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-40">
          <nav className="flex flex-col gap-4 border-l border-white/10 pl-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 mb-2">
              Policy Sections
            </span>
            {sections.map((sec) => (
              <a 
                key={sec.id}
                href={`#${sec.id}`}
                className="text-sm font-bold text-neutral-400 hover:text-primary transition-colors uppercase tracking-tight"
              >
                {sec.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* --- Right Side: Content --- */}
        <article className="lg:col-span-9 prose prose-invert prose-neutral max-w-none 
          prose-h1:text-5xl prose-h1:md:text-7xl prose-h1:font-black prose-h1:tracking-tighter prose-h1:uppercase
          prose-h2:text-2xl prose-h2:uppercase prose-h2:tracking-tight prose-h2:text-white
          prose-p:text-neutral-400 prose-p:leading-relaxed
          prose-strong:text-white prose-strong:font-bold
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
          
          <header className="mb-16 border-b border-white/5 pb-10">
            <span className="text-primary font-mono tracking-[0.3em] uppercase text-sm mb-4 block">Assets</span>
            <h1>Usage<span className="text-primary">.</span></h1>
            <p className="text-xl">Effective Date: <span className="text-white">February 28, 2025</span></p>
          </header>

          <section id="ownership" className="scroll-mt-40">
            <h2>Ownership and Copyright</h2>
            <p>
              Unless otherwise stated, all images, brand marks, and custom graphics on this website are the intellectual property of <strong>Designs By Eyad</strong>. 
              Visual content is protected under international copyright law. Unauthorized reproduction or "hotlinking" is strictly prohibited.
            </p>
          </section>

          <section id="permitted" className="scroll-mt-40">
            <h2>Permitted Use</h2>
            <ul>
              <li>
                <strong>Personal Inspiration:</strong> You may view and download images for personal, non-commercial use (e.g., mood boards or wallpapers).
              </li>
              <li>
                <strong>Attribution:</strong> If sharing my work on social media, credit must be clearly visible as <em>"Design by @DesignsByEyad"</em> (or a link back to this site).
              </li>
              <li>
                <strong>Educational Use:</strong> Students may use images for academic projects provided the source is cited.
              </li>
            </ul>
          </section>

          <section id="prohibited" className="scroll-mt-40">
            <h2>Prohibited Use</h2>
            <p>To protect the integrity of the work, the following actions are banned:</p>
            <ul>
              <li><strong>Modification:</strong> Do not crop, filter, or alter the images in a way that misrepresents the original design.</li>
              <li><strong>Resale:</strong> Do not include these images in any "stock" collection or sell them as part of a template.</li>
              <li><strong>Impersonation:</strong> Do not use these images to imply that you or another entity created the work.</li>
            </ul>
          </section>

          <section id="requests" className="scroll-mt-40 border-t border-white/5 pt-10 mt-10">
            <h2>How to Request Permission</h2>
            <p>
              For commercial licensing, high-resolution prints, or publication features, please reach out with details of your project:
            </p>
            <div className="bg-neutral-900 p-8 rounded-3xl border border-white/5 not-italic">
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:eyadkhfarah@gmail.com" className="text-xl font-bold">eyadkhfarah@gmail.com</a></p>
              <p className="text-sm text-neutral-500 italic">Please include: "Image Request" in the subject line.</p>
            </div>
          </section>

          <section id="disclaimer" className="scroll-mt-40">
            <h2>Disclaimer</h2>
            <p>
              While I strive to ensure all visual assets are correctly attributed, some images may include third-party components (like mockups). 
              Compliance with those specific third-party licenses is the user's responsibility.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
};

export default HowToUseImages;
