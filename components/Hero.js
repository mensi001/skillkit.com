export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob accommodation-delay-2000"></div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Where Passion Turns into <br />
                    <span className="text-gradient">Profession.</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                    Master the skills of tomorrow with our expert-led certification programs in AI, Design, and Video Editing.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <a href="#courses" className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors">
                        Explore Courses
                    </a>
                    <a href="#contact" className="px-8 py-4 rounded-full glass hover:bg-white/10 transition-colors">
                        Book a Demo
                    </a>
                </div>
            </div>
        </section>
    );
}
