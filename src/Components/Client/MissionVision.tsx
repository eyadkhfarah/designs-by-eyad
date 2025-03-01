"use client"
import { useTranslations } from 'next-intl';

const text = [
    {
        Heading: "AboutPage.MissionAndVision.Mission.title",
        Content: "AboutPage.MissionAndVision.Mission.subtitle"
    },
    {
        Heading: "AboutPage.MissionAndVision.Vision.title",
        Content: "AboutPage.MissionAndVision.Vision.subtitle"
    }
]

export default function MissionVision() {
    const t = useTranslations();

    return (
        <>
            <div className="flex lg:flex-row flex-col mx-auto lg:max-w-7xl md:max-w-2xl max-w-xs py-10 gap-8 md:my-16 my-9">
                {text.map((item, index) => (
                    <div key={index} className="grid gap-4 p-8 bg-dark rounded-3xl">
                        <h3 className='text-primary'>{t(item.Heading)}</h3>
                        <p>{t(item.Content)}</p>
                    </div>
                ))}
            </div>
        </>
    )
}