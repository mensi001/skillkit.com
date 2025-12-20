'use client';

import { useEffect, useState } from 'react';

const slides = [
  {
    title: "First time in Offline and online beaches in Rajkot",
    desc: "Skill-based education designed for real-world success."
  },
  {
    title: "AI & Future Skills",
    desc: "Learn AI tools and future-ready technologies with hands-on experience."
  },
  {
    title: "Design & Creative Skills",
    desc: "Master UI/UX, graphic design, and modern creative tools."
  },
  {
    title: "Video Editing & Media",
    desc: "Create professional content with industry-standard techniques."
  }
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="glass max-w-4xl mx-auto rounded-3xl p-12 transition-all duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {slides[index].title}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            {slides[index].desc}
          </p>
        </div>
      </div>
    </section>
  );
}
