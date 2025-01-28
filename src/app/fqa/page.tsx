import faqData from '@/lib/faqData';
import { Metadata } from 'next';
import { marked } from "marked";
import React from 'react'
import FAQCard from '@/Components/Client/FQACard';

const meta = {
    title: "FQA",
    description: "Explore our comprehensive FAQ page to find answers to all your questions about our brand identity and web design services. Learn about our design process, project timelines, payment methods, and more. Get started with Designs By Eyad today!",
    url: "/fqa",
}

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
};

export default function FqaPage() {
    return (
        <section>
            <h1 className="lg:text-[8rem] md:text-[5rem] my-0 text-[2rem] w-fit">
                FQA
            </h1>
            <p>Explore our comprehensive FAQ page to find answers to all your questions about our brand identity and web design services. Learn about our design process, project timelines, payment methods, and more.</p>
            <div className="prose prose-lg prose-invert prose-li: mx-auto md:max-w-3xl space-y-4 prose-a:text-primary prose-a:no-underline prose-strong:font-bold">
                
                <FAQCard />
            </div>
        </section>
    )
}

// export const FAQSection: React.FC () => {
//     return (
//       <section>
//         <h2>Frequently Asked Questions</h2>
//         <div>

//         </div>
//       </section>
//     );
//   };
