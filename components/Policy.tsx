'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const policies = [
    {
        id: 1,
        title: "教育 | ひとづくり",
        subtitle: "何度でもやり直せる町へ",
        description: "教育は子どもだけのものではありません。人生の途中で立ち止まっても、学び直し、再挑戦できる環境を作ります。年齢に関係なく、人が前を向ける力を育てます。",
        color: "bg-blue-50 border-blue-200 text-brand-blue",
        icon: "🎓"
    },
    {
        id: 2,
        title: "健康 | 幸福度の高い社会",
        subtitle: "心も体も、暮らしも健康に",
        description: "病気をしないことだけが健康ではありません。「ちょっと聞いていいかな」と言える、人と人の距離が近い町へ。孤独をなくし、安心して暮らせる環境を整えます。",
        color: "bg-orange-50 border-orange-200 text-brand-orange",
        icon: "❤️"
    },
    {
        id: 3,
        title: "産業 | しごとづくり",
        subtitle: "安心して働ける場所がある",
        description: "難しい経済話ではなく、身近な暮らしの話です。今この町で頑張っている人を支え、仕事と暮らしが無理なくつながる、「職住接近」の環境をつくります。",
        color: "bg-yellow-50 border-yellow-200 text-yellow-700",
        icon: "🚜"
    },
    {
        id: 4,
        title: "環境 | 持続可能性",
        subtitle: "未来へつなぐ選択",
        description: "環境を守ることは、未来の暮らしを守ること。無理なくできることから始め、次世代の子どもたちが「やっぱり琴浦町がいい」と思える町を残します。",
        color: "bg-green-50 border-green-200 text-green-700",
        icon: "🌿"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const policyMovies = [
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
        title: "創造政策（環境）",
        youtubeId: "zA9gqU7bahQ"
    }
];

export default function Policy() {
    return (
        <section id="policy" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2">POLICY</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">4つの創造政策</h3>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        「住んで楽しいまちづくり」を実現するための、具体的な4つの柱です。
                    </p>
                    <div className="w-16 h-1 bg-brand-orange mx-auto mt-6 rounded-full"></div>
                </motion.div>

                {/* Policy Videos Grid (Moved from Movies) */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-bold mb-2">
                            解説動画
                        </span>
                        <h4 className="text-xl font-bold text-slate-800">政策のポイントを動画で解説</h4>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
                        {policyMovies.map((movie, index) => (
                            <motion.div
                                key={movie.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="relative aspect-[9/16] bg-white rounded-xl overflow-hidden shadow-md border border-slate-200 group hover:shadow-xl transition-all duration-300"
                            >
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${movie.youtubeId}?playsinline=1&controls=1&rel=0&modestbranding=1`}
                                    title={movie.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    loading="lazy"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Policy Summary Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto mb-16 shadow-2xl rounded-2xl overflow-hidden border-4 border-white"
                >
                    <Image
                        src="/images/policy-diagram-new.png"
                        alt="小松ひろあき 政策ビジョン2026"
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                    />
                </motion.div>

                {/* Policy Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                >
                    {policies.map((policy) => (
                        <motion.div
                            key={policy.id}
                            variants={cardVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className={`p-8 rounded-2xl border-2 transition-shadow hover:shadow-xl ${policy.color} bg-white bg-opacity-80 backdrop-blur-sm`}
                        >
                            <motion.div
                                className="text-4xl mb-4"
                                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                            >
                                {policy.icon}
                            </motion.div>
                            <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                                {policy.title}
                            </h4>
                            <p className="font-bold mb-4 opacity-90 text-sm md:text-base border-b border-current pb-2 inline-block">
                                {policy.subtitle}
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                {policy.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
