'use client';

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
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#030712] flex items-center">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[300px] h-[300px] md:w-[50%] md:h-[50%] bg-purple-600/20 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] md:w-[50%] md:h-[50%] bg-blue-600/20 blur-[100px] rounded-full animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      {/* ================= SLIDER ================= */}
      <div
        className="flex transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] w-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="min-w-full px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center text-center"
          >

            {/* Badge */}
            <div className="mb-4 md:mb-6 px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] md:text-xs tracking-widest uppercase text-blue-400">
              {slide.badge}
            </div>

            {/* Heading */}
            <h1 className="text-[2.2rem] sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-4xl mb-6">
              {slide.title}
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {slide.highlight}
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-8">
              {slide.desc}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-3 md:px-10 md:py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-all shadow-lg"
              >
                Enroll Now
              </a>

              <button className="px-8 py-3 md:px-10 md:py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl backdrop-blur-md hover:bg-white/10 transition-all">
                View Curriculum
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= INDICATORS ================= */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${index === i ? "w-10 bg-blue-500" : "w-5 bg-white/30"
              }`}
          />
        ))}
      </div>

      {/* Side Text */}
      <div className="hidden lg:block absolute left-10 top-1/2 -rotate-90 text-[10px] tracking-[0.5em] uppercase text-white/30">
        Creative Intelligence Agency
      </div>
    </section>
  );
}
