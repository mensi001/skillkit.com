'use client';

import { useRouter } from 'next/navigation';
import Image from "next/image";
import {
  Film,
  Scissors,
  Music,
  Sparkles,
  Cpu,
  Layers
} from "lucide-react";

export default function VideoEditingIntro() {
  const router = useRouter();
  const learningPoints = [
    { icon: <Film className="w-5 h-5 text-red-400" />, text: "Video Editing Fundamentals & Storytelling" },
    { icon: <Scissors className="w-5 h-5 text-orange-400" />, text: "Professional Cuts, Transitions & Timing" },
    { icon: <Music className="w-5 h-5 text-pink-400" />, text: "Sound Design & Audio Mixing" },
    { icon: <Layers className="w-5 h-5 text-purple-400" />, text: "Color Grading & Visual Mood" },
    { icon: <Cpu className="w-5 h-5 text-emerald-400" />, text: "AI-Powered Editing Workflows" },
    { icon: <Sparkles className="w-5 h-5 text-yellow-400" />, text: "Cinematic Effects & Motion Graphics" },
  ];

  return (
    <section className="relative py-32 px-4 bg-[#03050a] overflow-hidden">

      {/* --- BACKGROUND GRID --- */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-red-500/10 via-transparent to-transparent blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-gray-300 uppercase">
              Master the Timeline
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
            Edit Stories for the <br />
            <span className="bg-gradient-to-r from-red-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              Digital-First World
            </span>
          </h1>

          <p className="mt-8 text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg font-medium">
            Learn to turn raw footage into powerful visual stories using
            <span className="text-white"> cinematic techniques </span>
            and <span className="text-white"> AI-powered editing tools </span>
            used by professionals.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT: VIDEO IMAGE */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-pink-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0c14] p-3">
              <div className="rounded-[1.5rem] overflow-hidden">
                <Image
                  src="/A.jpeg"
                  alt="Video Editing Course"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700"
                />
              </div>

              <div className="absolute bottom-10 left-10 right-10 p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-bold text-lg italic">
                  "Every cut tells a story."
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="space-y-12">

            {/* Curriculum */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                <span className="w-8 h-[1px] bg-red-500"></span>
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
            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20">
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                AI-Enhanced Editing
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Use AI tools for auto cuts, scene detection, color matching,
                subtitles, and faster post-production workflows.
              </p>
            </div>

            {/* Tools */}
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">
                Tools You'll Master
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Premiere Pro",
                  "After Effects",
                  "DaVinci Resolve",
                  "CapCut",
                  "Runway AI",
                  "Topaz AI"
                ].map(tool => (
                  <span
                    key={tool}
                    className="px-5 py-2 rounded-lg bg-[#0a0c14] border border-white/10 text-gray-300 text-xs font-bold hover:border-red-500/50 hover:text-white transition-all cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Let's Talk Button */}
            <div className="mt-8">
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full md:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
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
