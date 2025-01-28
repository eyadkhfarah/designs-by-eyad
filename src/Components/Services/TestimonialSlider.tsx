'use client';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel"
import { Card, CardContent } from "@/Components/ui/card"

import { testimonials } from "@/lib/testimonialList";
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import ReactStars from "react-stars";

export const TestimonialSlider = () => {

    return (
        <Carousel plugins={[
            Autoplay({
                delay: 5000,
            }),
        ]} opts={{
            loop: true,
        }} className="mx-auto lg:max-w-6xl md:max-w-2xl max-w-3xs">
            <CarouselContent className="">
                {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="basis-1/1">
                        <div className="p-1">
                            <Card className="border-0 h-full p-6 bg-dark">
                                <CardContent className="flex items-center justify-center">
                                    <div className="lg:flex justify-center gap-8">
                                        {/* <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={800}
                                            height={800}
                                            className="w-32 h-32 md:m-0 mb-8 rounded-full"
                                        /> */}
                                        <div className="grid h-fit gap-8">
                                            <p className="md:max-w-3xl max-w-40 md:text-lg text-sm">{testimonial.quote}</p>
                                            <div className="grid gap-3">

                                                <h3 className="md:text-xl text-base font-bold leading-0 text-primary">{testimonial.name}</h3>
                                                <p className="md:text-lg text-xs font-semibold text-gray-600">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="mt-5">
                <CarouselPrevious className="md:h-16 md:w-16 h-10 w-10 border-0 bg-dark shadow-xl" />
                <CarouselNext className="md:h-16 md:w-16 h-10 w-10 border-0 bg-dark shadow-xl" />
            </div>

        </Carousel>

    )
}

//  <Rating key={testimonial.id} value={testimonial.rating} /> 

{/* <ReactStars edit={false} value={testimonial.rating} count={5} size={24} color2={'#ffd700'} /> */ }

// const myStyles = {
//     itemShapes: RoundedStar,
//     orientation: "vertical",
//     activeFillColor: '#ffb700',
//     inactiveFillColor: '#fbf1a9'
// }
