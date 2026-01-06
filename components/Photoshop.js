'use client';

import Image from "next/image";
import { Palette, Wand2, Image as ImageIcon, Layers, Zap, Sparkles } from "lucide-react";

export default function LatestCourse() {
  const learningPoints = [
    { icon: <Wand2 className="w-5 h-5 text-pink-400" />, text: "Generative Fill & AI Expansion" },
    { icon: <Palette className="w-5 h-5 text-purple-400" />, text: "Advanced Photo Manipulation" },
    { icon: <Layers className="w-5 h-5 text-rose-400" />, text: "High-End Skin & Product Retouching" },
    { icon: <ImageIcon className="w-5 h-5 text-yellow-400" />, text: "Digital Matte Painting & Compositing" },
    { icon: <Zap className="w-5 h-5 text-emerald-400" />, text: "AI Neural Filters & Color Grading" },
    { icon: <Sparkles className="w-5 h-5 text-blue-400" />, text: "Social Media & Ad Design" },
  ];

  return (
    <section className="relative py-32 px-4 bg-[#03050a] overflow-hidden">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-pink-500/10 via-transparent to-transparent blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-pink-500 animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-gray-300 uppercase">
              Creative Powerhouse
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
            Advanced <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Photoshop with AI
            </span>
          </h1>

          <p className="mt-8 text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg font-medium">
            Learn professional photo manipulation using
            <span className="text-white"> Generative Fill </span>
            and
            <span className="text-white"> AI-powered workflows </span>
            used by top designers.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT IMAGE – UIUX STYLE */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0c14] p-3">
              <div className="rounded-[1.5rem] overflow-hidden">
                <Image
                  src="/uiux.jpg"
                  alt="Photoshop AI Training"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700"
                />
              </div>

              {/* Floating Quote */}
              <div className="absolute bottom-10 left-10 right-10 p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-bold text-lg italic">
                  "Edit smarter. Create faster. Design without limits."
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-12">

            {/* Curriculum */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                <span className="w-8 h-[1px] bg-pink-500"></span>
                What You'll Master
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {learningPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors group"
                  >
                    <div className="mb-3">{point.icon}</div>
                    <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Highlight */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20">
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-400" />
                AI-Powered Workflow
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Learn Firefly, Neural Filters, and Generative Fill to complete
                professional projects in minutes instead of hours.
              </p>
            </div>

            {/* Tools */}
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">
                Tools You'll Use
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Photoshop CC",
                  "Adobe Firefly",
                  "Camera Raw",
                  "Lightroom",
                  "Generative Fill",
                  "Midjourney",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-5 py-2 rounded-lg bg-[#0a0c14] border border-white/10 text-gray-300 text-xs font-bold hover:border-pink-500/50 hover:text-white transition-all cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full md:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Let's Talk
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
