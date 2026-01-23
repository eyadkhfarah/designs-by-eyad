import type { Metadata } from 'next'
import React from 'react'

const meta = {
    title: "Terms and Conditions",
    description:
        "Please read these Terms and Conditions carefully before using my website. By accessing or using the site, you agree to be bound by these terms.",
    url: "/terms",
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
    { id: "intro", title: "Introduction" },
    { id: "ip", title: "Intellectual Property" },
    { id: "obligations", title: "User Obligations" },
    { id: "liability", title: "Liability" },
    { id: "law", title: "Governing Law" },
    { id: "contact", title: "Contact" },
];

const TermsAndConditions: React.FC = () => {
    return (
        <main className="min-h-screen pt-32 pb-20">
            <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                
                {/* --- Left Side: Sticky Navigation --- */}
                <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-40">
                    <nav className="flex flex-col gap-4 border-l border-white/10 pl-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 mb-2">
                            Quick Links
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
                        <span className="text-primary font-mono tracking-[0.3em] uppercase text-sm mb-4 block">Rules of Engagement</span>
                        <h1>Terms<span className="text-primary">.</span></h1>
                        <p className="text-xl">Effective Date: <span className="text-white">February 28, 2025</span></p>
                    </header>

                    <section id="intro" className="scroll-mt-40">
                        <h2>Introduction</h2>
                        <p>
                            Welcome to Designs By Eyad. These Terms and Conditions govern your use of my website.
                            By accessing or using my site, you agree to be bound by these terms. If you do not agree
                            with any part of these terms, please refrain from using the website.
                        </p>
                    </section>

                    <section id="ip" className="scroll-mt-40">
                        <h2>Intellectual Property</h2>
                        <p>
                            All content on this website—including text, graphics, logos, brand identities, custom icons, and portfolio images—is the exclusive property
                            of <strong>Designs By Eyad</strong>. 
                        </p>
                        <p>
                            Unauthorized reproduction, redistribution, or theft of these assets is strictly prohibited and protected by international copyright laws.
                        </p>
                    </section>

                    <section id="obligations" className="scroll-mt-40">
                        <h2>User Obligations</h2>
                        <ul>
                            <li>You agree to use the website only for lawful, professional purposes.</li>
                            <li>You must not attempt to breach the website's security or harvest user data.</li>
                            <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</li>
                        </ul>
                    </section>

                    <section id="liability" className="scroll-mt-40">
                        <h2>Disclaimers and Limitation of Liability</h2>
                        <p>
                            This website is provided on an “as is” basis. While I strive for 100% uptime and accuracy, I make no warranties regarding the completeness or reliability of the information found here.
                        </p>
                        <p>
                            Designs By Eyad shall not be held liable for any damages arising from the use or inability to use the materials on this site.
                        </p>
                    </section>

                    <section id="law" className="scroll-mt-40">
                        <h2>Governing Law</h2>
                        <p>
                            These Terms and Conditions are governed by and construed in accordance with the laws of <strong>Egypt</strong>.
                            Any disputes shall be subject to the exclusive jurisdiction of the courts located in Egypt.
                        </p>
                    </section>

                    <section id="contact" className="scroll-mt-40 border-t border-white/5 pt-10 mt-20">
                        <h2>Contact Information</h2>
                        <p>For any legal inquiries or concerns, please reach out via the following channels:</p>
                        
                        <div className="flex flex-col gap-2 not-italic bg-neutral-900 p-8 rounded-3xl border border-white/5">
                            <a href="mailto:eyadkhfarah@gmail.com" className="text-2xl font-bold hover:text-primary transition-colors">
                                eyadkhfarah@gmail.com
                            </a>
                            <a href="tel:+201555715783" className="text-neutral-500 font-mono tracking-tighter">
                                +20 155 571 5783
                            </a>
                        </div>
                    </section>
                </article>
            </section>
        </main>
    );
};

export default TermsAndConditions;