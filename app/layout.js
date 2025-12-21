import "./globals.css";
import { Outfit } from "next/font/google";

import Background from "../components/Background";
import CursorFollower from "../components/CursorFollower";
import Footer from "../components/Contact";
import Navbar from "../components/Navbar";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
    title: "SkillKit",
    description:
        "Expert certification programs in Graphic Design, UI/UX, Video Editing, and more.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={outfit.className}>

                {/* Global Background */}
                <Background />

                {/* Navbar */}
                <Navbar />

                {/* Cursor */}
                <CursorFollower />

                {/* Page Content */}
                <main className="relative z-10 min-h-screen pt-20">
                    {children}
                </main>

                {/* Footer */}
                <Footer />

            </body>
        </html>
    );
}
