'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-100">

            {/* Background decoration - Animated */}
            <motion.div
                animate={{ x: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-0 right-0 w-1/2 h-full bg-blue-100/30 -skew-x-12 translate-x-1/4 pointer-events-none"
            />

            <div className="container mx-auto px-4 relative">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 space-y-8 md:pr-4 z-10 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-1.5 bg-white border border-brand-blue/20 text-brand-blue rounded-full text-sm font-bold shadow-sm mb-2"
                        >
                            琴浦町長選挙 2026
                        </motion.div>

                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
                            小松 <span className="text-brand-blue">ひろあき</span>
                        </h2>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-700 font-sans tracking-tight">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="block"
                            >
                                一度離れたから、
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                className="text-brand-blue relative inline-block mt-2"
                            >
                                見えたものがある。
                                <motion.span
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 1.4, duration: 0.8 }}
                                    className="absolute bottom-1 left-0 h-3 bg-brand-yellow/40 -z-10 rounded-sm"
                                />
                            </motion.span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.6 }}
                            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto md:mx-0"
                        >
                            住んで楽しいまちづくりを、もう一度。<br />
                            失敗も成功も経験した私だからこそできる、<br />
                            琴浦町の「再構築」をご提案します。
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start"
                        >
                            <a href="#policy" className="px-8 py-4 bg-brand-blue text-white rounded-full font-bold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center">
                                政策を見る
                            </a>
                            <a href="#about" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all hover:shadow-md text-center">
                                もっと知る
                            </a>
                        </motion.div>
                    </div>

                    {/* Image - Animated Entrance */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 2 }}
                        transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                        whileHover={{ rotate: 0, scale: 1.02, transition: { duration: 0.3 } }}
                        className="flex-1 relative w-full max-w-md md:max-w-lg mx-auto"
                    >
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white bg-slate-200">
                            <Image
                                src="/images/profile_vertical.jpg"
                                alt="小松ひろあき"
                                fill
                                className="object-cover object-top"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        {/* Decor elements */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-orange rounded-full mix-blend-multiply filter blur-2xl opacity-40"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                            className="absolute -top-6 -right-6 w-32 h-32 bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
