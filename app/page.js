'use client';

import { useState } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import ContactUs from '../components/ContactUs';

import UiUx from '../components/UiUx';
import Photoshop from '../components/Photoshop';
import VideoEditing from '../components/VideoEditing';
import Architecture from '../components/Architecture';
import ContentAbout from '../components/ContentAbout';
import Component2 from '../components/Component2';
import CoursesShowcase from '../components/coursesshowcase';

export default function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showCourses, setShowCourses] = useState(false);

    return (
        <main className="min-h-screen">
            <Navbar
                isOpen={isSidebarOpen}
                setIsOpen={setIsSidebarOpen}
                onHomeClick={() => setShowCourses(false)}
                onCoursesClick={() => setShowCourses(true)}
            />

            {/* ================= HOME VIEW ================= */}
            {!showCourses && (
                <>
                    <Hero />
                    <ContentAbout />
                    <Component2 />
                    <CoursesShowcase />
                    <About />
                    <ContactUs />
                </>
            )}

            {/* ================= COURSES VIEW ================= */}
            {showCourses && (
                <>
                    <section id="courses" className="pt-32 space-y-20">
                        <UiUx />
                        <Photoshop />
                        <Architecture />
                        <VideoEditing />
                    </section>

                    <ContactUs />
                </>
            )}

            {/* <Contact isSidebarOpen={isSidebarOpen} /> */}
        </main>
    );

}
