import { useState, useEffect } from "react";

export default function Hero() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      badge: "Tech Revolution",
      title: "First time in Offline and online",
      highlight: "beaches in Rajkot.",
      desc: "We don't just teach software; we engineer creators. Become a designer who leads the AI era, not just someone who uses it."
    },
    {
      badge: "Online & Offline",
      title: "we teach designing not tool",
      highlight: "Pay You.",
      desc: "Experience world-class mentorship with our cutting-edge curriculum in AI-integrated Design and Video Production."
    },
    {
      badge: "Career First",
      title: "Build a Future in",
      highlight: "Tech & Design.",
      desc: "Turn your imagination into high-paying skills. Join the elite 1% of designers using AI to redefine industry standards."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#030712] flex items-center">

      {/* 1. FUTURISTIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Glow Blobs */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse delay-700" />
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      </div>

      {/* 2. SLIDER CONTENT */}
      <div
        className="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="min-w-full px-6 flex flex-col items-center justify-center text-center">

            {/* Badge */}
            <div className="mb-6 px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium tracking-widest uppercase text-blue-400">
              {slide.badge}
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mb-8">
              {slide.title} <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {slide.highlight}
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
              {slide.desc}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="#contact"
                className="px-10 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                Enroll Now
              </a>

              <button className="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl backdrop-blur-md hover:bg-white/10 transition-all">
                View Curriculum
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 3. NAVIGATION INDICATORS (DASHES INSTEAD OF DOTS) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all duration-500 h-1.5 rounded-full ${index === i ? "w-12 bg-blue-500" : "w-6 bg-white/20"
              }`}
          />
        ))}
      </div>

      {/* 4. DECORATIVE SIDE TEXT */}
      <div className="hidden lg:block absolute left-10 top-1/2 -rotate-90 origin-left text-[10px] tracking-[0.5em] uppercase text-white/30 font-light">
        Creative Intelligence Agency // 2024
      </div>
    </section>
  );
}