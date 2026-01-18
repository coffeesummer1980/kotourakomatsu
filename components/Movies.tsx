'use client';

import { motion } from 'framer-motion';

const movies = [
    {
        id: 1,
        title: "自己紹介",
        youtubeId: "209cbahS4fU"
    }
];

const activities = [
    {
        id: 1,
        title: "町民の方を訪問",
        youtubeId: "uSL-XINLW2I",
        isShort: true
    },
    {
        id: 2,
        title: "Coming Soon",
        youtubeId: "",
        isShort: true
    }
];

export default function Movies() {
    const introMovie = movies[0];

    return (
        <section id="movies" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Self Introduction Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-2">MOVIES</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">自己紹介動画</h3>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        小松ひろあきの人柄や想いを、短い動画でわかりやすくお伝えします。
                    </p>
                    <div className="w-16 h-1 bg-brand-blue mx-auto mt-6 rounded-full"></div>
                </motion.div>

                {/* Self Introduction Video */}
                <div className="mb-24">
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

                {/* Activities Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800">活動レポート</h3>
                    <p className="mt-3 text-slate-600">
                        町を歩き、皆さんの声を聴く活動の様子をお届けします。
                    </p>
                </motion.div>

                {/* Activities Grid */}
                <div className="max-w-3xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {activities.map((activity, index) => (
                            <motion.div
                                key={activity.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                            >
                                {activity.youtubeId ? (
                                    <div className="relative aspect-[9/16] bg-slate-100 rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100 group">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={`https://www.youtube.com/embed/${activity.youtubeId}?playsinline=1&controls=1&rel=0&modestbranding=1`}
                                            title={activity.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            loading="lazy"
                                        />
                                    </div>
                                ) : (
                                    <div className="relative aspect-[9/16] bg-slate-50 rounded-2xl overflow-hidden border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400">
                                        <div className="text-4xl mb-2">🎥</div>
                                        <span className="font-bold text-sm tracking-widest uppercase">Coming Soon</span>
                                        <span className="text-xs mt-1 text-slate-400">次回更新をお楽しみに</span>
                                    </div>
                                )}
                                <p className="text-center mt-3 text-sm font-bold text-slate-700">
                                    {activity.title}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
