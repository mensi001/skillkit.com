export default function Background() {
    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 bg-[#0f0f13]">
            {/* Top Left Blob */}
            <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob"></div>

            {/* Top Right Blob */}
            <div className="absolute top-0 -right-4 w-96 h-96 bg-amber-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>

            {/* Bottom Left Blob */}
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-4000"></div>

            {/* Center Blob */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-15 animate-pulse"></div>
        </div>
    );
}
