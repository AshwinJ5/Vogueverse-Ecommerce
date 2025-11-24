"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Search State
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // Refs for focus and click-outside detection
    const searchInputRef = useRef<HTMLInputElement>(null);
    const searchContainerRef = useRef<HTMLElement>(null); // Ref for the Header container

    // 1. Auto-focus input when search opens
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    const closeSearch = () => {
        setIsSearchOpen(false);
        setSearchQuery("");
    };
    // 2. Handle Click Outside to Close Search
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isSearchOpen && searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                closeSearch();
            }
        };

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSearchOpen]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const navLinks = [
        { name: "Wishlist", href: "/wishlist" },
        { name: "Catalogues", href: "/categories" },
        { name: "Products", href: "/products" },
        { name: "Orders", href: "/orders" },
    ];

    const dummyResults = [
        { name: "Floral Summer Dress", category: "Women" },
        { name: "Leather Biker Jacket", category: "Men" },
        { name: "Classic White Sneakers", category: "Shoes" },
    ];

    return (
        <>
            {/* 3. Attached Ref to the Header */}
            <header
                ref={searchContainerRef}
                className="sticky top-0 z-50 bg-background-light/95 backdrop-blur-sm border-b border-border-light transition-all"
            >
                <div className="container mx-auto px-4 relative">
                    {/* MAIN NAVBAR CONTENT */}
                    <div
                        className={`flex items-center justify-between py-4 md:py-6 transition-opacity duration-300 ${
                            isSearchOpen ? "opacity-0 invisible" : "opacity-100 visible"
                        }`}
                    >
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="md:hidden p-1 text-text-light hover:text-primary transition-colors"
                                aria-label="Open Menu"
                            >
                                <span className="material-symbols-outlined text-2xl">menu</span>
                            </button>

                            <Link href={"/"} className="flex items-center gap-2 md:gap-3 text-text-light">
                                <svg
                                    className="h-6 w-6 md:h-8 md:w-8 text-primary shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"></path>
                                </svg>
                                <h2 className="text-lg md:text-xl font-bold leading-tight tracking-tight">VogueVerse</h2>
                            </Link>
                        </div>

                        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    className="text-sm font-extrabold hover:text-secondary transition-colors text-primary capitalize"
                                    href={link.href}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center gap-2 md:gap-4">
                            <Link
                                href={"/"}
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 hover:text-secondary rounded-lg transition-colors"
                            >
                                <span className="material-symbols-outlined text-2xl">search</span>
                            </Link>
                            <Link
                                href={"/profile"}
                                className="hidden sm:block p-2 hover:text-secondary rounded-lg transition-colors"
                            >
                                <span className="material-symbols-outlined text-2xl">person</span>
                            </Link>
                            <Link href={"/cart"} className="p-2 hover:text-secondary rounded-lg transition-colors relative">
                                <span className="material-symbols-outlined text-2xl">shopping_bag</span>
                                <span className="absolute top-1 right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                    2
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* SEARCH OVERLAY */}
                    <div
                        className={`absolute inset-0 bg-background-light z-50 flex items-center px-4 transition-all duration-300 ease-in-out transform ${
                            isSearchOpen
                                ? "opacity-100 translate-y-0 visible"
                                : "opacity-0 -translate-y-4 invisible pointer-events-none"
                        }`}
                    >
                        <div className="w-full flex items-center gap-4">
                            <span className="material-symbols-outlined text-2xl text-secondary-text-light">search</span>
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="flex-1 h-10 md:h-12 bg-transparent border-b-2 border-transparent focus:border-primary outline-none text-lg text-text-light placeholder-secondary-text-light"
                            />
                            <button onClick={closeSearch} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* SEARCH RESULTS DROPDOWN */}
                {isSearchOpen && searchQuery.length >= 3 && (
                    <div className="absolute top-full left-0 w-full bg-background-light border-b border-border-light shadow-xl animate-in fade-in slide-in-from-top-2 duration-200 max-h-[60vh] overflow-y-auto">
                        <div className="container mx-auto px-4 py-6">
                            <h3 className="text-xs font-bold text-secondary-text-light tracking-widest mb-4">
                                SEARCH RESULTS
                            </h3>
                            <div className="grid gap-2">
                                {dummyResults.map((result, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-4 p-3 hover:bg-black/5 rounded-lg cursor-pointer transition-colors"
                                    >
                                        <div className="h-12 w-12 bg-gray-200 rounded-md animate-pulse"></div>
                                        <div>
                                            <p className="text-sm font-bold text-text-light">{result.name}</p>
                                            <p className="text-xs text-secondary-text-light">{result.category}</p>
                                        </div>
                                    </div>
                                ))}
                                <button className="w-full text-center text-primary text-sm font-bold mt-4 hover:underline">
                                    {`View all results for "${searchQuery}"`}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* MOBILE SIDEBAR & OVERLAY (Existing) */}
            <div
                className={`fixed inset-0 bg-black/50 z-60 md:hidden transition-opacity duration-300 ease-in-out ${
                    isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            <div
                className={`fixed top-0 left-0 h-full w-[280px] sm:w-[320px] bg-background-light z-70 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-5 border-b border-border-light">
                        <div className="flex items-center gap-2 text-text-light">
                            <svg className="h-6 w-6 text-primary shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"></path>
                            </svg>
                            <h2 className="text-lg font-bold">VogueVerse</h2>
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-1 hover:bg-black/5 rounded-full transition-colors"
                        >
                            <span className="material-symbols-outlined text-2xl">close</span>
                        </button>
                    </div>

                    <nav className="flex-1 overflow-y-auto py-4 px-2 justify-between flex flex-col">
                        <ul className="flex flex-col gap-1">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center justify-between px-4 py-3 text-base font-medium text-text-light hover:bg-primary/5 hover:text-primary rounded-lg transition-colors capitalize"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 px-4 border-t border-border-light pt-6">
                            <Link
                                href="/profile"
                                className="flex items-center gap-3 text-base font-medium text-text-light hover:text-primary transition-colors mb-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="material-symbols-outlined text-xl">person</span>
                                My Account
                            </Link>
                        </div>
                    </nav>

                    <div className="p-5 bg-gray-50">
                        <p className="text-xs text-secondary-text-light text-center">© 2024 VogueVerse</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
