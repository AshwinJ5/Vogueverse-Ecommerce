"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState("Account Details");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    // --- Mock Data ---
    const sidebarLinks = [
        { icon: "person", label: "Account Details" },
        { icon: "home", label: "Addresses" },
        { icon: "inventory_2", label: "Order History", href: "/orders" },
    ];

    const recentOrders = [
        {
            id: "#FAS83721",
            date: "23 Oct 2023",
            total: "$145.50",
            status: "Shipped",
            statusColor: "bg-green-100 text-green-800",
        },
        {
            id: "#FAS81093",
            date: "15 Sep 2023",
            total: "$89.99",
            status: "Processing",
            statusColor: "bg-blue-100 text-blue-800",
        },
        {
            id: "#FAS79842",
            date: "01 Aug 2023",
            total: "$210.00",
            status: "Delivered",
            statusColor: "bg-gray-100 text-gray-800",
        },
    ];

    return (
        <div className="font-display bg-background-light text-text-primary-light min-h-screen flex flex-col text-text-light">
            <Navbar />

            <main className="grow container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
                {/* Mobile Header - Same as before */}
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
                                            if (link.href) {
                                                router.push(link?.href);
                                            }
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
                                <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-primary-light hover:bg-gray-100 transition-colors mt-2 border-t border-border-light pt-4">
                                    <span className="material-symbols-outlined">logout</span>
                                    <p className="text-sm font-medium leading-normal">Logout</p>
                                </button>
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
                                                    if (link.href) {
                                                        router.push(link?.href);
                                                    }
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
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1 mt-8 border-t border-border-light pt-4">
                                    <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-primary-light hover:bg-gray-100 transition-colors">
                                        <span className="material-symbols-outlined">logout</span>
                                        <p className="text-sm font-medium leading-normal">Logout</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* --- Main Content --- */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-4 sm:gap-8">
                            {/* Account Details Section */}
                            <div className="bg-card-light p-4 sm:p-6 rounded-lg border border-border-light">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                                    <p className="text-text-primary-light text-xl sm:text-2xl font-bold leading-tight tracking-[-0.033em]">
                                        Account Details
                                    </p>
                                    <div className="flex gap-3 flex-wrap">
                                        <button className="flex-1 sm:flex-none min-w-[120px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                                            <span className="truncate">Edit Profile</span>
                                        </button>
                                        <button className="flex-1 sm:flex-none min-w-[120px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-accent text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-accent/90 transition-colors">
                                            <span className="truncate">Change Password</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-2 sm:gap-4">
                                    {[
                                        { label: "Full Name", value: "Eleanor Vance" },
                                        { label: "Member Since", value: "October 15, 2023" },
                                        { label: "Email Address", value: "eleanor@example.com" },
                                        { label: "Password", value: "••••••••••" },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col gap-1 border-t border-solid border-border-light py-3 sm:py-4"
                                        >
                                            <p className="text-text-secondary-light text-sm font-normal leading-normal">
                                                {item.label}
                                            </p>
                                            <p className="text-text-primary-light text-base font-medium leading-normal wrap-break-word">
                                                {item.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Orders Section - Mobile Cards */}
                            <div className="bg-card-light p-4 sm:p-6 rounded-lg border border-border-light">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
                                    <p className="text-text-primary-light text-xl sm:text-2xl font-bold leading-tight tracking-[-0.033em]">
                                        Recent Orders
                                    </p>
                                    <a
                                        href="#"
                                        className="text-primary text-sm font-bold hover:underline self-start sm:self-auto"
                                    >
                                        View All
                                    </a>
                                </div>

                                {/* Desktop Table */}
                                <div className="hidden sm:block overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-border-light">
                                                <th className="py-3 px-4 text-sm font-semibold text-text-secondary-light">
                                                    Order ID
                                                </th>
                                                <th className="py-3 px-4 text-sm font-semibold text-text-secondary-light">
                                                    Date
                                                </th>
                                                <th className="py-3 px-4 text-sm font-semibold text-text-secondary-light">
                                                    Total
                                                </th>
                                                <th className="py-3 px-4 text-sm font-semibold text-text-secondary-light">
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recentOrders.map((order) => (
                                                <tr key={order.id} className="border-b border-border-light last:border-0">
                                                    <td className="py-4 px-4 text-sm font-medium text-text-primary-light">
                                                        {order.id}
                                                    </td>
                                                    <td className="py-4 px-4 text-sm text-text-primary-light">
                                                        {order.date}
                                                    </td>
                                                    <td className="py-4 px-4 text-sm text-text-primary-light">
                                                        {order.total}
                                                    </td>
                                                    <td className="py-4 px-4 text-sm">
                                                        <span
                                                            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${order.statusColor}`}
                                                        >
                                                            {order.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Mobile Cards */}
                                {/* Minimalist Status-focused Cards */}
                                <div className="sm:hidden space-y-3">
                                    {recentOrders.map((order) => (
                                        <div
                                            key={order.id}
                                            className={`p-4 rounded-lg border-l-4 ${
                                                order.status === "Shipped"
                                                    ? "border-l-green-500 bg-green-50"
                                                    : order.status === "Processing"
                                                    ? "border-l-blue-500 bg-blue-50"
                                                    : "border-l-gray-500 bg-gray-50"
                                            }`}
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <p className="font-semibold text-text-primary-light">{order.id}</p>
                                                    <p className="text-sm text-text-secondary-light">{order.date}</p>
                                                </div>
                                                <span className="text-lg font-bold text-text-primary-light">
                                                    {order.total}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-text-secondary-light">{order.status}</span>
                                                <Link
                                                    href={"/orders/001"}
                                                    className="text-sm font-medium text-primary hover:underline"
                                                >
                                                    Details →
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default UserProfile;
