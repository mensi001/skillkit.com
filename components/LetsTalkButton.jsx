import Link from "next/link";

export default function LetsTalkButton() {
    return (
        <Link
            href="#contact"
            className="
        hidden md:flex
        items-center gap-1
        px-4 py-2
        rounded-full
        border border-white/20
        text-white text-sm font-semibold tracking-wide
        relative overflow-hidden
        backdrop-blur-md
        bg-black/40
        hover:border-white/40
        transition-all duration-300
        group
      "
        >
            {/* Starry texture */}
            <span
                className="
          absolute inset-0
          bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.25)_1px,transparent_1px)]
          bg-[length:12px_12px]
          opacity-40
          group-hover:opacity-70
          transition-opacity
        "
            />

            {/* Glow */}
            <span
                className="
          absolute inset-0
          rounded-full
          shadow-[0_0_30px_rgba(255,255,255,0.15)]
          group-hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]
          transition-shadow
        "
            />

            {/* Smile icon */}
            <span
                className="
          relative z-10
          w-2 h-9
          rounded-full
          flex items-center justify-center
          text-lgx
        "
            >
                😄
            </span>

            <span className="relative z-10 uppercase font-zize-[19px]">
                Let’s Talk
            </span>
        </Link>
    );
}