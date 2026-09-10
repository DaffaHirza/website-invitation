import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RsvpSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        attendance: 'hadir',
        guests: '1',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';
            const response = await fetch(`${apiUrl}/rsvp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    status: formData.attendance, // mapping dari attendance ke status
                    jumlah_tamu: formData.attendance === 'hadir' ? parseInt(formData.guests) : 0, // mapping ke jumlah_tamu
                })
            });

            const result = await response.json();

            if (response.ok) {
                alert('Terima kasih atas konfirmasi Anda!');
                // Reset form jika perlu
            } else {
                alert('Gagal menyimpan RSVP. Pastikan backend berjalan.');
                console.error(result);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            alert('Gagal menghubungi server. Pastikan backend berjalan di port 8000.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative w-full py-28 bg-[#fdfaf6] overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-12">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-great-vibes text-[#3d1414] mb-4">RSVP</h2>
                    <p className="text-xl font-medium text-[#3d1414]/80 font-serif">
                        Kami sangat menantikan kehadiran Anda. Silakan isi formulir di bawah ini untuk mengonfirmasi kehadiran Anda di hari bahagia kami.
                    </p>
                    <div className="w-12 h-px bg-[#C19A6B] mx-auto mt-8" />
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="relative bg-white p-8 md:p-14 shadow-[0_20px_60px_-15px_rgba(61,20,20,0.05)] rounded-sm border border-[#3d1414]/5"
                >
                    <div className="absolute inset-2 border border-[#C19A6B]/20 pointer-events-none rounded-sm" />

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">

                        <div className="flex flex-col gap-2 md:col-span-2">
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

                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label htmlFor="email" className="text-[11px] tracking-[0.15em] uppercase text-[#C19A6B] font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-0 py-2 bg-transparent border-b border-[#3d1414]/10 focus:border-[#C19A6B] outline-none transition-colors text-[#3d1414] font-light placeholder:text-[#3d1414]/20"
                                placeholder="Cth: john@example.com"
                            />
                        </div>

                        <div className="flex flex-col gap-2 md:col-span-2 mt-2">
                            <label htmlFor="attendance" className="text-[11px] tracking-[0.15em] uppercase text-[#C19A6B] font-medium">
                                Konfirmasi Kehadiran
                            </label>
                            <select
                                id="attendance"
                                value={formData.attendance}
                                onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                                className="w-full px-0 py-3 bg-transparent border-b border-[#3d1414]/10 focus:border-[#C19A6B] outline-none transition-colors text-[#3d1414] font-light cursor-pointer appearance-none"
                                style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23C19A6B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center', backgroundSize: '0.65em auto' }}
                            >
                                <option value="hadir">Ya, dengan senang hati saya akan hadir</option>
                                <option value="tidak_hadir">Maaf, saya tidak bisa hadir</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <AnimatePresence>
                                {formData.attendance === 'hadir' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                        animate={{ opacity: 1, height: 'auto', marginTop: '0.5rem' }}
                                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                        className="flex flex-col gap-2 overflow-hidden"
                                    >
                                        <label htmlFor="guests" className="text-[11px] tracking-[0.15em] uppercase text-[#C19A6B] font-medium">
                                            Jumlah Tamu (Termasuk Anda)
                                        </label>
                                        <select
                                            id="guests"
                                            value={formData.guests}
                                            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                            className="w-full px-0 py-3 bg-transparent border-b border-[#3d1414]/10 focus:border-[#C19A6B] outline-none transition-colors text-[#3d1414] font-light cursor-pointer appearance-none"
                                            style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23C19A6B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center', backgroundSize: '0.65em auto' }}
                                        >
                                            <option value="1">1 Orang</option>
                                            <option value="2">2 Orang</option>
                                            <option value="3">3 Orang</option>
                                            <option value="4">4 Orang</option>
                                            <option value="5">5 Orang</option>
                                        </select>
                                    </motion.div>
                                )}
                            </AnimatePresence>
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
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
