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
                        {/* Support Group button removed as requested */}

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
                            <h3 className="text-xl font-bold mb-2">元 鳥取県琴浦町長 <span className="text-2xl ml-2">小松 ひろあき</span></h3>
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
                        {/* Facebook */}
                        <motion.a
                            href="https://www.facebook.com/profile.php?id=100003733021389&locale=ja_JP"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3, color: "#1877F2" }}
                            className="text-slate-400 hover:text-[#1877F2] transition-colors font-bold flex items-center gap-2"
                        >
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            Facebook
                        </motion.a>

                        {/* Instagram */}
                        <motion.a
                            href="https://www.instagram.com/koma2110195801221/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3, color: "#E4405F" }}
                            className="text-slate-400 hover:text-[#E4405F] transition-colors font-bold flex items-center gap-2"
                        >
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.76-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            Instagram
                        </motion.a>
                    </div>

                    <p className="text-slate-600 text-sm">
                        &copy; 2026 Hiroaki Komatsu. All rights reserved.
                    </p>

                </div>
            </div>
        </section>
    );
}
