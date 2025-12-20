"use client";
import { useEffect, useRef } from "react";

export default function CursorFollower() {
    const cursorRef = useRef(null);
    const target = useRef({ x: 0, y: 0 });
    const current = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const cursor = cursorRef.current;

        const moveMouse = (e) => {
            target.current.x = e.clientX;
            target.current.y = e.clientY;
        };

        window.addEventListener("mousemove", moveMouse);

        const animate = () => {
            current.current.x += (target.current.x - current.current.x) * 0.15;
            current.current.y += (target.current.y - current.current.y) * 0.15;

            cursor.style.transform = `translate3d(${current.current.x - 12
                }px, ${current.current.y - 12}px, 0)`;

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", moveMouse);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="
        pointer-events-none
        fixed top-0 left-0
        w-6 h-6
        rounded-full
        bg-white/30
        backdrop-blur-md
        border border-white/40
        shadow-[0_0_20px_rgba(255,255,255,0.3)]
        z-[9999]
        transition-opacity duration-300
      "
        />
    );
}
