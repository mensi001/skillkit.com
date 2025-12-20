import Image from "next/image";

export default function WhyChooseUs() {
    return (
        <section className="py-14 md:py-20 px-4 md:px-6 bg-gradient-to-b from-[#0a0e1a] to-[#0f0f13] relative">
            <div className="container mx-auto max-w-7xl relative">

                {/* Central Horizontal Line with Arrows (DESKTOP ONLY) */}
                <div className="hidden md:flex absolute left-0 right-0 top-1/2 -translate-y-1/2 items-center">
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                    <div className="absolute left-0 text-cyan-400 text-5xl -translate-x-4">&larr;</div>
                    <div className="absolute right-0 text-cyan-400 text-5xl translate-x-4">&rarr;</div>
                </div>

                <div className="relative space-y-20 md:space-y-48">

                    {/* Top Row */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Ongoing Alumni Support */}
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16 text-center md:text-left">
                            <div className="relative 
                                w-40 h-40 
                                sm:w-48 sm:h-48 
                                md:w-64 md:h-64
                                rounded-full overflow-hidden
                                ring-6 md:ring-8 ring-cyan-400/60
                                shadow-2xl shadow-cyan-500/30">
                                <Image
                                    src="/skillkit_about.webp"
                                    alt="Alumni workshop and support"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="max-w-sm">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                                    Ongoing Alumni Support
                                </h3>
                                <p className="text-gray-300 text-base sm:text-lg">
                                    Our alumni network provides continued support, new workshops, and industry updates to keep your skills sharp.
                                </p>
                            </div>
                        </div>

                        {/* Flexible Learning Options */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-16 text-center md:text-right">
                            <div className="relative 
                                w-40 h-40 
                                sm:w-48 sm:h-48 
                                md:w-64 md:h-64
                                rounded-full overflow-hidden
                                ring-6 md:ring-8 ring-cyan-400/60
                                shadow-2xl shadow-cyan-500/30">
                                <Image
                                    src="/skillkit_about.webp"
                                    alt="Flexible online/part-time learning"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="max-w-sm">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                                    Flexible Learning Options
                                </h3>
                                <p className="text-gray-300 text-base sm:text-lg">
                                    Choose from full-time, part-time, or online courses to fit your schedule.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Networking */}
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16 text-center md:text-left">
                            <div className="relative 
                                w-40 h-40 
                                sm:w-48 sm:h-48 
                                md:w-64 md:h-64
                                rounded-full overflow-hidden
                                ring-6 md:ring-8 ring-cyan-400/60
                                shadow-2xl shadow-cyan-500/30">
                                <Image
                                    src="/skillkit_about.webp"
                                    alt="Networking with industry professionals"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="max-w-sm">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                                    Networking & Industry Exposure
                                </h3>
                                <p className="text-gray-300 text-base sm:text-lg">
                                    Gain valuable connections through workshops, webinars, and design conferences with industry experts.
                                </p>
                            </div>
                        </div>

                        {/* Career Support */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-16 text-center md:text-right">
                            <div className="relative 
                                w-40 h-40 
                                sm:w-48 sm:h-48 
                                md:w-64 md:h-64
                                rounded-full overflow-hidden
                                ring-6 md:ring-8 ring-cyan-400/60
                                shadow-2xl shadow-cyan-500/30">
                                <Image
                                    src="/skillkit_about.webp"
                                    alt="Portfolio review and job placement"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="max-w-sm">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                                    Career Support & Placement
                                </h3>
                                <p className="text-gray-300 text-base sm:text-lg">
                                    We help you build a professional portfolio, polish your resume, and prepare for interviews.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
