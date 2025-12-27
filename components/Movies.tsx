'use client';

import { motion } from 'framer-motion';

const movies = [
    {
        id: 1,
        title: "自己紹介",
        youtubeId: "209cbahS4fU"
    }
];

export default function Movies() {
    const introMovie = movies[0];

    return (
        <section id="movies" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-2">MOVIES</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">活動ショート動画</h3>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        小松ひろあきの人柄や想いを、短い動画でわかりやすくお伝えします。
                    </p>
                    <div className="w-16 h-1 bg-brand-blue mx-auto mt-6 rounded-full"></div>
                </motion.div>

                {/* Self Introduction Section */}
                <div className="mb-10">
                    <div className="max-w-sm mx-auto">
                        <motion.div
                            key={introMovie.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative aspect-[9/16] bg-slate-100 rounded-2xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-slate-200"
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${introMovie.youtubeId}?playsinline=1&controls=1&rel=0&modestbranding=1`}
                                title={introMovie.title}
                                className="absolute inset-0 w-full h-full object-cover"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
