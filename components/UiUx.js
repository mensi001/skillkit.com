'use client';

import Image from "next/image";
import { CheckCircle2, Cpu, Layout, Users, Zap, PenTool } from "lucide-react"; // Install lucide-react or use SVGs

export default function UiUxIntro() {
  const learningPoints = [
    { icon: <Layout className="w-5 h-5 text-cyan-400" />, text: "UI/UX Fundamentals & Design Thinking" },
    { icon: <Users className="w-5 h-5 text-purple-400" />, text: "User Research & Usability Testing" },
    { icon: <PenTool className="w-5 h-5 text-pink-400" />, text: "Wireframing & Prototyping" },
    { icon: <Zap className="w-5 h-5 text-yellow-400" />, text: "Visual & Interaction Design" },
    { icon: <Cpu className="w-5 h-5 text-emerald-400" />, text: "AI-Assisted Design Workflows" },
    { icon: <CheckCircle2 className="w-5 h-5 text-blue-400" />, text: "Professional Design Handoff" },
  ];

  return (
    <section className="relative py-32 px-4 bg-[#03050a] overflow-hidden">

      {/* --- DESIGNER BACKGROUND GRID --- */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER SECTION */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-gray-300 uppercase">Master the Interface</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
            Design for the <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              AI-Driven Era
            </span>
          </h1>

          <p className="mt-8 text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg font-medium">
            Go beyond moving pixels. Learn to build deep digital experiences using
            <span className="text-white"> human-centered design </span>
            and <span className="text-white"> Generative AI </span> workflows.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT: IMAGE WITH STYLED FRAME */}
          <div className="relative group">
            {/* Decorative Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0c14] p-3">
              <div className="rounded-[1.5rem] overflow-hidden">
                <Image
                  src="/uiux.jpg" // Ensure this image is high quality
                  alt="UI UX Design Training"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700"
                />
              </div>

              {/* Floating Info Tag */}
              <div className="absolute bottom-10 left-10 right-10 p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-bold text-lg italic">"We create designers, not tool users."</p>
              </div>
            </div>
          </div>

          {/* RIGHT: TEXT CONTENT */}
          <div className="space-y-12">

            {/* Feature Cards */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                <span className="w-8 h-[1px] bg-cyan-500"></span>
                The Curriculum
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {learningPoints.map((point, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors group">
                    <div className="mb-3">{point.icon}</div>
                    <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">{point.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Integration Section */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                AI-Assisted Learning
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                We integrate tools like ChatGPT, Midjourney, and Figma AI to help you
                research 10x faster and generate creative iterations that win clients.
              </p>
            </div>

            {/* Tools Grid */}
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">Technologies You'll Master</p>
              <div className="flex flex-wrap gap-3">
                {["Figma", "Photoshop", "Illustrator", "Claude", "Gemini", "Relume"].map((tool) => (
                  <span key={tool} className="px-5 py-2 rounded-lg bg-[#0a0c14] border border-white/10 text-gray-300 text-xs font-bold hover:border-cyan-500/50 hover:text-white transition-all cursor-default">
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