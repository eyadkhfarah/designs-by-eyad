import Image from 'next/image'
import React from 'react'
import PrimaryBtn from '../Buttons/PrimaryBtn'

export default function BentoGrid() {
    return (
        <div className='grid md:grid-cols-4 md:grid-rows-2 lg:my-8 my-5 gap-6 mx-auto lg:max-w-7xl md:max-w-2xl max-w-xs h-full'>
            <div className="bg-dark rounded-3xl p-8 lg:px-10 col-span-2 row-span-2 grid place-content-center -bg-linear-45 from-primary to-dark to-80% h-full">
                <div className="grid gap-8 lg:my-14 my-10 h-fit w-fit">
                    <h1 className='md:w-md lg:text-5xl md:text-4xl text-3xl md:leading-10 leading-6'>Transforming Ideas Into Stunning Visuals</h1>
                    <p className='md:w-xs text-white/70'>Welcome to Designs by Eyad, where we bring the cosmos of graphic design and web design to life! Dive into our galaxy of visual splendors and let us help you chart the future of your brand.</p>
                </div>
            </div>


            <div className="grid col-span-2 row-span-2 gap-6">

                <div className="bg-dark p-6 flex rounded-3xl md:h-full h-56 relative overflow-hidden">
                    <Image alt='Artworks Grid' className='absolute opacity-50 right-0 -top-8' src={"/Imgs/artwork-grid.png"} width={250} height={250} />
                    <div className="grid gap-7 z-10 self-end h-fit">
                        <h2 className='w-80 m-0 md:leading-10 leading-7'>Step Into Artworks I Love</h2>
                        <PrimaryBtn link={"/artworks"} text={"See My Artworks"} target={false} />
                    </div>
                </div>

                <div className="flex md:flex-row flex-col items-center gap-6 md:h-full h-fit">
                    <div className="bg-dark p-6 rounded-3xl w-full h-full grid place-items-center">
                        <p className='font-bold uppercase text-7xl text-center md:leading-0'>+8</p>
                        <h3 className='text-sm text-center md:leading-0'>Projects</h3>
                    </div>
                    <div className="bg-dark p-6 rounded-3xl w-full h-full grid place-items-center">
                        <p className='font-bold uppercase text-7xl text-center md:leading-0'>+4</p>
                        <h3 className='text-sm text-center md:leading-0'>Years of Experices</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
