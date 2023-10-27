import ProtImages from "@/Components/Portfolio/ProtImages";
import Image from "next/image";
import {
  TbDeviceMobileCheck,
  TbVectorBezier,
  TbWorldCode,
  TbMessage2Heart,
} from "react-icons/tb";

export default function Home() {
  return (
    <>
      <section className="lg:px-28 px-8">
        <div className="md:flex grid lg:gap-16 gap-9 items-center">
          <h1 className="p-0 lg:text-[10rem] md:text-[8rem] text-[5rem] text-center">
            WOW!
          </h1>
          <p className="md:text-xl md:text-left text-center md:m-0 mb-12">
            Welcome to Designs by Eyad, where we bring the cosmos of graphic
            design and web development to life! Dive into our galaxy of visual
            splendors and let us help you chart the future of your brand.
          </p>
        </div>
      </section>

      <Image
        src={"/astro.jpg"}
        priority={true}
        width={1500}
        height={500}
        className="rounded-b-[3rem] overflow-hidden aspect-video h-full object-cover object-center mb-32 saturate-0"
      />

      <ProtImages />

      <section className="lg:px-60 md:px-30 px-8 my-60">
        <h2 className="text-yellow-500 text-4xl text-center">Our Clients</h2>
        <div className="">
          <div className="flex md:flex-row flex-wrap flex-col mx-auto justify-between items-center overflow-hidden py-20 gap-12">
            <Image
              src={"/Clients/QWMY.svg"}
              className="opacity-30 saturate-0 hover:opacity-100 hover:saturate-100 transition-all ease-in-out duration-300"
              width={200}
              height={200}
            />
            <Image
              src={"/Clients/Wai-masr.svg"}
              className="opacity-30 saturate-0 hover:opacity-100 hover:saturate-100 transition-all ease-in-out duration-300"
              width={200}
              height={200}
            />
            <Image
              src={"/Clients/Lokoji.svg"}
              className="opacity-30 saturate-0 hover:opacity-100 hover:saturate-100 transition-all ease-in-out duration-300"
              width={200}
              height={200}
            />
          </div>
        </div>
      </section>

      <section className="lg:px-60 md:px-30 px-8 my-10">
        <h2 className="text-yellow-500 text-4xl text-center">What I Offer</h2>

        <div className="grid md:grid-cols-2 gap-9 mt-14">
          <div className="grid gap-5 bg-gray-900 p-5 rounded-3xl hover:scale-110 transition-all ease-in-out duration-300">
            <TbWorldCode className="text-4xl" />
            <div className="grid gap-3">
              <h3 className="text-xl">Web Development</h3>
              <p>
                Design, build, and maintain web applications and websites that
                are secure, user-friendly, and meet business goals.
              </p>
            </div>
          </div>
          <div className="grid gap-5 bg-gray-900 p-5 rounded-3xl hover:scale-110 transition-all ease-in-out duration-300">
            <TbMessage2Heart className="text-4xl" />
            <div className="grid gap-3">
              <h3 className="text-xl">Social Media Design</h3>
              <p>
                Design social media content that is tailored to each platform
                and audience, helping businesses grow their following and
                engagement.
              </p>
            </div>
          </div>
          <div className="grid gap-5 bg-gray-900 p-5 rounded-3xl hover:scale-110 transition-all ease-in-out duration-300">
            <TbVectorBezier className="text-4xl" />
            <div className="grid gap-3">
              <h3 className="text-xl">Graphic Design</h3>
              <p>
                Visually communicate your message through creative and effective
                designs for print, digital, and social media.
              </p>
            </div>
          </div>
          <div className="grid gap-5 bg-gray-900 p-5 rounded-3xl hover:scale-110 transition-all ease-in-out duration-300">
            <TbDeviceMobileCheck className="text-4xl" />
            <div className="grid gap-3">
              <h3 className="text-xl">UI/UX Design</h3>
              <p>
                Design user-centered interfaces that are both visually appealing
                and easy to use, helping businesses achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
