'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import LetsTalkButton from "./LetsTalkButton";

export default function Navbar({ isOpen, setIsOpen }) {
    const router = useRouter();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f0f13] border-b border-white/10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                {/* LOGO */}
                <button
                    onClick={() => router.push('/')}
                    className="flex items-center gap-2"
                >
                    <div className="w-32 h-10 relative">
                        <Image
                            src="/lOGO_new.png"
                            alt="Skill Kit"
                            fill
                            className="object-contain bg-white"
                        />
                    </div>
                </button>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex gap-10 text-sm font-medium text-gray-300">

                    <Link href="/" className="hover:text-amber-400">
                        Home
                    </Link>

                    <Link href="/#about" className="hover:text-amber-400">
                        About Us
                    </Link>

                    <Link href="/#courses" className="hover:text-amber-400">
                        Courses
                    </Link>

                    <Link href="/#contact" className="hover:text-amber-400">
                        Contact
                    </Link>
                </div>

                <LetsTalkButton />

                {/* MOBILE MENU BUTTON */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* MOBILE SIDEBAR */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#1a1a1f]
        transform transition-transform duration-300 z-50
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="p-6 flex flex-col h-full">

                    <div className="flex justify-end mb-8">
                        <button onClick={() => setIsOpen(false)}>
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-6 text-lg text-gray-300">

                        <Link href="/" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>

                        <Link href="/#about" onClick={() => setIsOpen(false)}>
                            About Us
                        </Link>

                        <Link href="/#courses" onClick={() => setIsOpen(false)}>
                            Courses
                        </Link>

                        <Link href="/#contact" onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>

            {/* OVERLAY */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </nav>
    );
}
