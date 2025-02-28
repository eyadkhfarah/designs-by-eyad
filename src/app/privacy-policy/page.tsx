import type { Metadata } from 'next'

const meta = {
    title: "Privacy Policy",
    description:
        "Learn how I collect, use, and protect your personal information when you visit my website. Your privacy is important to me.",
    url: "/privacy-policy",
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

const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <article className='mx-auto lg:max-w-6xl md:max-w-2xl max-w-xs py-8 grid gap-8 prose prose-strong:font-bold prose-a:text-primary prose-a:no-underline lg:prose-lg prose-invert'>
                <header className="mb-8">
                    <h1 className="font-bold text-center mb-4">Privacy Policy</h1>
                    <p className="text-center text-primary">Effective Date: 28/2/2025</p>
                </header>

                <div className="mb-8">
                    <h2 className="text-2xl">Introduction</h2>
                    <p>
                        I value your privacy and are committed to protecting your personal information.
                        This Privacy Policy explains how I collect, use, disclose, and safeguard your data when
                        you visit my website.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl">Information I Collect</h2>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>
                            <strong>Personal Information:</strong> I may collect personally identifiable information
                            (such as your name, email address, and phone number) when you voluntarily provide it.
                        </li>
                        <li>
                            <strong>Usage Data:</strong> I collect data on how you interact with my website, including
                            pages visited and time spent on pages.
                        </li>
                        <li>
                            <strong>Cookies and Tracking Technologies:</strong> My site may use cookies and similar
                            technologies to enhance your user experience.
                        </li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl">How I Use Your Information</h2>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>To provide, operate, and maintain my website.</li>
                        <li>To improve, personalize, and expand my website.</li>
                        <li>To understand and analyze how you use my website.</li>
                        <li>
                            To communicate with you for customer service, updates, or marketing purposes (where
                            permitted by law).
                        </li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl">Disclosure of Your Information</h2>
                    <p>
                        I do not sell or rent your personal data. I may share your information with trusted third-party
                        service providers who assist us in operating my website, conducting my business, or serving you,
                        provided they agree to keep your information confidential. I may also disclose your data when
                        required by law.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl">Security of Your Information</h2>
                    <p>
                        We implement administrative, technical, and physical measures to help protect your personal
                        information. However, no method of transmission over the Internet or electronic storage is
                        completely secure.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl">Links to Other Websites</h2>
                    <p>
                        My website may contain links to external sites that are not operated by me. I am not
                        responsible for the privacy practices or content of these third-party sites.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl">Children’s Privacy</h2>
                    <p>
                        My website is not intended for use by individuals under the age of 13. I do not knowingly
                        collect personal data from children. If you believe that I have inadvertently collected such
                        data, please contact me immediately.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl">Changes to This Privacy Policy</h2>
                    <p>
                        I may update my Privacy Policy from time to time. Any changes will be posted on this page
                        along with the updated effective date.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl">Contact Me</h2>
                    <p>
                        If you have any questions regarding this Privacy Policy, please contact me at:
                    </p>
                    <address className="not-italic mt-2">
                        <a href="mail:eyadkhfarah@gmail.com">eyadkhfarah@gmail.com</a> <br />
                        <a href="tel:+201555715783">+20 155 571 5783</a> <br />
                    </address>
                </div>
            </article>

        </>
    );
};

export default PrivacyPolicy;
