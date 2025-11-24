"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();

    // Define menu items here to keep the JSX clean and apply logic easily
    const navItems = [
        { href: "/admin/dashboard", label: "Dashboard", icon: "dashboard" },
        { href: "/admin/products", label: "Products", icon: "inventory_2" },
        { href: "/admin/orders", label: "Orders", icon: "receipt_long" },
        { href: "/admin/users", label: "Users", icon: "group" },
        { href: "/admin/coupons", label: "Coupons", icon: "sell" },
        { href: "/admin/activity-logs", label: "Activity Logs", icon: "description" }, // Changed icon to description to distinguish from orders
    ];

    return (
        <aside className="flex h-screen w-64 flex-col justify-between bg-card-light p-4 border-r border-border-light sticky top-0">
            <div className="flex flex-col gap-8">
                <div className="flex items-center gap-3 px-2">
                    <Image width={30} height={30} alt="logo" src={"/logo.svg"} />
                    <h1 className="text-text-light text-xl font-bold leading-normal">
                        VogueVerse
                    </h1>
                </div>
                
                <nav className="flex flex-col gap-2">
                    {navItems.map((item) => {
                        // Check if the current path starts with the link's href
                        const isActive = pathname.startsWith(item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                                    isActive
                                        ? "bg-primary/10 text-primary" // Active styles
                                        : "text-text-subtle-light hover:bg-zinc-100" // Inactive styles
                                }`}
                            >
                                <span
                                    className={`material-symbols-outlined ${
                                        isActive ? "fill" : ""
                                    }`}
                                >
                                    {item.icon}
                                </span>
                                <p className="text-sm font-medium leading-normal">
                                    {item.label}
                                </p>
                            </Link>
                        );
                    })}
                </nav>
            </div>
            
            <div className="flex flex-col gap-1">
                <Link
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-subtle-light hover:bg-zinc-100 transition-colors"
                >
                    <span className="material-symbols-outlined">logout</span>
                    <p className="text-sm font-medium leading-normal">Log Out</p>
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;