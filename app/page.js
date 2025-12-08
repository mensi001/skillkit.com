'use client';

import { useState } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Courses from "../components/Courses";
import Contact from "../components/Contact";

export default function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <main className="min-h-screen">
            <Navbar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <Hero />
            <About />
            <Courses />
            <Contact isSidebarOpen={isSidebarOpen} />
        </main>
    );
}
