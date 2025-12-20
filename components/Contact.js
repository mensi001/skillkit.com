'use client';

import { useState } from 'react';

export default function ContactFooter({ isSidebarOpen = false }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <section id="about">
            <footer className="relative bg-black text-white pt-20 pb-10 overflow-hidden">
                {/* subtle background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_40%)] opacity-40" />

                <div className="relative container mx-auto px-6">
                    <div className="grid gap-12 md:grid-cols-4 md:ml-[69px] ml-0">
                        {/* About */}
                        <div>
                            <div className="mb-4 flex items-center gap-3 justify-center md:justify-start">
                                <img
                                    src="/lOGO_new.png"
                                    alt="Skill Kit"
                                    width={120}
                                    height={40}
                                    className="object-contain bg-blue-400"
                                />
                                <span className="text-xs text-gray-400 tracking-widest">
                                    {/* DESIGN INSTITUTE */}
                                </span>
                            </div>

                            <h4 className="text-lg font-semibold mb-3">About</h4>
                            <p className="text-sm text-gray-400 leading-relaxed max-w-[222px] mx-auto md:mx-0">

                                At skillkit Design Institute, we are passionate about our students'
                                success and growth. Whether you have questions about our courses,
                                need career guidance, or just want to explore our offerings, feel
                                free to call or visit us during working hours.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                {[
                                    'Who We Are',
                                    'Campus Tour',
                                    'Student Work',
                                    'Our Blog',
                                    'FAQ',
                                ].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-amber-400 transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Courses */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Our Courses</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                {[
                                    'Advanced VFX Master Suite',
                                    '3D Game Design Suite',
                                    'Film Editing + Compositing Suite',
                                    'Content Creator Suite',
                                    'Motion Graphics Suite',
                                    'Multimedia Master Suite',
                                    'Photo & Video Editing Suite',
                                    'Graphics Design Suite',
                                    'Architectural Visualisation Suite',
                                    'UI/UX Design Suite',
                                ].map((course) => (
                                    <li key={course}>{course}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contact</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li>
                                    <span className="block text-white">Email</span>
                                    contact@skillkitdesigninstitute.com
                                </li>
                                <li>
                                    <span className="block text-white">Phone</span>
                                    +91 91040 77683
                                    +91 76008 44123
                                </li>
                                <li>
                                    <span className="block text-white">Address</span>
                                    612 Westgate 2, near Ayodhya chowk,<br />
                                    BRTS stop, 150 Feet Ring Rd, Rajkot,<br />
                                    Gujarat 360006
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 border-t border-white/10 pt-4 text-center text-xs text-gray-500">
                        © {new Date().getFullYear()} SKillKit Design Institute. All rights reserved.
                    </div>
                </div>

                {/* Floating Contact Button */}
                {!isSidebarOpen && (
                    <div className="fixed bottom-6 left-6 z-50">
                        <button
                            onClick={() => setShowModal(true)}
                            className="w-14 h-14 rounded-full bg-amber-500 hover:bg-amber-400 text-black shadow-lg flex items-center justify-center transition-transform hover:scale-110"
                        >
                            📞
                        </button>
                    </div>
                )}

                {/* WhatsApp Button */}
                {!isSidebarOpen && (
                    <div className="fixed bottom-6 right-6 z-50">
                        <a
                            href="https://wa.me/919104077683"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-110"
                        >
                            💬
                        </a>
                    </div>
                )}

                {/* Modal */}
                {showModal && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setShowModal(false)}
                        />
                        <div className="relative bg-[#1a1a1e] rounded-2xl p-6 w-full max-w-sm">
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4"
                            >
                                ✕
                            </button>

                            <h3 className="text-xl font-bold mb-6 text-center">Contact Us</h3>

                            <a href="tel:+919104077683" className="block mb-3 p-4 bg-white/5 rounded-xl">
                                Call Jigar – +91 91040 77683
                            </a>
                            <a href="tel:+917600844123" className="block p-4 bg-white/5 rounded-xl">
                                Call Niket – +91 76008 44123
                            </a>
                        </div>
                    </div>
                )}
            </footer>
        </section >
    );
}
