import BentoGrid from "@/Components/Client/BentoGrid";
// import PinterestPins from "@/Components/Portfolio/PinterestPins";
import ServicesSlider from "@/Components/Services/ServicesSlider";
import { TestimonialSlider } from "@/Components/Services/TestimonialSlider";
import { RiArrowLeftLine, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

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
    </>
  )
}

// 1. Mobile App
// 2. Clinic
// 3. News and Publication
// 4. Government
// 5. Travel
// 6. Marketing Agencies
// 7. Tech 
// 8. Beverages
// 9. Restaurants
// 10. Coffee shops
// 11. Food retailers
// 12. Furniture
// 13. Real estate
// 14. Education
// 15. Universities
// 16. Beauty
// 17. Fashion
// 18. Magazines
// 19. E-commerce
// 20. Influencers
// 21. Youtubers
// 22. Podcast
// 23. Cosmetics
// 24. Beauty
// 25. Perfumes
// 26. Automobile