import ProtImages from "@/Components/Portfolio/ProtImages";
import Image from "next/image";
import {
  TbDeviceMobileCheck,
  TbVectorBezier,
  TbWorldCode,
  TbMessage2Heart,
  TbBrandAdobe,
  TbPencilBolt,
} from "react-icons/tb";

export default function Home() {
  return (
    <>
      <section className="lg:px-28 px-8">
        <div className="md:flex grid lg:gap-16 gap-9 items-center">
          <h1
            title="Hieroglyphic word means WOW!"
            aria-label="Hieroglyphic word means WOW!"
            className="p-0 lg:text-[7rem] md:text-[5rem] text-[3rem] whitespace-nowrap uppercase text-center"
          >
            Bi aty!
          </h1>
          <p className="md:text-xl md:text-left text-center md:m-0 mb-12">
            Welcome to Designs by Eyad, where we bring the cosmos of graphic
            design and web development to life! Dive into our galaxy of visual
            splendors and let us help you chart the future of your brand.
          </p>
        </div>
      </section>

      <Image
        alt="Astro"
        src={"/astro.jpg"}
        priority={true}
        width={1500}
        height={500}
        className="rounded-b-[3rem] overflow-hidden aspect-video h-full object-cover object-center mb-32 saturate-0"
      />

      <ProtImages />

      <section className="lg:px-60 md:px-30 px-5 my-60">
        <h2 className="text-yellow-500 text-4xl text-center">Our Clients</h2>
        <div className="flex md:flex-row flex-wrap flex-col mx-auto justify-between items-center overflow-hidden py-20 gap-12">
          <Image
            alt="منصة قومي"
            src={"/Clients/QWMY.svg"}
            className="opacity-30 saturate-0 hover:opacity-100 hover:saturate-100 transition-all ease-in-out duration-300"
            width={200}
            height={200}
          />
          <Image
            alt="وعي مصر"
            src={"/Clients/Wai-masr.svg"}
            className="opacity-30 saturate-0 hover:opacity-100 hover:saturate-100 transition-all ease-in-out duration-300"
            width={200}
            height={200}
          />
          <Image
            alt="لوكوجي"
            src={"/Clients/Lokoji.svg"}
            className="opacity-30 saturate-0 hover:opacity-100 hover:saturate-100 transition-all ease-in-out duration-300"
            width={200}
            height={200}
          />
        </div>
      </section>

      <section className="lg:px-60 md:px-30 px-5 my-10">
        <h2 className="text-yellow-500 uppercase text-4xl text-center">
          What I Offer
        </h2>

        <div className="grid md:grid-cols-2 gap-9 mt-14">
          <div className="services-card">
            <TbWorldCode className="text-4xl text-yellow-500 " />
            <div className="grid gap-3">
              <h3 className="text-xl">Web Development</h3>
              <p>
                Design, build, and maintain web applications and websites that
                are secure, user-friendly, and meet business goals.
              </p>
            </div>
          </div>
          <div className="services-card">
            <TbMessage2Heart className="text-4xl text-yellow-500" />
            <div className="grid gap-3">
              <h3 className="text-xl">Social Media Design</h3>
              <p>
                Design social media content that is tailored to each platform
                and audience, helping businesses grow their following and
                engagement.
              </p>
            </div>
          </div>
          <div className="services-card">
            <TbVectorBezier className="text-4xl text-yellow-500" />
            <div className="grid gap-3">
              <h3 className="text-xl">Graphic Design</h3>
              <p>
                Visually communicate your message through creative and effective
                designs for print, digital, and social media.
              </p>
            </div>
          </div>
          <div className="services-card">
            <TbDeviceMobileCheck className="text-4xl text-yellow-500" />
            <div className="grid gap-3">
              <h3 className="text-xl">UI/UX Design</h3>
              <p>
                Design user-centered interfaces that are both visually appealing
                and easy to use, helping businesses achieve their goals.
              </p>
            </div>
          </div>
          <div className="services-card">
            <TbBrandAdobe className="text-4xl text-yellow-500" />
            <div className="grid gap-3">
              <h3 className="text-xl">Photoshop</h3>
              <p>
                Transform your photos with expert touch-ups, enhancements, and
                creative edits. Elevate your visuals with precision and style.
              </p>
            </div>
          </div>
          <div className="services-card">
            <TbPencilBolt className="text-4xl text-yellow-500" />
            <div className="grid gap-3">
              <h3 className="text-xl">Logo Design</h3>
              <p>
                My logo design service creates unique, memorable logos that
                visually represent your brand essence, fostering recognition and
                credibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-3xl lg:p-30 p-5 lg:m-24 m-7">
        <h2 className="text-yellow-500 uppercase lg:text-4xl my-6 text-2xl text-center">
          MY FREELANCE ACCOUNTS
        </h2>
        <div className="flex md:flex-row flex-wrap flex-col mx-auto justify-evenly items-center p-10 gap-20">
          <a
            href="https://www.fiverr.com/eyadfarah"
            aria-label="fiverr"
            target="_blank"
            rel="noopener noreferrer"
            title="fiverr"
          >
            <Image
              alt="fiverr"
              src={"/Imgs/freelancer/fiverr.svg"}
              width={150}
              height={50}
              className="h-auto saturate-0 hover:opacity-100 hover:saturate-100 transition-all ease-in-out duration-300"
            />
          </a>
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
