'use client';

import Stack from '@/components/ui/Stack';

export default function CourseHero({ badge, title, description, tools, images }) {
    return (
        <section className="py-24 bg-black min-h-screen">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left */}
                <div className="lg:ml-auto">
                    <h4 className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-2">
                        {badge}
                    </h4>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        {title}
                    </h1>

                    <p className="text-gray-400 max-w-lg mb-8">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {tools.map(tool => (
                            <span
                                key={tool}
                                className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right */}
                <div className="relative w-[260px] h-[260px] mx-auto">
                    <Stack
                        cards={images.map((src, i) => (
                            <img key={i} src={src} alt="course-preview" />
                        ))}
                    />
                </div>

            </div>
        </section>
    );
}
