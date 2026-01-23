"use client"
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

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
        <div className="flex lg:flex-row flex-col mx-auto w-full py-10 gap-6 lg:gap-8 my-12">
            {text.map((item, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex-1 group relative overflow-hidden"
                >
                    {/* Card Container */}
                    <div className="h-full overflow-hidden grid gap-5 p-8 lg:p-12 bg-neutral-900 border border-white/10 rounded-[2.5rem] relative z-10 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_-15px_rgba(var(--primary-rgb),0.3)]">
                        
                        {/* Decorative Background Icon/Shape */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />

                        {/* Heading */}
                        <h3 className="text-primary text-2xl lg:text-3xl font-bold tracking-tight">
                            {t(item.Heading)}
                        </h3>

                        {/* Divider Line */}
                        <div className="w-12 h-1 bg-primary/30 rounded-full group-hover:w-20 group-hover:bg-primary transition-all duration-500" />

                        {/* Content */}
                        <p className="text-neutral-400 text-lg leading-relaxed group-hover:text-neutral-300 transition-colors">
                            {t(item.Content)}
                        </p>
                    </div>

                    {/* Subtle Gradient Glow behind the card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />
                </motion.div>
            ))}
        </div>
    )
}