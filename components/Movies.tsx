'use client';

import { motion } from 'framer-motion';

const movies = [
    {
        id: 1,
        title: "自己紹介",
        youtubeId: "209cbahS4fU"
    },
    {
        id: 2,
        title: "創造政策（教育）",
        youtubeId: "pXWzA8DBC84"
    },
    {
        id: 3,
        title: "創造政策（経済）",
        youtubeId: "OTbUbg2qLJs"
    },
    {
        id: 4,
        title: "創造政策（健康）",
        youtubeId: "Fw5FDoffuU8"
    },
    {
        id: 5,
        title: "小松ひろあきより",
        youtubeId: "zA9gqU7bahQ"
    }
];

export default function Movies() {
    const introMovie = movies[0];
    const policyMovies = movies.slice(1);

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
                        小松ひろあきの想いや政策を、短い動画でわかりやすくお伝えします。
                    </p>
                    <div className="w-16 h-1 bg-brand-blue mx-auto mt-6 rounded-full"></div>
                </motion.div>

                {/* Self Introduction Section */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-bold mb-2">
                            ご挨拶
                        </span>
                        <h4 className="text-2xl font-bold text-slate-800">自己紹介</h4>
                    </motion.div>

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

                {/* Policy Videos Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-bold mb-2">
                            政策解説
                        </span>
                        <h4 className="text-2xl font-bold text-slate-800">4つの創造政策</h4>
                        <p className="text-sm text-slate-500 mt-2">政策のポイントを動画で解説します</p>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {policyMovies.map((movie, index) => (
                            <motion.div
                                key={movie.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="relative aspect-[9/16] bg-slate-100 rounded-xl overflow-hidden shadow-lg border border-slate-200 group hover:shadow-2xl transition-all duration-300"
                            >
                                {movie.youtubeId ? (
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${movie.youtubeId}?playsinline=1&controls=1&rel=0&modestbranding=1`}
                                        title={movie.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        loading="lazy"
                                    />
                                ) : (
                                    /* Pending State */
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-slate-200">
                                        <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-500 text-xl mb-4">
                                            ⏳
                                        </div>
                                        <p className="text-sm font-bold text-slate-600">{movie.title}</p>
                                        <p className="text-xs text-slate-500 mt-2">準備中...</p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
