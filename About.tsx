'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2">PROFILE</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">正直にお話しします</h3>
                        <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
                    </motion.div>

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Image side - Slide in format */}
                        <motion.div
                            initial={{ opacity: 0, x: -50, rotate: -5 }}
                            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            whileHover={{ rotate: 0, scale: 1.05 }}
                            className="w-full md:w-2/5"
                        >
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-slate-50 transform transition-transform duration-300">
                                <Image
                                    src="/images/manga/story_1.png"
                                    alt="小松ひろあきの想い"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                            </div>
                            <p className="text-center text-xs text-slate-400 mt-4">マンガでわかる小松ひろあき</p>
                        </motion.div>

                        {/* Text side - Fade in stagger */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full md:w-3/5 space-y-6 text-lg leading-relaxed text-slate-700"
                        >
                            <p>
                                みなさん、こんにちは。小松ひろあきです。<br />
                                私は愛想があまり良くないことで知られています（笑）。<br />
                                目立つタイプでも、話がうまいタイプでもありません。
                            </p>

                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="p-6 bg-slate-50 rounded-xl border-l-4 border-brand-blue shadow-sm"
                            >
                                <p className="italic text-slate-600 font-bold">
                                    「伝えることの大切さ」<br />
                                    「人と向き合う姿勢の大切さ」
                                </p>
                            </motion.div>

                            <p>
                                以前、町の仕事を任せていただいたものの、思うような結果を出せず、悔しい思いをしました。
                                一度町長という立場を離れ、一人の町民として暮らす中で、
                                見えてきた景色、聞こえてきた声があります。
                            </p>

                            <div className="relative inline-block py-2">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                    className="absolute bottom-2 left-0 h-4 bg-brand-yellow/30 -z-10"
                                />
                                <p className="font-bold text-2xl text-brand-blue relative z-10">
                                    「一度離れたから、見えたものがある。」
                                </p>
                            </div>

                            <p>
                                今はそう胸を張って言えます。
                                この琴浦町を、子どもも大人も安心して関われる、にぎわいのあるまちにしたい。
                                そのために、私のこれまでの経験と、新しく得た気づきの全てを捧げます。
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
