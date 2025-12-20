import { Palette, Monitor, Video, Home } from 'lucide-react';

const courses = [
    {
        title: "Graphic Design + AI",
        image: "skill_kit_logo.jpeg",
        tools: ["Photoshop", "Illustrator", "Corel", "Chat GPT", "Gemini"],
        Icon: Palette
    },
    {
        title: "UI/UX Design + AI",
        image: "/course-uiux.jpg",
        tools: ["Photoshop", "Illustrator", "Figma", "figma's plugin", "Chat GPT", "Gemini"],
        Icon: Monitor
    },
    {
        title: "Video Editing + AI",
        image: "/course-video.jpg",
        tools: ["Premiere Pro", "photoshop", "After Effects", "Capcut", "AI Tools"],
        Icon: Video
    },
    {
        title: "Architecture ",
        image: "/course-interior.jpg",
        tools: ["Photoshop", "Autocad", "3ds Max"],
        Icon: Home
    }
];


export default function Courses() {
    return (
        <section id="courses" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-2">
                        Our Programs
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold">
                        Master the Tools <br /> of the Future
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="relative rounded-[32px] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-6 hover:-translate-y-2 transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="overflow-hidden rounded-2xl mb-6">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Title */}
                            <h4 className="text-2xl font-bold mb-3">
                                {course.title}
                            </h4>

                            {/* Tools */}
                            <div className="flex flex-wrap gap-2 mb-10">
                                {course.tools.map((tool, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>

                            {/* Bottom Row */}
                            <div className="flex items-center justify-between">
                                <span className="text-4xl font-extrabold text-white/20">
                                    #{String(index + 1).padStart(2, '0')}
                                </span>

                                <button className="px-6 py-2 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

