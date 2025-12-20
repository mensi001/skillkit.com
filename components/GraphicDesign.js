'use client';

import Stack from '@/components/ui/Stack';

const images = [
    "/uiux.jpg",
    "/photoshop.jpg",
    "/videoediting.jpg",
    "/photoshop.jpg"
];

export default function LatestCourse() {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT: Stack (Images) */}
                <div className="relative w-[260px] h-[260px] mx-auto">
                    <Stack
                        cards={images.map((src, i) => (
                            <img key={i} src={src} alt="course-preview" />
                        ))}
                    />
                </div>

                {/* RIGHT: Text */}
                <div>
                    <h4 className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-2">
                        Latest Course
                    </h4>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Graphic Design <br /> with AI
                    </h2>

                    <p className="text-gray-400 max-w-lg mb-8">
                        Learn modern Photoshop combined with AI tools. Interactive projects,
                        real-world workflows, and future-ready skills.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {["illustrator", "Photoshop", "ChatGPT", "Gemini"].map(tool => (
                            <span
                                key={tool}
                                className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

