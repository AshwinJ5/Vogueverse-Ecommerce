"use client";

import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/app/components/Sidebar";
import AdminHeader from "@/app/components/AdminHeader";

const Dashboard = () => {
    const recentOrders = [
        {
            name: "Olivia Martin",
            email: "olivia.martin@email.com",
            amount: "1,999.00",
            avatar: "/image001.png",
        },
        {
            name: "Jackson Lee",
            email: "jackson.lee@email.com",
            amount: "39.00",
            avatar: "/image002.png",
        },
        {
            name: "Isabella Nguyen",
            email: "isabella.nguyen@email.com",
            amount: "299.00",
            avatar: "/image003.png",
        },
        {
            name: "William Kim",
            email: "will@email.com",
            amount: "99.00",
            avatar: "/image004.png",
        },
        {
            name: "Sofia Davis",
            email: "sofia.davis@email.com",
            amount: "39.00",
            avatar: "/image005.png",
        },
    ];

    return (
        <div className="bg-background-light font-display text-text-light">
            <div className="relative flex min-h-screen w-full">
                {/* --- Sidebar --- */}
                <Sidebar />

                {/* --- Main Content --- */}
                <main className="flex flex-1 flex-col">
                    {/* Header */}
                    <AdminHeader />

                    {/* Content Area */}
                    <div className="flex-1 space-y-4 p-6 lg:p-8">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-text-light">Dashboard Overview</h2>
                                <p className="text-text-subtle-light">
                                    Welcome back, here&apos;s a summary of your store&apos;s activity.
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Link
                                    href="/admin/products"
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-border-light bg-secondary text-white hover:bg-secondary/90 h-10 py-2 px-4"
                                >
                                    <span className="material-symbols-outlined text-base! mr-2">inventory_2</span>
                                    Manage Products
                                </Link>
                                <Link
                                    href="/admin/orders/add"
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-white hover:bg-primary/90 h-10 py-2 px-4"
                                >
                                    <span className="material-symbols-outlined text-base! mr-2">add</span>
                                    New Order
                                </Link>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <Link href={'/admin/orders'} className="group rounded-xl border border-border-light bg-card-light text-text-light shadow-sm">
                                <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                                    <h3 className="tracking-tight text-sm font-medium text-text-subtle-light">
                                        Total Sales
                                    </h3>
                                    <span className="material-symbols-outlined text-text-subtle-light text-2xl! group-hover:text-secondary">paid</span>
                                </div>
                                <div className="p-6 pt-0">
                                    <div className="text-2xl font-bold group-hover:text-primary">$45,231.89</div>
                                    <p className="text-xs text-text-subtle-light">+20.1% from last month</p>
                                </div>
                            </Link>
                            <Link href={'/admin/orders'} className="group rounded-xl border border-border-light bg-card-light text-text-light shadow-sm">
                                <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                                    <h3 className="tracking-tight text-sm font-medium text-text-subtle-light">
                                        New Orders
                                    </h3>
                                    <span className="material-symbols-outlined text-text-subtle-light text-2xl! group-hover:text-secondary">
                                        shopping_cart
                                    </span>
                                </div>
                                <div className="p-6 pt-0">
                                    <div className="text-2xl font-bold group-hover:text-primary">+2,350</div>
                                    <p className="text-xs text-text-subtle-light">+180.1% from last month</p>
                                </div>
                            </Link>
                            <Link href={'/admin/users'} className="group rounded-xl border border-border-light bg-card-light text-text-light shadow-sm">
                                <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                                    <h3 className="tracking-tight text-sm font-medium text-text-subtle-light">
                                        Active Users
                                    </h3>
                                    <span className="material-symbols-outlined text-text-subtle-light text-2xl! group-hover:text-secondary">
                                        group
                                    </span>
                                </div>
                                <div className="p-6 pt-0">
                                    <div className="text-2xl font-bold group-hover:text-primary">+1,234</div>
                                    <p className="text-xs text-text-subtle-light">+19% from last month</p>
                                </div>
                            </Link>
                            <Link href={'/admin/products'} className="group rounded-xl border border-border-light bg-card-light text-text-light shadow-sm">
                                <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                                    <h3 className="tracking-tight text-sm font-medium text-text-subtle-light">
                                        Stock Alerts
                                    </h3>
                                    <span className="material-symbols-outlined text-secondary text-2xl!">warning</span>
                                </div>
                                <div className="p-6 pt-0">
                                    <div className="text-2xl font-bold group-hover:text-primary">15 Products</div>
                                    <p className="text-xs text-text-subtle-light">Requires immediate attention</p>
                                </div>
                            </Link>
                        </div>

                        {/* Charts and Orders */}
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                            {/* Chart Area */}
                            <div className="lg:col-span-4 rounded-xl border border-border-light bg-card-light p-4 shadow-sm">
                                <h3 className="font-semibold leading-none tracking-tight text-text-light">Sales Trends</h3>
                                <div className="h-[350px] mt-4 w-full">
                                    <svg
                                        fill="none"
                                        height="100%"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 500 250"
                                        width="100%"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <defs>
                                            <linearGradient
                                                gradientUnits="userSpaceOnUse"
                                                id="chartGradient"
                                                x1="250"
                                                x2="250"
                                                y1="0"
                                                y2="250"
                                            >
                                                <stop stopColor="#df3031" stopOpacity="0.2"></stop>
                                                <stop offset="1" stopColor="#df3031" stopOpacity="0"></stop>
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d="M0 200 C50 150, 80 120, 125 140 S200 220, 250 180 S320 80, 375 100 S450 150, 500 120 V 250 H 0 Z"
                                            fill="url(#chartGradient)"
                                        ></path>
                                        <path
                                            d="M0 200 C50 150, 80 120, 125 140 S200 220, 250 180 S320 80, 375 100 S450 150, 500 120"
                                            stroke="#df3031"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                        ></path>
                                    </svg>
                                </div>
                            </div>

                            {/* Recent Orders List */}
                            <div className="lg:col-span-3 rounded-xl border border-border-light bg-card-light shadow-sm">
                                <div className="flex justify-around">
                                    <div className="flex flex-col space-y-1.5 p-6">
                                        <h3 className="font-semibold leading-none tracking-tight text-text-light">
                                            Recent Orders
                                        </h3>
                                        <p className="text-sm text-text-subtle-light">You have 26 new orders this month.</p>
                                    </div>
                                    <Link
                                        href={"/admin/orders"}
                                        className="flex flex-col space-y-1.5 p-6 text-primary font-bold hover:underline"
                                    >
                                        View All
                                    </Link>
                                </div>
                                <div className="py-6 px-3 pt-0">
                                    <div className="space-y-6">
                                        {recentOrders.map((order, index) => (
                                            <Link href={"/orders/001"} key={index} className="group flex items-center hover:bg-gray-100 p-1 rounded">
                                                <div className="relative size-10 rounded-full overflow-hidden">
                                                    <Image
                                                        src={order.avatar}
                                                        alt={order.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="ml-4 space-y-1">
                                                    <p className="group-hover:text-primary text-sm font-medium leading-none text-text-light">
                                                        {order.name}
                                                    </p>
                                                    <p className="text-sm text-text-subtle-light">{order.email}</p>
                                                </div>
                                                <div className="ml-auto font-medium text-text-light">₹ {order.amount}</div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
