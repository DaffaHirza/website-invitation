import { motion } from 'framer-motion';

export default function GallerySection() {
    const photos = [
        {
            id: 1,
            src: "assets/1.png",
            className: "col-span-2 row-span-2 md:col-span-2 md:row-span-2"
        },
        {
            id: 2,
            src: "assets/2.png",
            className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1"
        },
        {
            id: 3,
            src: "assets/3.png",
            className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1"
        },
        {
            id: 4,
            src: "assets/10.png",
            className: "col-span-2 row-span-1 md:col-span-2 md:row-span-1"
        },
        {
            id: 5,
            src: "assets/5.png",
            className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1"
        },
        {
            id: 6,
            src: "assets/6.png",
            className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1"
        },
        {
            id: 7,
            src: "assets/7.png",
            className: "col-span-2 row-span-2 md:col-span-2 md:row-span-1"
        }
    ];

    return (
        <section className="relative w-full py-24 bg-[#fdfaf6] overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 sm:px-12">

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-great-vibes text-[#3d1414] mb-4">Galeri Momen</h2>
                    <p className="text-xl font-medium text-[#3d1414]/80 font-serif">
                        Momen Berharga yang Kami Abadikan
                    </p>
                    <div className="w-16 h-px bg-[#C19A6B]/50 mx-auto mt-6" />
                </motion.div>

                {/* Masonry / Collage Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative overflow-hidden group rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 ${photo.className}`}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-[#3d1414]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                            <img
                                src={photo.src}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
