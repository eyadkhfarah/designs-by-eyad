import ProtImages from "@/Components/Portfolio/ProtImages";
import Image from "next/image";
import { RiFolderImageFill, RiPhoneFill } from "react-icons/ri";
// import { Fi } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <section className="lg:px-28 px-10">
        <div className="md:flex grid lg:gap-16 gap-9 items-center">
          <h1 className="p-0 lg:text-[10rem] md:text-[8rem] text-[5rem] text-center">WOW!</h1>
          <p className="text-xl md:text-left text-center md:m-0 mb-12">
            Welcome to Designs by Eyad, where we bring the cosmos of graphic
            design and web development to life! Dive into our galaxy of visual
            splendors and let us help you chart the future of your brand.
          </p>
        </div>
      </section>

      <Image
        src={"/astro.jpg"}
        width={1500}
        height={500}
        className="rounded-b-[3rem] overflow-hidden aspect-video h-full object-cover object-center mb-32 saturate-0"
      />

     <ProtImages />

      <section className="lg:px-60 md:px-30 px-10 my-60">
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

      <section className="lg:px-60 md:px-30 px-10 my-10">
        <h2 className="text-yellow-500 text-4xl text-center">What I Offer</h2>

        <div className="grid md:grid-cols-2 gap-9 mt-14">
          <div className="grid gap-5 bg-gray-900 p-5 rounded-3xl hover:scale-110 transition-all ease-in-out duration-300">
            <RiFolderImageFill />
            <h3 className="text-xl">Web Development</h3>
          </div>
          <div className="grid gap-5 bg-gray-900 p-5 rounded-3xl hover:scale-110 transition-all ease-in-out duration-300">
            <RiFolderImageFill />
            <h3 className="text-xl">Social Media Design</h3>
          </div>
          <div className="grid gap-5 bg-gray-900 p-5 rounded-3xl hover:scale-110 transition-all ease-in-out duration-300">
            <RiFolderImageFill />
            <h3 className="text-xl">Graphic Design</h3>
          </div>
          <div className="grid gap-5 bg-gray-900 p-5 rounded-3xl hover:scale-110 transition-all ease-in-out duration-300">
            <RiPhoneFill />
            <h3 className="text-xl">UI/UX Design</h3>
          </div>
        </div>
      </section>
    </>
  );
}
