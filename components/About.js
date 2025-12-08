import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Side */}
                    <div className="w-full md:w-1/2 relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-400 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative rounded-2xl overflow-hidden glass border border-white/10 p-2">
                            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-xl overflow-hidden">
                                <Image
                                    src="/jigarsir.jpg"
                                    alt="Jigar Vachhani"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-2">About The Instructor</h2>
                        <h3 className="text-3xl md:text-5xl font-bold mb-6">Jigar Vachhani</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Empowering the next generation of creators with cutting-edge skills in Design and AI. With years of industry experience, we bridge the gap between theoretical knowledge and practical application.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            "My mission is to help you unlock your creative potential and turn your passion into a thriving profession."
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="glass p-4 rounded-xl text-center">
                                <h4 className="text-2xl font-bold text-white mb-1">5+</h4>
                                <p className="text-sm text-gray-400">Years Experience</p>
                            </div>
                            <div className="glass p-4 rounded-xl text-center">
                                <h4 className="text-2xl font-bold text-white mb-1">100+</h4>
                                <p className="text-sm text-gray-400">Students Trained</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
