'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 glass">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 relative">
                        <Image
                            src="/Skill Kit.svg"
                            alt="Skill Kit Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl font-bold tracking-wide">Skill Kit</span>
                </Link>

                <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
                    <Link href="#" className="hover:text-amber-400 transition-colors">Home</Link>
                    <Link href="#about" className="hover:text-amber-400 transition-colors">About Us</Link>
                    <Link href="#courses" className="hover:text-amber-400 transition-colors">Courses</Link>
                    <Link href="#contact" className="hover:text-amber-400 transition-colors">Contact</Link>
                </div>

                <Link href="#contact" className="hidden md:block px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-sm font-semibold backdrop-blur-md">
                    Join Now
                </Link>
            </div>
        </nav>
    );
}
