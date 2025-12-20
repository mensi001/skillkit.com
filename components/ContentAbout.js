import Image from "next/image";

export default function HeroAbout() {
    return (
        <section className="py-16 px-6 bg-gradient-to-br from-[#0a0e1a] to-[#0f0f13]">
            <div className="container mx-auto max-w-7xl">
                <div className="relative bg-black/50 backdrop-blur-md rounded-3xl overflow-hidden border-4 border-blue-500/40 shadow-2xl shadow-blue-500/30">
                    <div className="grid md:grid-cols-2 items-center gap-12 p-12 md:p-16">

                        {/* Left: Single Circular Blurred Trophy Image */}
                        {/* Left: 3 Overlapping Circular Images */}
                        <div className="relative flex justify-center md:justify-end">

                            {/* Container */}
                            <div className="relative w-[520px] h-[360px]">

                                {/* Left Blurred Circle */}
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full overflow-hidden opacity-80 blur-[1px]">
                                    <Image
                                        src="/skillkit_about.webp"
                                        alt="Background activity"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Right Blurred Circle */}
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full overflow-hidden opacity-40 blur-[1px]">
                                    <Image
                                        src="/skillkit_about.webp"
                                        alt="Background activity"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Center Main Trophy Image */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/20 z-10">
                                    <Image
                                        src="/skillkit_about.webp"
                                        alt="Team celebrating success with trophy"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                            </div>
                        </div>


                        {/* Right: Text Content */}
                        <div className="space-y-7 text-white">
                            <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-4">
                                <span className="text-orange-400 text-6xl">✨</span>
                                <span className="bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
                                    At Skill Kit Institute,
                                </span>
                            </h2>

                            <p className="text-gray-300 text-lg leading-relaxed">
                                we are a dynamic and visionary educational institution dedicated to cultivating creativity and excellence in design, animation, visual effects, UI/UX, Photoshop, and AI-powered creative tools.
                            </p>

                            <p className="text-gray-300 text-lg leading-relaxed">
                                Our mission is to empower students with the skills and knowledge needed to thrive in the ever-evolving creative industry.
                            </p>

                            <p className="text-gray-300 text-lg leading-relaxed">
                                We are a community of passionate learners, experienced educators, and industry professionals working together to create a hub for innovative learning. Our goal is not just to teach technical skills but to nurture creativity, foster confidence, and inspire our students to pursue their dreams in design and animation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}