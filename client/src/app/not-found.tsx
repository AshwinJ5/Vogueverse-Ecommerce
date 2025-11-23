import React from "react";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
    return (
        <div className="font-display bg-background-light text-text-light min-h-screen flex flex-col w-full overflow-x-hidden">
            {/* Main Content */}
            <main className="flex flex-1 flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-8 w-full max-w-4xl text-center">
                    {/* Illustration */}
                    <div className="relative w-full max-w-xs sm:max-w-sm animate-in fade-in zoom-in duration-500">
                        <Image
                            width={400}
                            height={400}
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfUUerWNB2zb1Jmgbk2wnMCVHxbNrrYAQRoOqJ8nOsVWd8Nx7MDVJb9fx5ILxalKmWBZTktULf7lc9dYBcgSB-WqV_MGZqMWyQT2bQ0-YiMsCJC-BOABKSM40H54EysmVZgKe7iwLyTRz7k2P8EJ0U6UNLX-cVWClaQZXTeZNbj5QzJoSgKRQiSEhVxMpTozMJTyyOHbJUTcctMLTRUF0dsP5K0mzyZx9POfpAs21lD2xwaYSguwTUEk9RBA6sPgehRkGVriVsVny4"
                            alt="Empty shopping bag illustration"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col items-center gap-4 max-w-lg">
                        <h1 className="text-3xl sm:text-4xl font-black leading-tight tracking-tighter text-text-light">
                            Oops! Lost in Style?
                        </h1>
                        <p className="text-secondary-text-light text-base sm:text-lg font-normal leading-relaxed">
                            {
                                " We can't seem to find the page you're looking for. It might have been moved, renamed, or perhaps it's just on a coffee break."
                            }
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md justify-center">
                        <Link href="/" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20">
                                Go to Homepage
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default NotFound;
