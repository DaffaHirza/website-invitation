import { motion } from 'framer-motion';

const stories = [
    {
        nama: "Ricky Ravanelli, S.E.",
        mempelai: "Mempelai Pria",
        description: "Semua berawal dari sebuah kebetulan yang manis di sebuah kedai kopi di sudut kota. Senyum pertama, sapaan canggung, dan percakapan panjang yang tak terasa hingga senja berganti malam. Saat itu, kami tahu ada sesuatu yang istimewa di antara kami.",
        image: "assets/cwo.png",
        ortu: "Putra dari Bapak Parent Man & Ibu Parent Lady",
        align: "right"
    },
    {
        nama: "Fellycia Indriyani Pratama, S.I.Kom.",
        mempelai: "Mempelai Wanita",
        description: "Setelah melewati berbagai musim bersama, tertawa, menangis, dan saling menguatkan, kami menyadari bahwa kami tak ingin lagi berjalan sendiri-sendiri. Di bawah langit senja yang indah, sebuah janji terucap untuk mengarungi hidup bersama selamanya.",
        image: "assets/cwe.png",
        ortu: "Putri dari Bapak Parent Man & Ibu Parent Lady",
        align: "left"
    }
];

export default function StorySection() {
    return (
        <section className="relative w-full py-24 bg-[#fdfaf6] overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 sm:px-12">

                {/* Section nama */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-great-vibes text-[#3d1414] mb-4">Our Love Story</h2>
                    <p className="text-xl font-medium text-[#3d1414]/80 font-serif">Cerita Indah Perjalanan Cinta Kami Hingga Saat Ini</p>
                    <div className="w-16 h-px bg-[#3d1414]/30 mx-auto mt-6" />
                </motion.div>

                {/* Story Timeline */}
                <div className="flex flex-col gap-24">
                    {stories.map((story, index) => {
                        const isImageRight = story.align === 'right';

                        return (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row md:items-stretch items-center gap-10 lg:gap-20 ${isImageRight ? '' : 'md:flex-row-reverse'}`}
                            >
                                {/* Text Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: isImageRight ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className={`w-full md:w-1/2 flex flex-col justify-between ${isImageRight ? 'md:text-right md:items-end' : 'md:text-left md:items-start'} text-center items-center py-4`}
                                >
                                    <div className="flex flex-col">
                                        <span className="text-xl tracking-[0.15em] text-[#C19A6B] font-bold mb-3 font-cormorant">
                                            {story.mempelai}
                                        </span>
                                        <h3 className="text-3xl font-serif text-[#3d1414] mb-5">
                                            {story.nama}
                                        </h3>
                                        <p className="text-[#3d1414]/80 leading-relaxed font-light text-sm sm:text-base max-w-md">
                                            {story.description}
                                        </p>
                                    </div>
                                    <p className="text-[#3d1414]/80 leading-relaxed font-bold font-cormorant text-sm sm:text-base max-w-md mt-8 md:mt-0">
                                        - {story.ortu}
                                    </p>
                                </motion.div>

                                {/* Image Content */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, x: isImageRight ? 50 : -50 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                    className="w-full md:w-1/2 relative group"
                                >
                                    <div className="aspect-[4/3] overflow-hidden rounded-sm relative z-10">
                                        <img
                                            src={story.image}
                                            alt={story.nama}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 border-[1px] border-white/20 pointer-events-none" />
                                    </div>

                                    {/* Decorative background block */}
                                    <div className={`absolute top-6 bottom-[-24px] ${isImageRight ? 'right-[-24px] left-6' : 'left-[-24px] right-6'} bg-[#f3efe6] z-0`} />
                                </motion.div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom decorative/button element from wireframe */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className="mt-28 flex justify-center"
                >
                    <div className="px-8 py-3 bg-[#3d1414] text-white/90 text-base font-cormorant cursor-pointer hover:bg-[#2d0f0f] transition-colors rounded-sm">
                        Perjalanan Kami
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
