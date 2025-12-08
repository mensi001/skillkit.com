import './globals.css';
import { Outfit } from 'next/font/google';
import Background from '../components/Background';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
    title: 'Jigar Vachhani - Certification Programs',
    description: 'Expert certification programs in Graphic Design, UI/UX, Video Editing, and more.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={outfit.className}>
                <Background />
                {children}
            </body>
        </html>
    );
}
