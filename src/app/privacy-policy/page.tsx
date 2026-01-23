import type { Metadata } from 'next'
import React from 'react'

const meta = {
    title: "Privacy Policy",
    description: "Learn how I collect, use, and protect your personal information. Your privacy is a priority at Designs By Eyad.",
    url: "/privacy-policy",
};

export const metadata: Metadata = {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.url },
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
    { id: "collect", title: "Information I Collect" },
    { id: "use", title: "How I Use It" },
    { id: "security", title: "Security" },
    { id: "contact", title: "Contact" },
];

const PrivacyPolicy: React.FC = () => {
    return (
        <main className="min-h-screen pt-32 pb-20">
            <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                
                {/* --- Left Side: Sticky Navigation --- */}
                <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-40">
                    <div className="flex flex-col gap-4 border-l border-white/10 pl-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 mb-2">
                            On this page
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
                    </div>
                </aside>

                {/* --- Right Side: Content --- */}
                <article className="lg:col-span-9 prose prose-invert prose-neutral max-w-none 
                    prose-h1:text-5xl prose-h1:md:text-7xl prose-h1:font-black prose-h1:tracking-tighter prose-h1:uppercase
                    prose-h2:text-2xl prose-h2:uppercase prose-h2:tracking-tight prose-h2:text-white
                    prose-p:text-neutral-400 prose-p:leading-relaxed
                    prose-strong:text-white prose-strong:font-bold
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                    
                    <header className="mb-16 border-b border-white/5 pb-10">
                        <span className="text-primary font-mono tracking-[0.3em] uppercase text-sm mb-4 block">Legal</span>
                        <h1>Privacy<span className="text-primary">.</span></h1>
                        <p className="text-xl">Effective Date: <span className="text-white">February 28, 2025</span></p>
                    </header>

                    <section id="intro" className="scroll-mt-40">
                        <h2>Introduction</h2>
                        <p>
                            I value your privacy and am committed to protecting your personal information.
                            This Privacy Policy explains how I collect, use, disclose, and safeguard your data when
                            you visit my website.
                        </p>
                    </section>

                    <section id="collect" className="scroll-mt-40">
                        <h2>Information I Collect</h2>
                        <ul>
                            <li>
                                <strong>Personal Information:</strong> I may collect personally identifiable information
                                (name, email address, phone number) when you voluntarily provide it through contact forms.
                            </li>
                            <li>
                                <strong>Usage Data:</strong> Analytical data on how you interact with my website to improve user experience.
                            </li>
                            <li>
                                <strong>Cookies:</strong> My site uses cookies to remember your preferences and enhance site performance.
                            </li>
                        </ul>
                    </section>

                    <section id="use" className="scroll-mt-40">
                        <h2>How I Use Your Information</h2>
                        <p>Your data is used specifically to:</p>
                        <ul>
                            <li>Operate and maintain the creative portfolio.</li>
                            <li>Personalize your experience.</li>
                            <li>Communicate regarding projects or inquiries.</li>
                        </ul>
                    </section>

                    <section id="security" className="scroll-mt-40">
                        <h2>Security of Your Information</h2>
                        <p>
                            I implement technical and physical measures to protect your data. However, 
                            no method of transmission over the Internet is 100% secure.
                        </p>
                    </section>

                    <section id="contact" className="scroll-mt-40 border-t border-white/5 pt-10 mt-20">
                        <h2>Contact Me</h2>
                        <p>If you have questions regarding this policy, please reach out directly:</p>
                        <div className="flex flex-col gap-2 not-italic bg-neutral-900 p-8 rounded-3xl border border-white/5">
                            <a href="mailto:eyadkhfarah@gmail.com" className="text-2xl font-bold">eyadkhfarah@gmail.com</a>
                            <a href="tel:+201555715783" className="text-neutral-500 font-mono tracking-tighter">+20 155 571 5783</a>
                        </div>
                    </section>
                </article>
            </section>
        </main>
    )
}

export default PrivacyPolicy;