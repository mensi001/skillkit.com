import Image from 'next/image'

export default function AboutCreative() {
    return (
        <section className="relative py-24 bg-gradient-to-br from-[#05070c] via-[#0b1a2a] to-[#02040a] overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-12 md:mb-47">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Key Steps to Shape <span className="text-amber-400">Creative Professionals</span>
                    </h2>
                </div>

                {/* Desktop Layout - Your Original (unchanged) */}
                <div className="relative mx-auto w-full max-w-6xl h-[520px] hidden md:block">
                    {/* Center Hexagon */}
                    <div className="relative z-10 w-[300px] md:w-[360px] md:left-[140px] md:top-[144px]">
                        <div className="clip-hexagon glass p-4">
                            <div className="clip-hexagon overflow-hidden">
                                <Image
                                    src="/classes.jpg"
                                    alt="Instructor"
                                    width={400}
                                    height={500}
                                    className="object-cover opacity-30"
                                />
                            </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                            <div className="p-6 rounded-xl">
                                <h4 className="text-lg font-semibold text-white mb-2">Continuous Feedback & Improvement</h4>
                                <p className="text-sm text-gray-300">
                                    We build strong foundations with practical tools in design, animation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Your Original Steps - unchanged */}
                    <div>
                        <Step
                            label="Practical Training"
                            number="02"
                            className="absolute left-1/2 -translate-x-1/2 -top-16 md:left-[540px] md:top-[-60px] bg-red-500/20"
                        />
                        <Step
                            label="Build a Creative Mindset"
                            number="03"
                            className="absolute right-6 top-16 md:left-[650px] md:top-[25px]"
                        />
                        <Step
                            label="Continuous Feedback & Improvement"
                            number="04"
                            className="absolute right-10 top-1/2 md:left-[762px] md:top-[159px]"
                        />
                        <Step
                            label="Career Support & Placement"
                            number="05"
                            className="absolute left-1/2 -translate-x-1/2 bottom-0 md:bottom-[-40px]"
                        />
                        <Step
                            label="Career Support & Placement"
                            number="06"
                            className="absolute left-1/2 -translate-x-1/2 bottom-0 md:left-[737px] md:top-[329px]"
                        />
                    </div>
                </div>

                {/* Mobile Layout - Clean Vertical Stack */}
                <div className="md:hidden flex flex-col items-center gap-8 py-8">
                    {/* Mobile Center Card (Hexagon-like feel) */}
                    <div className="relative w-72">
                        <div className="clip-hexagon glass p-4 mx-auto">
                            <div className="clip-hexagon overflow-hidden">
                                <Image
                                    src="/classes.jpg"
                                    alt="Instructor"
                                    width={400}
                                    height={500}
                                    className="object-cover opacity-30"
                                />
                            </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                            <div className="p-6">
                                <h4 className="text-lg font-semibold text-white mb-2">Continuous Feedback & Improvement</h4>
                                <p className="text-sm text-gray-300">
                                    We build strong foundations with practical tools in design, animation, and digital art.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Steps - Vertical */}
                    <StepMobile label="Practical Training" number="02" />
                    <StepMobile label="Build a Creative Mindset" number="03" />
                    <StepMobile label="Continuous Feedback & Improvement" number="04" />
                    <StepMobile label="Career Support & Placement" number="05" />
                    <StepMobile label="Career Support & Placement" number="06" /> {/* Keep your original label */}
                </div>
            </div>

            {/* Decorative Orb - keep as is (visible on all screens, or hide on mobile if preferred) */}
            <div className="absolute left-10 top-1/2 w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 blur-md opacity-70" />

            {/* Custom clip-path */}
            <style jsx>{`
                .clip-hexagon {
                    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
                }
                .glass {
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(10px);
                }
            `}</style>
        </section>
    )
}

// Reusable Mobile Step
function StepMobile({ label, number }) {
    return (
        <div className="relative w-64 h-32 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-center px-6">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-xs px-3 py-1 rounded-full text-white">
                {number}
            </span>
            <p className="text-base font-medium text-white leading-snug">
                {label}
            </p>
        </div>
    )
}

// Your original Step component - unchanged
function Step({ label, number, className }) {
    return (
        <div
            className={`${className} w-36 h-36 rounded-full border border-white/30 bg-white/5 backdrop-blur-md flex items-center justify-center text-center z-20`}
        >
            <span className="absolute -top-3 right-6 bg-blue-500 text-xs px-2 py-0.5 rounded-full text-white">
                {number}
            </span>
            <p className="text-sm text-white px-4 leading-snug">
                {label}
            </p>
        </div>
    )
}