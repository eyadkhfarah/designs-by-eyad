import BentoGrid from "@/Components/Client/BentoGrid";
// import PinterestPins from "@/Components/Portfolio/PinterestPins";
import ServicesSlider from "@/Components/Services/ServicesSlider";
import { TestimonialSlider } from "@/Components/Services/TestimonialSlider";

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
      </section>
    </>
  )
}