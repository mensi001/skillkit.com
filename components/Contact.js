'use client';

import { useState } from 'react';

export default function Contact({ isSidebarOpen }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <section id="contact" className="py-20 pb-40 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-2">Get in Touch</h2>
                        <h3 className="text-3xl md:text-5xl font-bold mb-6">Start Your Journey</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Address Card */}
                        <div className="glass p-8 rounded-3xl text-center">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">📍</div>
                            <h4 className="text-xl font-bold mb-4">Visit Us</h4>
                            <p className="text-gray-300">
                                304, Jyoti Complex, Mavdi Main Road,<br />
                                Sri Nath Society, Uday Nagar,<br />
                                Rajkot, Gujarat 360004
                            </p>
                        </div>

                        {/* Contact Info Card */}
                        <div className="glass p-8 rounded-3xl text-center">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">📞</div>
                            <h4 className="text-xl font-bold mb-4">Call For Info</h4>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Jigar Vachhani</p>
                                    <a href="tel:+919104077683" className="text-lg font-bold hover:text-amber-400 transition-colors">+91 91040 77683</a>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Niket Trada</p>
                                    <a href="tel:+917600844123" className="text-lg font-bold hover:text-amber-400 transition-colors">+91 76008 44123</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Button - Bottom Left */}
            {!isSidebarOpen && (
                <div className="fixed bottom-6 left-6 z-50">
                    <button
                        onClick={() => setShowModal(true)}
                        className="w-14 h-14 rounded-full bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-500/20 flex items-center justify-center transition-transform hover:scale-110"
                        title="Contact Us"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </button>
                </div>
            )}

            {/* WhatsApp Button - Bottom Right */}
            {!isSidebarOpen && (
                <div className="fixed bottom-6 right-6 z-50">
                    <a
                        href="https://wa.me/919104077683?text=Hi%2C%20I%20am%20interested%20in%20your%20certification%20programs."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 text-white shadow-lg shadow-green-500/20 flex items-center justify-center transition-transform hover:scale-110"
                        title="Chat on WhatsApp"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.698c1.003.549 1.956.83 3.097.83 3.182 0 5.768-2.586 5.768-5.766 0-3.181-2.587-5.767-5.768-5.767zm0 10.375c-.867 0-1.657-.225-2.426-.613l-1.724.451.464-1.666c-.449-.806-.708-1.613-.708-2.531 0-2.485 2.023-4.506 4.495-4.506 2.472 0 4.494 2.021 4.494 4.506 0 2.484-2.022 4.506-4.494 4.506zm2.469-3.374c-.135-.067-.802-.396-.926-.441-.124-.045-.214-.068-.305.067-.09.136-.351.442-.43.533-.079.09-.158.102-.293.034-.135-.067-.57-.21-1.085-.668-.403-.358-.675-.8-.754-.936-.079-.135-.008-.208.059-.276.061-.061.135-.158.203-.238.068-.079.09-.135.135-.225.045-.09.023-.17-.011-.237-.034-.068-.305-.734-.418-1.006-.11-.264-.222-.228-.305-.232-.079-.004-.17-.004-.26-.004-.09 0-.236.034-.36.17-.123.136-.473.463-.473 1.131 0 .668.486 1.313.553 1.403.068.09 1.916 2.926 4.643 4.102 1.838.793 2.213.636 2.613.597.4-.04 1.258-.514 1.436-1.009.178-.495.178-.92.124-1.009-.054-.09-.202-.136-.337-.204zm-2.469 6.828c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9-4.037 9-9 9z" />
                        </svg>
                    </a>
                </div>
            )}

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
                    <div className="relative bg-[#1a1a1e] border border-white/10 rounded-2xl p-6 w-full max-w-sm shadow-2xl animate-blob">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white"
                        >
                            ✕
                        </button>

                        <h3 className="text-xl font-bold mb-6 text-center">Contact Us</h3>

                        <div className="space-y-4">
                            <a href="tel:+919104077683" className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center">
                                    📞
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Call Jigar</p>
                                    <p className="font-bold">+91 91040 77683</p>
                                </div>
                            </a>

                            <a href="tel:+917600844123" className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center">
                                    📞
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Call Niket</p>
                                    <p className="font-bold">+91 76008 44123</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
