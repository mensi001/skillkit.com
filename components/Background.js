"use client";
import { useEffect, useRef } from "react";

export default function StarBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const stars = Array.from({ length: 140 }).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.6 + 0.4,
            speed: Math.random() * 0.6 + 0.2,
            opacity: Math.random() * 0.5 + 0.3,
        }));

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);

        function animate() {
            // 🌌 Purple gradient background
            const gradient = ctx.createRadialGradient(
                width / 2,
                height / 2,
                0,
                width / 2,
                height / 2,
                Math.max(width, height)
            );

            gradient.addColorStop(0, "#2a184f"); // light purple core
            gradient.addColorStop(0.5, "#140b2d");
            gradient.addColorStop(1, "#08040f");

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

                // 🌟 white → lavender stars
                ctx.fillStyle = `rgba(210,200,255,${star.opacity})`;
                ctx.fill();

                star.y += star.speed;
                star.x += 0.05; // slight drift

                if (star.y > height) {
                    star.y = 0;
                    star.x = Math.random() * width;
                }
            });

            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-20"
        />
    );
}
