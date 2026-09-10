import { motion } from 'framer-motion';

export default function InformasiSection() {
    return (
        <section className="relative w-full py-28 bg-[#3d1414] overflow-hidden font-serif">
            <div className="max-w-6xl bg-[#3d1414]  mx-auto px-6 sm:px-12">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-great-vibes text-white mb-4">Informasi Acara</h2>
                    <p className="text-xl font-medium text-white/80 font-serif">Rangkaian Momen Istimewa Kami</p>
                    <div className="w-16 h-px bg-[#C19A6B] mx-auto mt-6" />
                </motion.div>

                <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 lg:gap-16">
                    {/* Akad Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 relative flex flex-col justify-center bg-[#fdfaf6] p-18 md:p-20 text-center rounded-t-full shadow-sm hover:shadow-xl transition-shadow duration-500 border border-[#C19A6B]/30"
                    >
                        <div className="absolute flex top-4 left-4 right-4 bottom-4 border border-[#C19A6B]/20 rounded-t-full pointer-events-none" />

                        <h3 className="text-3xl font-serif text-[#3d1414] mb-2">Akad Nikah</h3>
                        <div className="w-8 h-px bg-[#C19A6B]/50 mx-auto mb-6" />

                        <div className="space-y-4 mb-10">
                            <div>
                                <p className="text-sm font-semibold tracking-widest text-[#3d1414] uppercase mb-1">Minggu</p>
                                <p className="text-[#3d1414]/80 text-lg">12 Desember 2027</p>
                            </div>
                            <div>
                                <p className="text-[#C19A6B] font-medium tracking-[0.15em] text-sm">Pukul 08:00 - 10:00 WIB</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <p className="text-sm font-serif font-semibold tracking-widest text-[#3d1414] uppercase mb-2">GBT Kristus Alfa Omega Puri Anjasmoro</p>
                            <p className="text-[#3d1414]/70 text-sm leading-relaxed max-w-[250px] mx-auto">
                                Jl. Puri Anjasmoro Blok DD No. 12, Tawangsari, Semarang Barat, Kota Semarang, Jawa Tengah 50144                            </p>
                        </div>

                        <a
                            href="https://www.google.com/maps/place/Gereja+Bethel+Tabernakel+Kristus+Alfa+Omega/@-6.9680885,110.3839697,17z/data=!3m1!4b1!4m6!3m5!1s0x2e70f4d0628f4535:0x185167e72db0bcaa!8m2!3d-6.9680938!4d110.3865446!16s%2Fg%2F1pzs_153s?entry=ttu&g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank"
                            rel="noreferrer"
                            className="inline-block px-8 py-3 bg-[#3d1414] text-white text-xs tracking-widest rounded-sm hover:bg-[#C19A6B] transition-colors duration-300"
                        >
                            Lihat Lokasi
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative flex flex-col justify-center bg-[#fdfaf6] p-18 md:p-20 text-center rounded-t-full shadow-sm hover:shadow-xl transition-shadow duration-500 border border-[#C19A6B]/30"
                    >
                        <div className="absolute top-4 left-4 right-4 bottom-4 border border-[#C19A6B]/20 rounded-t-full pointer-events-none" />

                        <h3 className="text-3xl font-serif text-[#3d1414] mb-2">Resepsi</h3>
                        <div className="w-8 h-px bg-[#C19A6B]/50 mx-auto mb-6" />

                        <div className="space-y-4 mb-10">
                            <div>
                                <p className="text-sm font-semibold tracking-widest text-[#3d1414] uppercase mb-1">Minggu</p>
                                <p className="text-[#3d1414]/80 text-lg">12 Desember 2027</p>
                            </div>
                            <div>
                                <p className="text-[#C19A6B] font-medium tracking-[0.15em] text-sm">Pukul 11:00 - 14:00 WIB</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <p className="text-sm font-semibold tracking-widest text-[#3d1414] uppercase mb-2">Grand Admiral Ballroom</p>
                            <p className="text-[#3d1414]/70 text-sm leading-relaxed max-w-[250px] mx-auto">
                                Jl. Ki Mangunsarkoro No.38, Karangkidul, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50136                            </p>
                        </div>

                        <a
                            href="https://www.google.com/maps/place/Grand+Admiral+Ballroom/@-6.9925851,110.3661428,13z/data=!4m10!1m2!2m1!1sgrand+ballroom+hotel!3m6!1s0x2e708ca102237727:0xd7c9d352cc279996!8m2!3d-6.9925851!4d110.4291529!15sChRncmFuZCBiYWxscm9vbSBob3RlbFoWIhRncmFuZCBiYWxscm9vbSBob3RlbJIBDXdlZGRpbmdfdmVudWWaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUm9OMkZ1VURaQlJSQULgAQD6AQQIABAk!16s%2Fg%2F11c3mqkzc3?entry=ttu&g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block px-8 py-3 bg-[#3d1414] text-white text-xs tracking-widest rounded-sm hover:bg-[#C19A6B] transition-colors duration-300"
                        >
                            Lihat Lokasi
                        </a>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
