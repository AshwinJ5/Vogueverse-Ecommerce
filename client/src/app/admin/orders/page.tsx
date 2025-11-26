"use client";

import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "@/app/components/Sidebar";
import AdminHeader from "@/app/components/AdminHeader";

// Mock Data
const initialOrders = [
    {
        id: "10293",
        customer: "Jane Doe",
        date: "Oct 26, 2023",
        total: "$149.99",
        status: "Delivered",
    },
    {
        id: "10292",
        customer: "John Smith",
        date: "Oct 25, 2023",
        total: "$89.50",
        status: "Shipped",
    },
    {
        id: "10291",
        customer: "Alice Johnson",
        date: "Oct 25, 2023",
        total: "$210.00",
        status: "Pending",
    },
    {
        id: "10290",
        customer: "Robert Brown",
        date: "Oct 24, 2023",
        total: "$45.00",
        status: "Cancelled",
    },
    {
        id: "10289",
        customer: "Emily Davis",
        date: "Oct 24, 2023",
        total: "$120.00",
        status: "Delivered",
    },
];

const AdminOrdersPage = () => {
    const [orders, setOrders] = useState(initialOrders);

    // Helper for status badges
    const getStatusBadge = (status: string) => {
        switch (status) {
            case "Delivered":
                return "bg-green-100 text-green-800";
            case "Shipped":
                return "bg-blue-100 text-blue-800";
            case "Pending":
                return "bg-secondary/20 text-yellow-800"; // Using secondary as warning/yellow
            case "Cancelled":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="flex min-h-screen font-display bg-background-light text-text-light">
            {/* --- Sidebar --- */}
            <Sidebar />

            {/* --- Main Section --- */}
            <main className="flex flex-1 flex-col">
                {/* --- Header --- */}
                <AdminHeader />

                {/* --- Content --- */}
                <div className="flex-1 space-y-4 p-6 lg:p-8 overflow-y-auto">
                    {/* Page Heading */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <h1 className="text-text-light text-3xl font-bold leading-tight tracking-tight">Orders</h1>
                        <div className="flex gap-3">
                        <Link href={'/admin/orders/add'} className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-secondary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-secondary/90 transition-colors">
                            <span className="material-symbols-outlined text-lg">add</span>
                            <span className="truncate">Create Order</span>
                        </Link>
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                            <span className="material-symbols-outlined text-lg">download</span>
                            <span className="truncate">Export Orders</span>
                        </button>

                        </div>
                    </div>

                    {/* Filter Section */}
                    <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                            {/* Search Bar */}
                            <div className="lg:col-span-2">
                                <label className="flex h-12 w-full flex-col">
                                    <div className="flex h-full w-full flex-1 items-stretch rounded-lg">
                                        <div className="flex items-center justify-center rounded-l-lg border border-r-0 border-border-light bg-gray-50 pl-4 text-gray-500">
                                            <span className="material-symbols-outlined">search</span>
                                        </div>
                                        <input
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none border border-l-0 border-border-light bg-white px-4 text-base font-normal leading-normal text-text-light placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                            placeholder="Search by Order ID or Customer..."
                                        />
                                    </div>
                                </label>
                            </div>
                            {/* Dropdowns */}
                            <div className="flex items-center gap-3">
                                <button className="flex h-12 w-full items-center justify-between gap-x-2 rounded-lg border border-border-light bg-white px-4 hover:bg-gray-50 transition-colors">
                                    <p className="text-sm font-medium text-text-light">Order Status</p>
                                    <span className="material-symbols-outlined text-gray-500">expand_more</span>
                                </button>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="flex h-12 w-full items-center justify-between gap-x-2 rounded-lg border border-border-light bg-white px-4 hover:bg-gray-50 transition-colors">
                                    <p className="text-sm font-medium text-text-light">Date Range</p>
                                    <span className="material-symbols-outlined text-gray-500">expand_more</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Data Table */}
                    <div className="overflow-x-auto">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden rounded-xl border border-border-light shadow-sm">
                                <table className="min-w-full divide-y divide-border-light">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-text-light sm:pl-6"
                                            >
                                                Order ID
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-text-light"
                                            >
                                                Customer
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-text-light"
                                            >
                                                Date
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-text-light"
                                            >
                                                Total
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-text-light"
                                            >
                                                Status
                                            </th>
                                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                <span className="sr-only">Actions</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border-light bg-white">
                                        {orders.map((order) => (
                                            <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-text-light sm:pl-6">
                                                    {order.id}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {order.customer}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {order.date}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {order.total}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm">
                                                    <span
                                                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusBadge(
                                                            order.status
                                                        )}`}
                                                    >
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                    <div className="flex items-center justify-end gap-3">
                                                        <button className="text-gray-400 hover:text-primary transition-colors">
                                                            <span className="material-symbols-outlined text-xl">
                                                                visibility
                                                            </span>
                                                        </button>
                                                        <Link href={`/admin/orders/${order.id}`} className="text-gray-400 hover:text-primary transition-colors">
                                                            <span className="material-symbols-outlined text-xl">edit</span>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between pt-2">
                        <p className="text-sm text-gray-500">
                            Showing 1 to
                            {orders.length}
                            of 97 results
                        </p>
                        <div className="flex items-center gap-2">
                            <button className="flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-border-light bg-white text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                                <span className="material-symbols-outlined text-xl">chevron_left</span>
                            </button>
                            <button className="flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-border-light bg-primary text-sm font-bold text-white transition-colors">
                                <span className="truncate">1</span>
                            </button>
                            <button className="flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-border-light bg-white text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                                <span className="truncate">2</span>
                            </button>
                            <button className="flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-border-light bg-white text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                                <span className="truncate">3</span>
                            </button>
                            <button className="flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-border-light bg-white text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                                <span className="material-symbols-outlined text-xl">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminOrdersPage;
