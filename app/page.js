'use client';

import { useState } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Courses from "../components/Courses";
import Contact from "../components/Contact";
import EnrollNow from "../components/EnrollNow";
import ContactUs from '../components/ContactUs';
import UiUx from '../components/UiUx';
import Photoshop from '../components/Photoshop';
import VideoEditing from '../components/VideoEditing';
import Architecture from '../components/Architecture';
import GraphicDesign from '../components/GraphicDesign';
import ContentAbout from '../components/ContentAbout';
import Component2 from '../components/Component2';


export default function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <main className="min-h-screen">
            <Navbar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <Hero />

            <ContentAbout />
            <Component2 />
            {/* <Courses /> */}
            {/* <EnrollNow /> */}
            <UiUx />
            <VideoEditing />
            <Architecture />
            <GraphicDesign />
            <About />
            <ContactUs />

            <Contact isSidebarOpen={isSidebarOpen} />
        </main>
    );
}
