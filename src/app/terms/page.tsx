import type { Metadata } from 'next'

const meta = {
    title: "Terms and Conditions",
    description:
        "Please read these Terms and Conditions carefully before using my website. By accessing or using the site, you agree to be bound by these terms.",
    url: "/terms",
};

const siteUrl =
    process.env.NEXT_PUBLIC_DOMAIN_URL ||
    "https://designs-by-eyad.vercel.app";

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
        nocache: false,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

const TermsAndConditions: React.FC = () => {
    return (
        <article className='mx-auto lg:max-w-6xl md:max-w-2xl max-w-xs py-8 grid gap-8 prose prose-strong:font-bold prose-a:text-primary prose-a:no-underline lg:prose-lg prose-invert'>
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-center mb-4">Terms and Conditions</h1>
                <p className="text-center text-primary">Effective Date: 28/2/2025</p>
                </header>

            <div className="mb-8">
                <h2 className="text-2xl">Introduction</h2>
                <p>
                    Welcome to Designs By Eyad. These Terms and Conditions govern your use of my website.
                    By accessing or using my site, you agree to be bound by these terms. Please read them carefully.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl">Intellectual Property</h2>
                <p>
                    All content on this website, including text, graphics, logos, images, and software, is the property
                    of Designs By Eyad or its licensors and is protected by applicable copyright and trademark laws.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl">User Obligations</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>You agree to use the website only for lawful purposes.</li>
                    <li>You must not interfere with or disrupt the operation of the website.</li>
                    <li>Unauthorized use may result in termination of your access to the site.</li>
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl">Disclaimers and Limitation of Liability</h2>
                <p>
                    The website is provided on an “as is” basis without any warranties, either expressed or implied.
                    Designs By Eyad shall not be liable for any direct, indirect, incidental, special, or consequential
                    damages arising from the use of this website.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl">Governing Law</h2>
                <p>
                    These Terms and Conditions are governed by and construed in accordance with the laws of Egypt.
                    Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts
                    located in Egypt.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl">Modifications</h2>
                <p>
                    I reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page,
                    and your continued use of the website after such changes will constitute your acceptance of the updated terms.
                </p>
            </div>

            <div>
                <h2 className="text-2xl">Contact Information</h2>
                <p>
                    For any questions or concerns regarding these Terms and Conditions, please contact me at:
                </p>
                <address className="not-italic mt-2">
                        <a href="mail:eyadkhfarah@gmail.com">eyadkhfarah@gmail.com</a> <br />
                        <a href="tel:+201555715783">+20 155 571 5783</a> <br />
                    </address>
            </div>
        </article>
    );
};

export default TermsAndConditions;
