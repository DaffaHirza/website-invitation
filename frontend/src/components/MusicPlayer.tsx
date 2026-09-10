import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MusicPlayer({ isOpened }: { isOpened: boolean }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (isOpened && audioRef.current) {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch(() => {
                setIsPlaying(false);
            });
        }
    }, [isOpened]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    if (!isOpened) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <audio ref={audioRef} loop>
                <source src="sfx/backsound.mp3" type="audio/mpeg" />
            </audio>

            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                onClick={togglePlay}
                className={`w-14 h-14 rounded-full flex items-center justify-center text-[#C19A6B] shadow-[0_4px_20px_rgba(61,20,20,0.4)] border border-[#C19A6B]/30 backdrop-blur-md transition-colors duration-300 ${isPlaying ? 'bg-[#3d1414]' : 'bg-[#fdfaf6] text-[#3d1414]'}`}
            >
                {isPlaying ? (
                    <div className="relative flex items-center justify-center">
                        <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                        </svg>
                        <span className="absolute w-full h-full rounded-full animate-ping bg-[#C19A6B] opacity-20 pointer-events-none"></span>
                    </div>
                ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
                    </svg>
                )}
            </motion.button>
        </div>
    );
}
