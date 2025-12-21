'use client';

import Image from "next/image";
import {
  Building2,
  Ruler,
  Layers,
  Cpu,
  DraftingCompass,
  Sparkles
} from "lucide-react";

export default function ArchitectureIntro() {
  const learningPoints = [
    { icon: <Building2 className="w-5 h-5 text-amber-400" />, text: "Architectural Design Fundamentals" },
    { icon: <Ruler className="w-5 h-5 text-orange-400" />, text: "Planning, Layouts & Space Design" },
    { icon: <DraftingCompass className="w-5 h-5 text-yellow-400" />, text: "Technical Drawings & Drafting" },
    { icon: <Layers className="w-5 h-5 text-purple-400" />, text: "3D Modeling & Visualization" },
    { icon: <Cpu className="w-5 h-5 text-emerald-400" />, text: "AI-Assisted Design Workflows" },
    { icon: <Sparkles className="w-5 h-5 text-pink-400" />, text: "Concept Development & Presentation" },
  ];

  return (
    <section className="relative py-32 px-4 bg-[#03050a] overflow-hidden">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-amber-500/10 via-transparent to-transparent blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-gray-300 uppercase">
              Design the Built World
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
            Architecture for the <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              AI-Powered Future
            </span>
          </h1>

          <p className="mt-8 text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg font-medium">
            Learn architectural design through real-world projects, professional workflows,
            and <span className="text-white">AI-powered tools</span> that enhance creativity,
            planning, and visualization.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT IMAGE */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0c14] p-3">
              <div className="rounded-[1.5rem] overflow-hidden">
                <Image
                  src="/career.webp"
                  alt="Architecture Training with AI"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700"
                />
              </div>

              <div className="absolute bottom-10 left-10 right-10 p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-bold text-lg italic">
                  "Design spaces that shape human life."
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-12">

            {/* Curriculum */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                <span className="w-8 h-[1px] bg-amber-500"></span>
                The Curriculum
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

            {/* AI Section */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                AI-Driven Architecture
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Use AI for layout optimization, concept generation, visual simulations,
                and faster decision-making throughout the architectural design process.
              </p>
            </div>

            {/* Tools */}
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">
                Tools You'll Master
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "AutoCAD",
                  "SketchUp",
                  "3ds Max",
                  "Photoshop",
                  "Lumion",
                  "AI Visualization Tools"
                ].map(tool => (
                  <span
                    key={tool}
                    className="px-5 py-2 rounded-lg bg-[#0a0c14] border border-white/10 text-gray-300 text-xs font-bold hover:border-amber-500/50 hover:text-white transition-all cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
