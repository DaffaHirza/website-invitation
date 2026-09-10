import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type CountdownSectionProps = {
    targetDate?: string;
};

export default function CountdownSection({
    targetDate = '2027-12-12 08:00:00'
}: CountdownSectionProps) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const target = new Date(targetDate).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = target - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <section className="relative w-full py-16 md:py-24 bg-[#3d1414] overflow-hidden flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center px-4"
            >
                <h2 className="font-allura text-3xl md:text-7xl text-white font-light mb-8">
                    Wedding Countdown Day
                </h2>

                <div className="flex items-center justify-center gap-4 md:gap-8">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="flex flex-col items-center">
                            <span className="text-7xl font-serif text-white/95 mb-2">
                                {value.toString().padStart(2, '0')}
                            </span>
                            <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/50">
                                {unit}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="mt-10 flex justify-center"
            >
                <div className="px-8 py-3 bg-[#C19A6B] text-[#3d1414] text-base font-cormorant cursor-pointer hover:bg-[#f2d3a1] transition-colors rounded-sm">
                    Ingatkan saya
                </div>
            </motion.div>
        </section>
    );
}
