import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-brand-blue text-white w-8 h-8 flex items-center justify-center rounded-full font-bold group-hover:scale-110 transition-transform">
                        小
                    </div>
                    <span className="font-bold text-xl text-slate-800">小松ひろあき</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                    <Link href="#about" className="hover:text-brand-orange transition-colors">プロフィール</Link>
                    <Link href="#movies" className="hover:text-brand-orange transition-colors">動画</Link>
                    <Link href="#policy" className="hover:text-brand-orange transition-colors">4つの政策</Link>
                    <Link href="#contact" className="px-5 py-2.5 bg-brand-orange text-white rounded-full font-bold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        応援する
                    </Link>
                </nav>
            </div>
        </header>
    );
}
