import Image from 'next/image'
import React from 'react'
import PrimaryBtn from '../Buttons/PrimaryBtn'
import { AnimatedH2 } from './AnimatedH2'
import AnimatedNum from './AnimatedNum'

export default function BentoGrid() {
    return (
        <div className='grid md:grid-cols-4 md:grid-rows-2 gap-6 mx-auto lg:max-w-7xl md:max-w-2xl max-w-xs h-full'>

            {/* Main Card */}
            <div className="bg-dark rounded-3xl p-8 lg:px-9 col-span-2 row-span-2 grid place-content-center -bg-linear-45 from-primary to-dark to-80% h-full">
                <div className="grid gap-8 md:my-14 my-10 px-5 h-fit w-fit">
                    <h1 className='lg:text-5xl text-2xl lg:leading-10 leading-6'>Transforming<br /><span className="lg:text-7xl text-[2.3rem] lg:leading-14 leading-9">Ideas Into Stunning Visuals</span></h1>

                    <p className='text-sm text-white/70'>Welcome to Designs by Eyad, where we bring the cosmos of graphic design and web design to life! Dive into our galaxy of visual splendors and let us help you chart the future of your brand.</p>
                </div>
            </div>


            <div className="grid col-span-2 row-span-2 gap-6">

                <div className="bg-dark p-6 flex rounded-3xl md:h-full h-56 relative overflow-hidden">
                    <Image alt='Artworks Grid' className='absolute opacity-50 right-0 -top-8' src={"/Imgs/artwork-grid.png"} width={250} height={250} />
                    <div className="grid gap-7 z-10 self-end h-fit">
                        {/* <AnimatedH2 className='text-3xl w-80 m-0 md:leading-10 leading-6' text='Step Into Artworks I Love'/> */}
                        <h2 className='text-3xl w-80 m-0 md:leading-10 leading-6'>Step Into Artworks I Love</h2>
                        <PrimaryBtn link={"/artworks"} text={"See My Artworks"} target={false} />
                    </div>
                </div>

                <div className="flex md:flex-row flex-col items-center gap-6 md:h-full h-fit">
                    <div className="bg-dark p-6 rounded-3xl w-full h-full grid place-items-center">
                        <div className="grid place-items-center">
                            <p className='font-bold uppercase text-7xl text-center'>+<AnimatedNum from={0} to={8} /></p>
                            <h3 className='text-sm text-center'>Projects</h3>
                        </div>
                    </div>
                    <div className="bg-dark p-6 rounded-3xl w-full h-full grid place-items-center">
                        <div className="grid place-items-center">
                            <p className='font-bold uppercase text-7xl text-center'>+<AnimatedNum from={0} to={4} /></p>
                            <h3 className='text-sm text-center'>Years of Experices</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
