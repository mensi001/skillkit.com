'use client';

import { useState } from 'react';
import {
    Mail,
    User,
    Phone,
    MessageSquare,
    FileText
} from 'lucide-react';


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
        console.log('CHANGE:', e.target.name, e.target.value);
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
        <section className="relative w-full bg-[#0f0f13] py-20 px-4" id="contact">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* ================= MAP ================= */}
                    <div className="relative overflow-hidden rounded-3xl border border-white/10">
                        <iframe
                            title="Google Map - Rajkot"
                            src="https://www.google.com/maps?q=612%20Westgate%202,%20near%20Ayodhya%20chowk,%20150%20Feet%20Ring%20Rd,%20Rajkot,%20Gujarat%20360006&z=16&output=embed"
                            className="h-[520px] w-full grayscale contrast-125 brightness-75"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>



                    {/* ================= FORM ================= */}
                    <form onSubmit={handleSubmit} className="relative">


                        {/* Glass Capsule */}
                        <div className="contact-clip relative border border-white/10 bg-white/5 backdrop-blur-xl px-12 py-14">

                            {/* Background Overlay (people silhouette feel) */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 to-transparent pointer-events-none" />

                            <h2 className="relative text-3xl font-semibold text-white mb-14">
                                Ready to Get Started?
                            </h2>

                            {/* ✅ SUCCESS / ERROR MESSAGE */}
                            {success && (
                                <div className="mb-8 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-green-400 text-sm">
                                    ✅ Your message has been sent successfully!
                                </div>
                            )}

                            {error && (
                                <div className="mb-8 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-400 text-sm">
                                    ❌ {error}
                                </div>
                            )}

                            {/* Row 1 */}
                            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-14 mb-12">
                                <LineInput icon={<User size={18} />} placeholder="YOUR NAME" name="name" value={form.name} onChange={handleChange} />
                                <LineInput icon={<Mail size={18} />} placeholder="YOUR EMAIL ADDRESS" name="email" value={form.email} onChange={handleChange} />
                            </div>

                            {/* Row 2 */}
                            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-14 mb-12">
                                <LineInput icon={<Phone size={18} />} placeholder="YOUR PHONE NUMBER" name="phone" value={form.phone} onChange={handleChange} />
                                <LineInput icon={<FileText size={18} />} placeholder="YOUR SUBJECT" name="subject" value={form.subject} onChange={handleChange} />
                            </div>

                            {/* Message */}
                            <div className="relative mb-16">
                                <LineTextarea
                                    icon={<MessageSquare size={18} />}
                                    placeholder="YOUR MESSAGE"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Button */}
                            <div className="relative flex justify-center">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="rounded-full border border-white/30 px-12 py-3 text-white hover:bg-white hover:text-black transition disabled:opacity-50"
                                >
                                    {loading ? 'Sending...' : 'Send Now'}
                                </button>

                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

/* ================= LINE INPUT ================= */
function LineInput({ icon, placeholder, name, value, onChange }) {
    return (
        <div className="relative">
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white">
                {icon}
            </div>

            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="
                  w-full
                  bg-transparent
                  pl-14
                  pb-2
                  text-sm
                  text-white
                  placeholder-white/70
                  outline-none
                  border-b
                  border-white/30
                  focus:border-cyan-400
                  transition
                "
            />

            <span className="absolute -right-1 bottom-[6px] h-1.5 w-1.5 rounded-full bg-white/70"></span>
        </div>
    );
}



/* ================= LINE TEXTAREA ================= */
function LineTextarea({ icon, placeholder, name, value, onChange }) {
    return (
        <div className="relative">
            {/* Icon Circle */}
            <div className="absolute -left-1 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white">
                {icon}
            </div>

            {/* Textarea */}
            <textarea
                rows={3}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="
                  w-full
                  bg-transparent
                  pl-14
                  pb-2
                  text-sm
                  text-white
                  placeholder-white/70
                  outline-none
                  border-b
                  border-white/30
                  focus:border-cyan-400
                  resize-none
                  transition
                "
            />

            {/* End Dot */}
            <span className="absolute -right-1 bottom-[6px] h-1.5 w-1.5 rounded-full bg-white/70"></span>
        </div>
    );
}
