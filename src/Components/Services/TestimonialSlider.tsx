"use client";

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
import { useTranslations } from "next-intl";

export const TestimonialSlider = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 md:px-0">
      <Carousel
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
        opts={{
          loop: true,
          startIndex: testimonials.length - 1,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card className="border border-white/10 bg-neutral-900 rounded-[3rem] overflow-hidden">
                <CardContent className="p-8 md:p-16">
                  <div className="flex flex-col lg:flex-row gap-10">
                    {/* Profile Section */}
                    <div className="relative">
                      <div className="absolute inset-0 w-32 h-32 bg-primary/20 blur-2xl rounded-full" />
                      <Image
                        src={
                          testimonial.image === ""
                            ? "https://avatar.iran.liara.run/public/42"
                            : testimonial.image
                        }
                        alt={testimonial.name}
                        width={200}
                        height={200}
                        className="relative z-10 w-32 h-32 md:w-44 md:h-44 object-cover rounded-full border-2 border-primary/50"
                      />
                    </div>

                    {/* Quote Section */}
                    <div className="flex-1 flex flex-col relative">
                      {/* Decorative Quote Mark */}
                      <span className="absolute -top-8 -left-4 text-primary/10 text-[10rem] font-serif leading-none select-none">
                        “
                      </span>

                      <div className="relative z-10">
                        <p className="text-xl md:text-2xl lg:text-3xl text-white font-medium italic leading-relaxed mb-8">
                          {testimonial.quote}
                        </p>

                        <div className="space-y-1">
                          <h3 className="text-xl md:text-2xl font-bold text-primary">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm md:text-base font-mono uppercase tracking-widest text-neutral-500">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation - Positioned elegantly below or on sides */}
        <div className="flex justify-center gap-4 mt-10">
          <CarouselPrevious className="static cursor-pointer translate-y-0 h-14 w-14 rounded-full border-white/10 bg-neutral-900 hover:bg-primary hover:text-dark transition-all duration-300" />
          <CarouselNext className="static cursor-pointer translate-y-0 h-14 w-14 rounded-full border-white/10 bg-neutral-900 hover:bg-primary hover:text-dark transition-all duration-300" />
        </div>
      </Carousel>
    </div>
  );
};
