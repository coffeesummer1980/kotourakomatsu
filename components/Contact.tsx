'use client';

import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">

            {/* Background patterns */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-slate-900 to-slate-900" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl font-bold mb-8"
                    >
                        あなたの声を、力に変えて。
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-lg text-slate-300 mb-12 leading-relaxed"
                    >
                        小松ひろあきの活動は、みなさまの支えで成り立っています。<br />
                        SNSでの拡散、後援会へのご入会など、どのような形でも力になります。
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
                    >
                        <motion.a
                            href="#" // 実際のリンクがあれば入れる
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-gradient-to-r from-brand-orange to-orange-600 text-white rounded-full font-bold text-xl shadow-lg border-2 border-transparent hover:border-orange-200 transition-all"
                        >
                            後援会に入会する
                        </motion.a>
                        <motion.a
                            href="mailto:koma2069@gmail.com"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-xl hover:bg-white/10 transition-all"
                        >
                            お問い合わせ
                        </motion.a>
                    </motion.div>

                    <div className="border-t border-slate-700 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-left">
                            <h3 className="text-xl font-bold mb-2">元 鳥取県琴浦町長 <span className="text-2xl ml-2">小松ひろあき</span></h3>
                            <p className="text-slate-400 text-sm">住んで楽しいまちづくりを、ここから。</p>
                        </div>

                        <div className="text-left bg-slate-800 p-6 rounded-lg border border-slate-700">
                            <h4 className="font-bold text-brand-yellow mb-2">小松弘明後援会事務所</h4>
                            <p className="text-slate-300 text-sm leading-loose">
                                〒689-2501 東伯郡琴浦町赤碕1101<br />
                                TEL: 090-2637-0491<br />
                                Email: koma2069@gmail.com
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6 justify-center mt-12 mb-8">
                        {/* Social Icons - could be replaced with actual SVG icons */}
                        {['Twitter (X)', 'Facebook', 'Instagram'].map((social) => (
                            <motion.a
                                key={social}
                                href="#"
                                whileHover={{ y: -3, color: "#FDAA56" }}
                                className="text-slate-400 hover:text-brand-orange transition-colors font-bold"
                            >
                                {social}
                            </motion.a>
                        ))}
                    </div>

                    <p className="text-slate-600 text-sm">
                        &copy; 2026 Hiroaki Komatsu. All rights reserved.
                    </p>

                </div>
            </div>
        </section>
    );
}
