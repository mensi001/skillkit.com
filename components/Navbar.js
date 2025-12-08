'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar({ isOpen, setIsOpen }) {
    // const [isOpen, setIsOpen] = useState(false); // Removed local state

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f0f13] border-b border-white/10">
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

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
                    <Link href="#" className="hover:text-amber-400 transition-colors">Home</Link>
                    <Link href="#about" className="hover:text-amber-400 transition-colors">About Us</Link>
                    <Link href="#courses" className="hover:text-amber-400 transition-colors">Courses</Link>
                    <Link href="#contact" className="hover:text-amber-400 transition-colors">Contact</Link>
                </div>

                <Link href="#contact" className="hidden md:block px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-sm font-semibold backdrop-blur-md">
                    Join Now
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-[#1a1a1f] transform transition-transform duration-300 ease-in-out z-50 border-l border-white/10 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-end mb-8">
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-6 text-lg font-medium text-gray-300">
                        <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-amber-400 transition-colors">Home</Link>
                        <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-amber-400 transition-colors">About Us</Link>
                        <Link href="#courses" onClick={() => setIsOpen(false)} className="hover:text-amber-400 transition-colors">Courses</Link>
                        <Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-amber-400 transition-colors">Contact</Link>
                    </div>

                    <div className="mt-auto">
                        <Link href="#contact" onClick={() => setIsOpen(false)} className="block w-full text-center px-6 py-3 rounded-full bg-amber-400 text-black hover:bg-amber-300 transition-all text-sm font-bold">
                            Join Now
                        </Link>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </nav>
    );
}
