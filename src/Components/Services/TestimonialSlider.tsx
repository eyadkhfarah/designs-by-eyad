'use client';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import { Card, CardContent } from "@/Components/ui/card";
import { testimonials } from "@/lib/testimonialList";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import ReactStars from "react-stars";
import { useTranslations } from 'next-intl';

export const TestimonialSlider = () => {
    // Use the "TestimonialSlider" namespace (ensure you have a corresponding JSON file)
    // const t = useTranslations('TestimonialSlider');

    return (
        <Carousel 
            plugins={[
                Autoplay({
                    delay: 5000,
                }),
            ]} 
            opts={{
                loop: true,
                startIndex: testimonials.length - 1,
            }} 
            className=""
        >
            <CarouselContent className="h-full">
                {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="h-full basis-1/1">
                        <div className="h-full">
                            <Card className="border-0 h-full p-6 bg-dark rounded-3xl">
                                <CardContent className="flex w-full h-full items-center justify-center">
                                    <div className="lg:flex justify-center gap-8">
                                        <Image
                                            src={
                                                testimonial.image === ""
                                                    ? "https://avatar.iran.liara.run/public/42"
                                                    : testimonial.image
                                            }
                                            // alt={t(testimonial.altKey)} // Translate the alt text
                                            alt={testimonial.name}
                                            width={800}
                                            height={800}
                                            className="w-32 h-32 md:m-0 mb-8 rounded-full"
                                        />
                                        <div className="grid h-fit w-full gap-14">
                                            <p className="md:max-w-3xl md:text-2xl text-lg">
                                                {testimonial.quote}
                                            </p>
                                            <div className="grid gap-3">
                                                <h3 className="md:text-2xl text-lg font-bold leading-0 text-primary">
                                                    {testimonial.name}
                                                </h3>
                                                <p className="md:text-lg font-semibold text-neutral-500">
                                                    {testimonial.role}
                                                </p>
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
                <CarouselPrevious className="md:p-10 cursor-pointer border-0 bg-dark shadow-xl" />
                <CarouselNext className="md:p-10 cursor-pointer border-0 bg-dark shadow-xl" />
            </div>
        </Carousel>
    );
};
