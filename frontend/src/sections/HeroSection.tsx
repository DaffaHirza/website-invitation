import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type HeroSectionProps = {
    coupleName?: string;
    date?: string;
    venue?: string;
    heroImage?: string;
};

export default function HeroSection({
    coupleName = 'Ricky & Felly',
    date = 'Sabtu, 20 Desember 2025',
    venue = 'Hotel Grand Ballroom, Jakarta',
    heroImage = 'src/assets/heroimage.png',
}: HeroSectionProps) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="w-full h-screen relative items-center justify-center overflow-hidden bg-[#3d1414]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt=""
                    className="w-full h-full object-cover opacity-70"
                />
            </div>

            {/* Content */}
            <div className="relative w-full h-full flex flex-col justify-center items-center text-center px-6 py-20">
                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={loaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-3xl text-white font-cormorant"
                >
                    The Wedding of
                </motion.p>

                {/* Couple name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={loaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl sm:text-6xl md:text-7xl font-serif text-white/95 leading-tight mb-6"
                >
                    {coupleName}
                </motion.h1>

                {/* Decorative divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={loaded ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="w-24 h-px bg-white/30 mb-6"
                />

                {/* Date */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={loaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-base tracking-[0.15em] uppercase text-white font-cormorant mb-2"
                >
                    {date}
                </motion.p>

                {/* Venue */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={loaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="text-sm tracking-wide text-white font-cormorant"
                >
                    {venue}
                </motion.p>
            </div>
        </section>
    );
}
