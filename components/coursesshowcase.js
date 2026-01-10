'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const courses = [
    {
        title: "UI/UX Design Mastery + AI",
        image: "/uiux_final.png",
        rotate: "lg:-rotate-6",
        url: "/uiux",
    },
    {
        title: "Video Editing Pro + AI",
        image: "/A.jpeg",
        rotate: "lg:rotate-0",
        url: "/video-editing",
    },
    {
        title: "Architecture & Autocad + AI",
        image: "/class.jpeg",
        rotate: "lg:rotate-12",
        url: "/architecture",
    },
    {
        title: "Graphics Design + AI",
        image: "/B.jpeg",
        rotate: "lg:rotate-6",
        url: "/photoshop",
    },
];

export default function CoursesShowcase() {
    const router = useRouter();

    return (
        <section
            id="courses"
            className="relative py-16 md:py-24 px-4 sm:px-6 bg-[#05070d] overflow-hidden"
        >
            {/* Heading */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Shape Your Future with <span className="text-cyan-400">Skillkit</span>
                </h2>
            </div>

            {/* Cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:flex gap-8 justify-center">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        onClick={() => router.push(course.url)}
                        className={`
              cursor-pointer
              relative w-full sm:w-[260px] h-[340px] sm:h-[360px]
              rounded-3xl overflow-hidden
              backdrop-blur-xl bg-white/5 border border-white/10
              transform ${course.rotate}
              transition-all duration-500
              hover:lg:rotate-0 hover:lg:scale-105
            `}
                    >
                        <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                        <div className="absolute bottom-6 left-4 right-4 text-center">
                            <h3 className="text-lg font-semibold text-white">
                                {course.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
