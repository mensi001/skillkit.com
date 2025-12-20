import { Palette } from 'lucide-react';

export default function FeatureCourseCard() {
    return (
        <section className="py-20 bg-black flex justify-center">
            <div className="relative w-[900px] max-w-full">

                <svg
                    viewBox="0 0 900 560" className="w-full h-auto"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* CARD SHAPE */}
                    <defs>
                        <clipPath id="cardShape">
                            <path d="
                M40 0
                H860
                A40 40 0 0 1 900 40
                V280
                A40 40 0 0 1 860 320
                H520
                C480 320 470 400 430 400
                H200
                A40 40 0 0 1 160 360
                V320
                H40
                A40 40 0 0 1 0 280
                V40
                A40 40 0 0 1 40 0
                Z
              " />
                        </clipPath>
                    </defs>

                    {/* BACKGROUND */}
                    <rect
                        width="900"
                        height="560"
                        fill="url(#grad)"
                        clipPath="url(#cardShape)"
                    />

                    {/* IMAGE */}
                    <image
                        href="/course-feature.jpg"
                        x="20"
                        y="20"
                        width="860"
                        height="320"
                        clipPath="url(#cardShape)"
                        preserveAspectRatio="xMidYMid slice"
                    />

                    {/* TITLE */}
                    <foreignObject x="40" y="260" width="520" height="120">
                        <div xmlns="http://www.w3.org/1999/xhtml" className="text-white">
                            <h3 className="text-3xl font-semibold leading-tight">
                                Enhancing Skills with 3D Animation<br />
                                and Design Tools
                            </h3>
                        </div>
                    </foreignObject>

                    {/* NUMBER */}
                    <foreignObject x="40" y="350" width="120" height="80">
                        <div xmlns="http://www.w3.org/1999/xhtml" className="text-white text-5xl font-extrabold">
                            #01
                        </div>
                    </foreignObject>

                    {/* READ MORE BUTTON */}
                    <foreignObject x="600" y="340" width="240" height="80">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <button className="px-10 py-3 rounded-full border border-white/30 text-amber-400 hover:bg-amber-400 hover:text-black transition">
                                Read More
                            </button>
                        </div>
                    </foreignObject>

                    {/* GRADIENT */}
                    <defs>
                        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#2b2b2b" />
                            <stop offset="100%" stopColor="#000000" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>
        </section>
    );
}



