import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Movies from "@/components/Movies";
import Policy from "@/components/Policy";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Movies />
      <Policy />
      <Contact />

      {/* Floating Action Button for mobile (optional, but good for LP) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a href="#contact" className="block w-14 h-14 bg-brand-orange text-white rounded-full shadow-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform">
          ✉️
        </a>
      </div>
    </main>
  );
}
