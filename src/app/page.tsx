import BentoGrid from "@/Components/Client/BentoGrid";
import MissionVision from "@/Components/Client/MissionVision";
import ProtImages from "@/Components/Portfolio/ProtImages";
import ServicesCards from "@/Components/Services/ServicesCards";
import { TestimonialSlider } from "@/Components/Services/TestimonialSlider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <BentoGrid />

      <section className="mx-auto lg:max-w-7xl md:max-w-2xl max-w-xs my-28">
        <h2 className="text-primary text-5xl text-center my-12">
          Services
        </h2>
        <ServicesCards />
      </section>

      <section>
        <ProtImages />
      </section>

      <section>
        <h2 className="text-primary text-5xl text-center mt-10">Who I am?</h2>
        <MissionVision />
      </section>

      <section className="my-28">
        <h2 className="text-primary lg:text-5xl text-2xl text-center my-12">What My Clients Say About Me</h2>
        <TestimonialSlider />
      </section>

      <section className="bg-white rounded-3xl p-5 mx-auto lg:max-w-7xl md:max-w-2xl max-w-xs my-28">
        <div className="grid place-items-center gap-4 my-8">
          <h2 className="text-neutral-950 uppercase lg:text-5xl text-2xl text-center">
            MY FREELANCE ACCOUNTS
          </h2>
        </div>
        <div className="flex md:flex-row flex-wrap flex-col mx-auto justify-evenly items-center p-10 gap-20">
          <a
            href="https://www.upwork.com/freelancers/~0121088ad77b5fc2ac"
            aria-label="upwork"
            target="_blank"
            rel="noopener noreferrer"
            title="upwork"
          >
            <Image
              alt="upwork"
              src={"/Imgs/freelancer/upwork.svg"}
              width={150}
              height={50}
              className="h-auto saturate-0 hover:opacity-100 hover:saturate-100 transition-all ease-in-out duration-300"
            />
          </a>
          <a
            href="https://www.freelancer.com/u/eyadartist"
            aria-label="freelancer"
            target="_blank"
            rel="noopener noreferrer"
            title="freelancer"
          >
            <Image
              alt="freelancer"
              src={"/Imgs/freelancer/freelancer.svg"}
              width={150}
              height={50}
              className="h-auto saturate-0 hover:opacity-100 hover:saturate-100 transition-all ease-in-out duration-300"
            />
          </a>
          <a
            href="https://khamsat.com/user/eyad_farah"
            aria-label="khamsat خمسات"
            target="_blank"
            rel="noopener noreferrer"
            title="khamsat خمسات"
          >
            <Image
              alt="khamsat خمسات"
              src={"/Imgs/freelancer/khamsat.svg"}
              width={150}
              height={50}
              className="h-auto saturate-0 hover:opacity-100 hover:saturate-100 transition-all ease-in-out duration-300"
            />
          </a>
          <a
            href="https://mostaql.com/u/eyadfarah"
            aria-label="mostaql مستقل"
            target="_blank"
            rel="noopener noreferrer"
            title="mostaql مستقل"
          >
            <Image
              alt="mostaql مستقل"
              src={"/Imgs/freelancer/mostaql.svg"}
              width={150}
              height={50}
              className="h-auto saturate-0 hover:opacity-100 hover:saturate-100 transition-all ease-in-out duration-300"
            />
          </a>
          <a
            href="https://nafezly.com/u/eyadkhfarah/portfolio"
            aria-label="mostaql نفذلي"
            target="_blank"
            rel="noopener noreferrer"
            title="mostaql نفذلي"
          >
            <Image
              alt="mostaql نفذلي"
              src={"/Imgs/freelancer/nafzly.svg"}
              width={150}
              height={50}
              className="h-auto saturate-0 hover:opacity-100 hover:saturate-100 transition-all ease-in-out duration-300"
            />
          </a>
        </div>
      </section>
    </>
  );
}
