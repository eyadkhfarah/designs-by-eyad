import type { Metadata } from 'next'

const meta = {
  title: "How to Use My Images",
  description:
    "Learn how to use images from Designs By Eyad, including permitted and prohibited uses, ownership, and copyright information.",
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

const HowToUseImages: React.FC = () => {
  return (
    <article className='mx-auto lg:max-w-6xl md:max-w-2xl max-w-xs py-8 grid gap-8 prose prose-strong:font-bold prose-a:text-primary prose-a:no-underline lg:prose-lg prose-invert'>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-4">How to Use Images</h1>
        <p className="text-center text-primary">Effective Date: 28/2/2025</p>
      </header>

      <div className="mb-8">
        <h2 className="text-2xl">Ownership and Copyright</h2>
        <p>
          Unless otherwise stated, all images on this website are the property of Designs By Eyad
          or are used with permission. Unauthorized use, reproduction, or distribution of these images is prohibited.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl">Permitted Use</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Personal Use:</strong> You may view and download images for personal, non-commercial use only.
          </li>
          <li>
            <strong>Attribution:</strong> If you share images on social media or other platforms, please provide appropriate credit to Designs By Eyad when required.
          </li>
          <li>
            <strong>Commercial Use:</strong> For commercial use or reproduction of any images, please contact me to obtain written permission and discuss licensing terms.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl">Prohibited Use</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Do not alter, edit, or modify the images without permission.</li>
          <li>Do not distribute the images on other platforms or websites without explicit consent.</li>
          <li>Do not use the images in any manner that could be considered defamatory, illegal, or harmful to our reputation.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl">How to Request Permission</h2>
        <p>
          If you wish to use an image beyond the scope of the permitted use outlined above, please send a request to:
        </p>
        <div className="mt-2">
          <p>
            <strong>Email:</strong> <a href="mail:eyadkhfarah@gmail.com">eyadkhfarah@gmail.com</a>
          </p>
          <p>
            <strong>Details:</strong> Include details of the intended use, how the image will be used, and any other relevant information.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl">Disclaimer</h2>
        <p>
          While I strive to ensure that all images are correctly attributed and up to date, we do not guarantee the accuracy
          of image usage rights. It is your responsibility to ensure compliance with any third-party rights related to images on my site.
        </p>
      </div>
    </article>
  );
};

export default HowToUseImages;

