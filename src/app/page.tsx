import H1Hero from "@/Components/Client/h1Hero";
import ProtImages from "@/Components/Portfolio/ProtImages";
import ServicesCards from "@/Components/Services/ServicesCards";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="lg:px-28 lg:py-8 px-8">
        <div className="grid lg:grid-cols-2 lg:gap-16 gap-6 place-items-center">
          <H1Hero />
          <p className="md:text-xl md:text-left text-center md:m-0 mb-12">
            Welcome to Designs by Eyad, where we bring the cosmos of graphic
            design and web development to life! Dive into our galaxy of visual
            splendors and let us help you chart the future of your brand.
          </p>
        </div>
      </section>

      <Image
        alt="Astro"
        src={"/main.png"}
        priority={true}
        width={1500}
        height={500}
        sizes="(max-width: 600px) 480px, (max-width: 1200px) 1024px, 1920px"
        className="rounded-b-[3rem] overflow-hidden aspect-video w-full h-full object-cover object-center mb-32"
      />

      <ProtImages />

      <section className="lg:px-60 md:px-30 px-5 my-60">
        <h2 className="text-yellow-500 text-4xl text-center">Our Clients</h2>
        <div className="flex md:flex-row flex-wrap flex-col mx-auto justify-between items-center overflow-hidden py-20 gap-12">
          <Link href={"/portfolio/web/qwmy"} aria-label="QWMY" title="QWMY">
            <Image
              alt="منصة قومي"
              src={"/Clients/QWMY.svg"}
              className="opacity-30 saturate-0 hover:opacity-100 hover:saturate-100 transition-all ease-in-out duration-300"
              width={200}
              height={200}
            />
          </Link>
          <Link
            href={"/portfolio/web/wai-masr"}
            aria-label="Wai Masr"
            title="Wai Masr"
          >
            <Image
              alt="وعي مصر"
              src={"/Clients/Wai-masr.svg"}
              className="opacity-30 saturate-0 hover:opacity-100 hover:saturate-100 transition-all ease-in-out duration-300"
              width={200}
              height={200}
            />
          </Link>

          <Link
            href={"/portfolio/web/lokoji"}
            aria-label="Lokoji"
            title="Lokoji"
          >
            <Image
              alt="لوكوجي"
              src={"/Clients/Lokoji.svg"}
              className="opacity-30 saturate-0 hover:opacity-100 hover:saturate-100 transition-all ease-in-out duration-300"
              width={200}
              height={200}
            />
          </Link>
        </div>
      </section>

      <section className="lg:px-60 md:px-30 px-5 my-10">
        <h2 className="text-yellow-500 uppercase text-4xl text-center my-12">
          What I Offer
        </h2>

        {/* <ServicesSlider /> */}
        <ServicesCards />
      </section>

      <section className="bg-white rounded-3xl lg:p-30 p-5 lg:m-28 m-7">
        <div className="grid place-items-center gap-4 my-8">
          <h2 className="text-neutral-950 uppercase lg:text-4xl text-2xl text-center">
            MY FREELANCE ACCOUNTS
          </h2>
          <div className="bg-yellow-500 h-2 w-12"></div>
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
        </div>
      </section>
    </>
  );
}
