import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type OpeningPageProps = {
    floralImage: string;
    pinImage: string;
    orang?: string;
    bgColor?: string;
    onOpen: () => void;
};

/** Shared cubic‑bezier for the envelope slide‑open */
const EASE_EXPO_OUT = [0.76, 0, 0.24, 1] as const;

/** Panel slide transition */
const PANEL_TRANSITION = { duration: 1.1, ease: EASE_EXPO_OUT };

/** Seal exit animation — floats up and fades */
const SEAL_EXIT = {
    opacity: 0,
    scale: 1.15,
    y: -40,
    transition: { duration: 0.4, ease: 'easeIn' as const },
};

/** Gentle floating loop to draw attention to the seal */
const SEAL_FLOAT = {
    y: [0, -6, 0],
    transition: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' as const },
};

export default function OpeningPage({
    floralImage,
    pinImage,
    orang = 'John Doe',
    bgColor = '#3d1414',
    onOpen,
}: OpeningPageProps) {
    const [sealBroken, setSealBroken] = useState(false);
    const [isOpening, setIsOpening] = useState(false);

    const handleClick = () => {
        if (sealBroken) return;
        setSealBroken(true);
        setTimeout(() => setIsOpening(true), 450);
    };

    return (
        <div
            className="relative w-full h-screen overflow-hidden"

        >
            <motion.div
                className="absolute inset-y-0 left-0 w-1/2 z-[2]"
                style={{ backgroundColor: bgColor }}
                animate={isOpening ? { x: '-100%' } : { x: 0 }}
                transition={PANEL_TRANSITION}
                onAnimationComplete={() => isOpening && onOpen()}
            >
                <img
                    src={floralImage}
                    alt=""
                    draggable={false}
                    className="absolute top-0 left-0 h-full w-auto max-w-none pointer-events-none select-none z-[1]
                               md:opacity-100 opacity-60"
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'left center',

                    }}
                />
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `linear-gradient(to right, transparent 60%, ${bgColor} 100%)`,
                    }}
                />
                <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-black/30 to-transparent" />
            </motion.div>

            <motion.div
                className="absolute inset-y-0 right-0 w-1/2 z-[2]"
                style={{ backgroundColor: bgColor }}
                animate={isOpening ? { x: '100%' } : { x: 0 }}
                transition={PANEL_TRANSITION}
            >
                <img
                    src={floralImage}
                    alt=""
                    draggable={false}
                    className="absolute top-0 right-0 h-full w-auto max-w-none pointer-events-none select-none z-[1]
                               md:opacity-100 opacity-60"
                    style={{
                        transform: 'scaleX(-1)',
                        objectFit: 'cover',
                        objectPosition: 'left center',
                    }}
                />
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `linear-gradient(to left, transparent 60%, ${bgColor} 100%)`,
                    }}
                />
                <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/30 to-transparent" />
            </motion.div>

            {!isOpening && (
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-black/25 z-[3]" />
            )}

            <AnimatePresence>
                {!sealBroken && (
                    <motion.button
                        key="seal"
                        onClick={handleClick}
                        aria-label="Buka undangan"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10] flex flex-col items-center focus:outline-none cursor-pointer group"
                        initial={{ opacity: 1, scale: 1 }}
                        animate={SEAL_FLOAT}
                        exit={SEAL_EXIT}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.93 }}
                    >
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'radial-gradient(circle, rgba(255,200,150,0.15) 0%, transparent 70%)',
                                filter: 'blur(20px)',
                            }}
                            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        />

                        <span className="relative text-sm md:text-3xl text-white font-cormorant mb-8">
                        </span>
                        <span className="relative text-3xl md:text-8xl font-bold font-great-vibes text-white/90 tracking-wide mb-6">
                            Dear {orang}
                        </span>
                        <span className="relative text-sm md:text-3xl text-white font-cormorant mb-8">
                            Dengan penuh sukacita, kami mengundang Anda untuk menjadi bagian dari hari istimewa kami.
                        </span>

                        <img
                            src={pinImage}
                            alt="Wax Seal"
                            draggable={false}
                            className="relative w-50 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-transform duration-200"
                        />
                        <span className="relative mt-6 text-xs tracking-[0.25em] text-white/60 ont-cormorant group-hover:text-white/90 transition-colors">
                            Buka Undangan
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
