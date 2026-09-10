import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

export default function WishesSection() {
    const [formData, setFormData] = useState({
        name: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [wishesList, setWishesList] = useState<any[]>([]);

    useEffect(() => {
        const fetchWishes = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';
                const response = await fetch(`${apiUrl}/wishes`);
                const data = await response.json();
                if (response.ok) {
                    setWishesList(data.reverse());
                }
            } catch (error) {
                console.error("Gagal mengambil data ucapan:", error);
            }
        };

        fetchWishes();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';
            const response = await fetch(`${apiUrl}/wishes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                setWishesList([result, ...wishesList]);
                setFormData({ name: '', message: '' });
                toast.success('Pesan Anda berhasil dikirim!');
            } else {
                toast.error('Gagal mengirim ucapan. Coba lagi nanti.');
                console.error(result);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            toast.error('Gagal menghubungi server.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative w-full py-28 px-6 bg-[#3d1414] overflow-hidden font-serif">

            <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-great-vibes text-white mb-4">Doa dan Ucapan</h2>
                    <p className="text-xl font-medium text-white/80 font-serif">
                        Doa dan ucapan terbaik dari Anda menjadi kebahagiaan bagi kami:
                    </p>
                    <div className="w-12 h-px bg-[#C19A6B] mx-auto mt-8" />
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="relative bg-white p-8 md:p-14 shadow-[0_20px_60px_-15px_rgba(61,20,20,0.05)] rounded-sm border border-[#3d1414]/5 mb-16 max-w-3xl mx-auto"
                >
                    <div className="absolute inset-2 border border-[#C19A6B]/20 pointer-events-none rounded-sm" />

                    <div className="flex flex-col gap-2 md:col-span-2 relative z-10">
                        <label htmlFor="name" className="text-[11px] tracking-[0.15em] uppercase text-[#C19A6B] font-medium">
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-0 py-2 bg-transparent border-b border-[#3d1414]/10 focus:border-[#C19A6B] outline-none transition-colors text-[#3d1414] font-light placeholder:text-[#3d1414]/20"
                            placeholder="Cth: John Doe"
                        />
                    </div>

                    <div className="flex flex-col gap-2 md:col-span-2 mt-4 relative z-10">
                        <label htmlFor="message" className="text-[11px] tracking-[0.15em] uppercase text-[#C19A6B] font-medium">
                            Ucapan & Doa
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-3 mt-1 bg-[#fdfaf6] border border-[#3d1414]/10 focus:border-[#C19A6B] outline-none transition-colors text-[#3d1414] font-light resize-none placeholder:text-[#3d1414]/20 rounded-sm"
                            placeholder="Berikan ucapan manis untuk kedua mempelai..."
                        />
                    </div>

                    <div className="md:col-span-2 mt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-[#3d1414] text-white/90 text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#2d0f0f] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 rounded-sm shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            {isSubmitting ? 'Mengirim...' : 'Kirim Konfirmasi'}
                        </button>
                    </div>
                </motion.form>


            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full relative overflow-hidden py-4"
            >
                <div className="absolute top-0 left-0 w-12 md:w-32 h-full bg-gradient-to-r from-[#3d1414] to-transparent z-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-12 md:w-32 h-full bg-gradient-to-l from-[#3d1414] to-transparent z-20 pointer-events-none" />

                <div className="flex w-max animate-marquee hover:pause gap-6 px-6">
                    {[...wishesList, ...wishesList].map((wish, index) => (
                        <div
                            key={index}
                            className="min-w-[280px] sm:min-w-[320px] max-w-[320px] bg-white backdrop-blur-sm p-6 rounded-sm border border-[#C19A6B]/20 relative flex-shrink-0 shadow-lg"
                        >
                            <div className="flex flex-col justify-between h-full">
                                <div className="flex flex-col mb-3">
                                    <h4 className="text-[#C19A6B] font-serif text-lg tracking-wide">{wish.name}</h4>
                                    <p className="text-[#3d1414] font-light text-sm leading-relaxed italic line-clamp-4">
                                        "{wish.message}"
                                    </p>
                                </div>
                                <div className="flex justify-end mt-4">
                                    <p className="text-[10px] text-[#C19A6B] tracking-wider uppercase">
                                        {wish.created_at ? new Date(wish.created_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : "Baru saja"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 0.75rem)); } /* -50% width and half the gap */
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .hover\\:pause:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
