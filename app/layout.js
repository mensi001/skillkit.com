import "./globals.css";
import { Outfit } from "next/font/google";
import Background from "../components/Background";
import CursorFollower from "../components/CursorFollower";


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
                {/* Background Effects */}
                <Background />

                {/* Cursor Animation */}
                <CursorFollower />

                {/* App Content */}
                {children}
            </body>
        </html>
    );
}
