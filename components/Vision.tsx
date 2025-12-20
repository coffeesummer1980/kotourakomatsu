'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Vision() {
    return (
        <section id="vision" className="py-20 bg-white overflow-hidden relative">
            <div className="container mx-auto px-4 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2">VISION</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">具体的な未来の話</h3>
                    <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <motion.h4
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-2xl font-bold text-slate-800"
                        >
                            <span className="text-brand-orange">カウベルホール</span>を<br />
                            「目的がある人が集まる」拠点へ
                        </motion.h4>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-slate-600 leading-relaxed"
                        >
                            立派な施設があるのに、使い方が難しい。そんな声を聞きます。<br />
                            私は、カウベルホールを無理に毎日人を集める場所にはしません。<br />
                            代わりに、<strong>「制作・合宿・防災」の拠点（母艦）</strong>として生まれ変わらせます。
                        </motion.p>

                        <ul className="space-y-4">
                            {[
                                { title: "クリエイターの作業基地", text: "集中して制作に取り組める「籠れる」環境を整備" },
                                { title: "防災・医療のハブ", text: "災害時の物資集積や支援スタッフの活動拠点として機能" },
                                { title: "宿泊は町内へ", text: "ホール自体は宿泊施設にせず、泊まる人は町内の民宿や旅館へ誘導し経済効果を生む" }
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                                    className="flex items-start gap-3"
                                >
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6 + (index * 0.1), type: "spring" }}
                                        className="text-brand-blue text-xl flex-shrink-0"
                                    >
                                        ✅
                                    </motion.span>
                                    <span className="text-slate-700"><strong>{item.title}</strong>：{item.text}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 }}
                            className="text-sm text-slate-500 bg-slate-100 p-4 rounded-lg"
                        >
                            ※ アクセスの悪さを逆手に取り、周囲を気にせず没頭できる環境としての強みを活かします。
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-2xl mx-auto"
                    >
                        <div className="rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                            <Image
                                src="/images/activity_1.jpg"
                                alt="活動の様子"
                                width={0}
                                height={0}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="mt-4 text-center text-slate-600 font-bold">
                            現場の声を聞き、現実的な解決策を。
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
