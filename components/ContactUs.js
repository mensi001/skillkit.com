'use client';

import { useState } from 'react';
import { Mail, User, Phone, MessageSquare, FileText } from 'lucide-react';

export default function ContactUs() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error);

            setSuccess(true);
            setForm({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        } catch (err) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-[#0f0f13] py-14 md:py-20 px-4" id="contact">
            <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">

                {/* MAP */}
                <div className="rounded-2xl overflow-hidden border border-white/10">
                    <iframe
                        title="Google Map - Rajkot"
                        src="https://www.google.com/maps?q=612%20Westgate%202,%20near%20Ayodhya%20chowk,%20150%20Feet%20Ring%20Rd,%20Rajkot,%20Gujarat%20360006&z=16&output=embed"
                        className="h-[260px] sm:h-[320px] md:h-[520px] w-full grayscale contrast-125 brightness-75"
                        loading="lazy"
                    />
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="relative">
                    <div className="
                        relative
                        rounded-2xl
                        border border-white/10
                        bg-white/5
                        backdrop-blur-xl
                        p-6
                        sm:p-8
                        md:rounded-none md:p-0 md:border-none md:bg-transparent md:backdrop-blur-0
                    ">

                        {/* DESKTOP GLASS */}
                        <div className="hidden md:block contact-clip absolute inset-0 border border-white/10 bg-white/5 backdrop-blur-xl" />

                        <div className="relative md:px-12 md:py-14">

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6 md:mb-14">
                                Ready to Get Started?
                            </h2>

                            {success && (
                                <div className="mb-5 rounded-md border border-green-500/30 bg-green-500/10 px-4 py-2 text-green-400 text-sm">
                                    Message sent successfully!
                                </div>
                            )}

                            {error && (
                                <div className="mb-5 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-2 text-red-400 text-sm">
                                    {error}
                                </div>
                            )}

                            {/* INPUTS */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-14">
                                <Input name="name" value={form.name} onChange={handleChange} icon={<User size={16} />} placeholder="Your Name" />
                                <Input name="email" value={form.email} onChange={handleChange} icon={<Mail size={16} />} placeholder="Email Address" />
                                <Input name="phone" value={form.phone} onChange={handleChange} icon={<Phone size={16} />} placeholder="Phone Number" />
                                <Input name="subject" value={form.subject} onChange={handleChange} icon={<FileText size={16} />} placeholder="Subject" />
                            </div>

                            <div className="mt-4 md:mt-16">
                                <Textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    icon={<MessageSquare size={16} />}
                                    placeholder="Your Message"
                                />
                            </div>

                            <div className="mt-6 md:mt-16 flex justify-center">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full md:w-auto rounded-full border border-white/30 px-10 py-3 text-white hover:bg-white hover:text-black transition disabled:opacity-50"
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

/* ===== MOBILE-FRIENDLY INPUT ===== */
function Input({ icon, ...props }) {
    return (
        <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 md:hidden">
                {icon}
            </span>

            <input
                {...props}
                className="
                    w-full
                    rounded-lg
                    bg-white/10
                    px-10 py-3
                    text-sm text-white
                    placeholder-white/60
                    outline-none
                    focus:ring-2 focus:ring-cyan-400/50
                    md:bg-transparent md:px-0 md:py-0 md:rounded-none
                    md:border-b md:border-white/30 md:focus:ring-0
                "
            />
        </div>
    );
}

/* ===== MOBILE-FRIENDLY TEXTAREA ===== */
function Textarea({ icon, ...props }) {
    return (
        <div className="relative">
            <span className="absolute left-3 top-4 text-white/70 md:hidden">
                {icon}
            </span>

            <textarea
                rows={4}
                {...props}
                className="
                    w-full
                    rounded-lg
                    bg-white/10
                    px-10 py-3
                    text-sm text-white
                    placeholder-white/60
                    outline-none
                    resize-none
                    focus:ring-2 focus:ring-cyan-400/50
                    md:bg-transparent md:px-0 md:py-0 md:rounded-none
                    md:border-b md:border-white/30 md:focus:ring-0
                "
            />
        </div>
    );
}
