const courses = [
    {
        title: "Graphic Design + AI",
        tools: ["Photoshop", "Illustrator", "Corel", "Chat GPT", "Gemini"]
    },
    {
        title: "UI/UX Design + AI",
        tools: ["Photoshop", "Illustrator", "Figma", "Chat GPT", "Gemini", "Figma Plugins"]
    },
    {
        title: "Video Editing + AI",
        tools: ["Photoshop", "Premier Pro", "After Effects", "Capcut (optional)", "Chat GPT", "Gemini", "Veo", "Ai Videos"]
    },
    {
        title: "Interior Design",
        tools: ["Autocad 2D", "Photoshop", "3ds Max"]
    }
];

export default function Courses() {
    return (
        <section id="courses" className="py-20 bg-black/20">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-2">Our Programs</h2>
                    <h3 className="text-3xl md:text-5xl font-bold mb-6">Master the Tools <br /> of the Future</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {courses.map((course, index) => (
                        <div key={index} className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group">
                            <h4 className="text-2xl font-bold mb-6 group-hover:text-amber-400 transition-colors">{course.title}</h4>
                            <div className="flex flex-wrap gap-3">
                                {course.tools.map((tool, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5 group-hover:border-white/20 transition-colors">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
