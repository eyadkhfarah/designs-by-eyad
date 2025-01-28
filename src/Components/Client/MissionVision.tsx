import React from 'react'

const text = [
    {
        Heading: "Mission",
        Content: "To empower businesses across Aswan and Upper Egypt by providing affordable, professional, and audience-focused visual identity designs that bring their brands to life and communicate their value effectively."
    },
    {
        Heading: "Vision",
        Content: "To be the leading design partner in Upper Egypt, transforming how local businesses present themselves by creating distinctive and impactful branding that competes on a national and international scale."
    }
]

export default function MissionVision() {
    return (
        <>
            <div className="flex lg:flex-row flex-col mx-auto lg:max-w-7xl md:max-w-2xl max-w-xs py-10 gap-8 md:my-16 my-9">
                {text.map((item, index) => (
                    <div key={index} className="grid gap-4 p-8 bg-dark rounded-3xl">
                        <h3 className='text-primary'>{item.Heading}</h3>
                        <p>{item.Content}</p>
                    </div>
                ))}
            </div>
        </>
    )
}