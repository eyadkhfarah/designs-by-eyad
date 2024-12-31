'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { testimonials } from '@/lib/testimonialList';
import { Rating, RoundedStar } from '@smastrom/react-rating'
import ReactStars from 'react-stars';

const myStyles = {
    itemShapes: RoundedStar,
    orientation: "vertical",
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
}

export const TestimonialSlider = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials
            .length);
    };

    return (
        <div className="relative w-full lg:max-w-6xl mx-auto lg:py-12 lg:p-6">
            <div className="overflow-hidden">
                <div className="flex transition-transform
                        duration-700 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="md:flex-shrink-0 flex-grow md:w-full p-8">
                            <div className="bg-gray-900 rounded-2xl w-full h-full p-6">
                                <div className="md:flex justify-center gap-8">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={800}
                                        height={800}
                                        className="w-32 h-32 rounded-full"
                                    />
                                    <div className="grid md:max-w-xl w-full">
                                        <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                                        <p className="text-sm font-semibold text-yellow-600">{testimonial.role}</p>
                                            {/* <Rating key={testimonial.id} value={testimonial.rating} /> */}
                                        <div className="h-8">
                                            <ReactStars edit={false} value={testimonial.rating} count={5} size={24} color2={'#ffd700'} />
                                        </div>
                                        <p className="mt-4 text-gray-600">{testimonial.quote}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots for navigation */}
            <div className="flex justify-center space-x-2 mt-4">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2
                        rounded-full ${current === index ? 'bg-yellow-600' :
                                'bg-gray-300'} transition-all duration-300`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>

            {/* Previous button */}
            <div className="absolute top-1/2
                      left-0 transform -translate-y-1/2">
                <button
                    className="p-2 bg-yellow-500
                     hover:bg-yellow-600
                     text-black rounded-full
                     transition-colors duration-300"
                    onClick={prevSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </div>

            {/* Next button */}
            <div className="absolute top-1/2
                      right-0 transform -translate-y-1/2">
                <button
                    className="p-2 bg-yellow-500
                     hover:bg-yellow-600
                     text-black rounded-full
                     transition-colors duration-300"
                    onClick={nextSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}