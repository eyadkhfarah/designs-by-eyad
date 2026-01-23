import Image from 'next/image'
import React from 'react'
import PrimaryBtn from '../Buttons/PrimaryBtn'
import AnimatedNum from './AnimatedNum'

export default function BentoGrid() {
    return (
        <div className='grid md:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-6 mx-auto h-full w-full'>
            
            {/* --- Main Hero Card (Left) --- */}
            <div className="relative group col-span-2 row-span-2 rounded-[2.5rem] bg-neutral-900 border border-white/10 overflow-hidden p-8 lg:p-10 flex flex-col justify-center">
                
                {/* Background Decor: Subtle gradient blob */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-10" />

                <div className="relative z-10 flex flex-col gap-6">
                    <h1 className='font-medium text-white lg:text-5xl text-3xl leading-tight'>
                        Transforming <br />
                        {/* Gradient Text for Impact */}
                        <span className="font-bold lg:text-7xl text-4xl lg:leading-[1.1] bg-gradient-to-r from-primary via-white to-primary/50 bg-clip-text text-transparent">
                            Ideas Into <br/> Stunning Visuals
                        </span>
                    </h1>

                    <p className='text-base text-neutral-400 leading-relaxed max-w-md'>
                        Welcome to Designs by Eyad. Dive into a galaxy of visual splendors where graphic design meets digital innovation. Let's chart the future of your brand.
                    </p>
                </div>
            </div>


            {/* --- Right Column Container --- */}
            <div className="grid col-span-2 row-span-2 gap-4 lg:gap-6">

                {/* Top Right: Artworks Call to Action */}
                <div className="group relative bg-neutral-900 border border-white/10 p-8 rounded-[2.5rem] md:h-full h-64 overflow-hidden flex items-end transition-all hover:border-primary/30">
                    
                    {/* Background Image with improved blending */}
                    <div className="absolute top-0 right-0 w-3/4 h-full z-0 opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500 ease-out">
                         <Image 
                            alt='Artworks Grid' 
                            src={"/Imgs/artwork-grid.png"} 
                            fill
                            className="object-cover object-right-top"
                         />
                         {/* Gradient overlay to make text readable */}
                         <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/50 to-transparent" />
                    </div>

                    <div className="relative z-10 flex flex-col gap-4">
                        <h2 className='text-2xl md:text-3xl font-semibold text-white leading-tight max-w-[12rem]'>
                            Step Into <span className="text-primary">Artworks</span> I Love
                        </h2>
                        <div className="w-fit">
                            <PrimaryBtn link={"/artworks"} text={"See My Artworks"} target={false} />
                        </div>
                    </div>
                </div>

                {/* Bottom Right: Stats Row */}
                <div className="grid md:grid-cols-2 gap-4 lg:gap-6 md:h-full h-fit">
                    
                    {/* Stat Card 1 */}
                    <div className="bg-neutral-900 border border-white/10 p-6 rounded-[2.5rem] w-full h-full flex flex-col items-center justify-center relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <p className='font-bold text-6xl lg:text-7xl text-white tracking-tighter'>
                            +<AnimatedNum from={0} to={12} />
                        </p>
                        <h3 className='text-sm text-neutral-400 uppercase tracking-widest mt-2'>Projects</h3>
                    </div>

                    {/* Stat Card 2 */}
                    <div className="bg-neutral-900 border border-white/10 p-6 rounded-[2.5rem] w-full h-full flex flex-col items-center justify-center relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <p className='font-bold text-6xl lg:text-7xl text-white tracking-tighter'>
                            +<AnimatedNum from={0} to={4} />
                        </p>
                        <h3 className='text-sm text-neutral-400 uppercase tracking-widest mt-2'>Years Exp.</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}