import { useState, useEffect } from "react";

export default function Hero() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      title: "First time in Offline and online",
      highlight: " beaches in Rajkot.",
      // desc: "Master the skills of tomorrow with our expert-led certification programs in AI, Design, and Video Editing."
      desc: "we create designer not tool user"
    },
    {
      title: "we teach designing not tool",
      highlight: "Pay You.",
      desc: "Get industry-ready with hands-on courses and real-world projects."
    },
    {
      title: "Build a Career in",
      highlight: "Tech & Design.",
      desc: "Join our certification programs and grow with industry mentors."
    }
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">

      {/* SLIDER */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="min-w-full flex items-center justify-center pt-[97px]"
          >
            <div className="container mx-auto px-6 text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {slide.title} <br />
                <span className="text-gradient">{slide.highlight}</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                {slide.desc}
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center">
                {/* <a
                  href="#courses"
                  className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors"
                >
                  Explore Courses
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-full glass hover:bg-white/10 transition-colors"
                >
                  Book a Demo
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${index === i ? "bg-white scale-125" : "bg-white/40"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
