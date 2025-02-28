import BentoGrid from "@/Components/Client/BentoGrid";
import BrandFields from "@/Components/Client/BrandFields";
// import PinterestPins from "@/Components/Portfolio/PinterestPins";
import ServicesSlider from "@/Components/Services/ServicesSlider";
import { TestimonialSlider } from "@/Components/Services/TestimonialSlider";
import { RiArrowLeftLine, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
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

export default function page() {
  return (
    <>
      <BentoGrid />
      <section className="lg:px-28 p-10 grid gap-8">
        {/* <h1 className="lg:text-[8rem] md:text-[5rem] text-[3rem] w-fit">
          Unused Components
        </h1> */}
        <ServicesSlider />
        <TestimonialSlider />
        {/* <PinterestPins /> */}

        <div className="flex justify-between items-center">
          <button className="flex items-center gap-4 cursor-pointer">
            <span className="p-3 rounded-full bg-dark">
              <RiArrowLeftSLine className="text-4xl text-primary" />
            </span>
            <div className="grid">
              <p className="font-bold uppercase text-lg">Previous</p>
              <p className="line-clamp-1 text-neutral-500">Article title</p>
            </div>
          </button>
          <button className="flex items-center flex-row-reverse gap-4 cursor-pointer">
            <span className="p-3 rounded-full bg-dark">
              <RiArrowRightSLine className="text-4xl text-primary" />
            </span>
            <div className="grid place-items-end">
              <p className="font-bold uppercase text-lg">Next</p>
              <p className="line-clamp-1 text-neutral-500">Article title</p>
            </div>
          </button>
        </div>
      </section>

      <section>
        <BrandFields />
      </section>
    </>
  )
}

