"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Account from "../components/Account";
import Address from "../components/Address";
import RecentOrders from "../components/RecentOrders";
import Link from "next/link";

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState("Account Details");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const sidebarLinks = [
        { icon: "person", label: "Account Details" },
        { icon: "home", label: "Addresses" },
        { icon: "inventory_2", label: "Order History" },
    ];

    return (
        <div className="font-display bg-background-light text-text-primary-light min-h-screen flex flex-col text-text-light">
            <Navbar />

            <main className="grow container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
                {/* Mobile Header */}
                <div className="lg:hidden mb-4">
                    <div className="flex items-center justify-between bg-card-light p-4 rounded-lg border border-border-light">
                        <div className="flex gap-3 items-center">
                            <div className="relative size-12 shrink-0">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMWcItCpeKQ4jaosNE4XQ2GO20Ya4HnXB51aiGqBhDpPxn2f7zJ1ICeUZW8R1jpUh7jFJn54uL1p0sUBf7oe6M8BXyR8nl_BX9lyDSOvUnjkUjCDUUBrrpEqdilhD552hj3yowpy-B4wJtqAfDhvCxgdoVvYfvKjYxitx2SE6-Jl9PkUyBBCznzKE09Wcdk_vjkTj7lRoA7x5q2P9LUZlbesx9KX60tP_C6haVHDNMF8-97EDj0NuyZUWUblYgFQG5VOwPFbWwim72"
                                    alt="Eleanor Vance"
                                    fill
                                    className="rounded-full object-cover"
                                    sizes="48px"
                                />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-text-primary-light text-base font-bold leading-normal">
                                    Eleanor Vance
                                </h1>
                                <p className="text-text-secondary-light text-sm font-normal leading-normal">
                                    eleanor@example.com
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-lg text-text-primary-light hover:bg-gray-100 transition-colors"
                        >
                            <span className="material-symbols-outlined">{isMobileMenuOpen ? "close" : "menu"}</span>
                        </button>
                    </div>

                    {isMobileMenuOpen && (
                        <div className="bg-card-light mt-2 p-4 rounded-lg border border-border-light">
                            <div className="flex flex-col gap-1">
                                {sidebarLinks.map((link) => (
                                    <button
                                        key={link.label}
                                        onClick={() => {
                                            setActiveTab(link.label);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                                            activeTab === link.label
                                                ? "bg-primary/10 text-primary"
                                                : "text-text-primary-light hover:bg-gray-100"
                                        }`}
                                    >
                                        <span
                                            className={`material-symbols-outlined ${
                                                activeTab === link.label ? "fill" : ""
                                            }`}
                                        >
                                            {link.icon}
                                        </span>
                                        <p
                                            className={`text-sm leading-normal ${
                                                activeTab === link.label ? "font-bold" : "font-medium"
                                            }`}
                                        >
                                            {link.label}
                                        </p>
                                    </button>
                                ))}
                                <Link href={'/auth/login'} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-primary-light hover:bg-gray-100 transition-colors mt-2 border-t border-border-light pt-4">
                                    <span className="material-symbols-outlined">logout</span>
                                    <p className="text-sm font-medium leading-normal">Logout</p>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex flex-col lg:flex-row gap-4 sm:gap-8">
                    {/* --- Side Navigation (Desktop) --- */}
                    <aside className="hidden lg:block lg:w-1/4 xl:w-1/5 shrink-0">
                        <div className="sticky top-24">
                            <div className="flex h-full flex-col justify-between bg-card-light p-4 rounded-lg border border-border-light">
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-3 items-center">
                                        <div className="relative size-12 shrink-0">
                                            <Image
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMWcItCpeKQ4jaosNE4XQ2GO20Ya4HnXB51aiGqBhDpPxn2f7zJ1ICeUZW8R1jpUh7jFJn54uL1p0sUBf7oe6M8BXyR8nl_BX9lyDSOvUnjkUjCDUUBrrpEqdilhD552hj3yowpy-B4wJtqAfDhvCxgdoVvYfvKjYxitx2SE6-Jl9PkUyBBCznzKE09Wcdk_vjkTj7lRoA7x5q2P9LUZlbesx9KX60tP_C6haVHDNMF8-97EDj0NuyZUWUblYgFQG5VOwPFbWwim72"
                                                alt="Eleanor Vance"
                                                fill
                                                className="rounded-full object-cover"
                                                sizes="48px"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <h1 className="text-text-primary-light text-base font-bold leading-normal">
                                                Eleanor Vance
                                            </h1>
                                            <p className="text-text-secondary-light text-sm font-normal leading-normal">
                                                eleanor@example.com
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1 mt-4">
                                        {sidebarLinks.map((link) => (
                                            <button
                                                key={link.label}
                                                onClick={() => {
                                                    setActiveTab(link.label);
                                                }}
                                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer ${
                                                    activeTab === link.label
                                                        ? "bg-primary/10 text-primary"
                                                        : "text-text-primary-light hover:bg-gray-100"
                                                }`}
                                            >
                                                <span
                                                    className={`material-symbols-outlined ${
                                                        activeTab === link.label ? "fill" : ""
                                                    }`}
                                                >
                                                    {link.icon}
                                                </span>
                                                <p
                                                    className={`text-sm leading-normal ${
                                                        activeTab === link.label ? "font-bold" : "font-medium"
                                                    }`}
                                                >
                                                    {link.label}
                                                </p>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1 mt-8 border-t border-border-light pt-4">
                                    <Link href={'/auth/login'} className="flex cursor-pointer items-center gap-3 px-3 py-2.5 rounded-lg text-text-primary-light hover:bg-gray-100 transition-colors">
                                        <span className="material-symbols-outlined">logout</span>
                                        <p className="text-sm font-medium leading-normal">Logout</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* --- Main Content (UPDATED) --- */}
                    <div className="flex-1">
                        {activeTab === "Account Details" && <Account />}
                        {activeTab === "Addresses" && <Address />}
                        {activeTab === "Order History" && <RecentOrders />}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default UserProfile;
