"use client";

import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import AdminHeader from "@/app/components/AdminHeader";
import Link from "next/link";

// Mock Data
const initialCoupons = [
    {
        id: 1,
        code: "SUMMER2024",
        type: "Percentage",
        value: "20%",
        expiry: "Dec 31, 2024",
        status: "Active",
    },
    {
        id: 2,
        code: "WINTERSALE",
        type: "Fixed Amount",
        value: "$15.00",
        expiry: "Jan 31, 2025",
        status: "Active",
    },
    {
        id: 3,
        code: "NEWUSER10",
        type: "Percentage",
        value: "10%",
        expiry: "Dec 31, 2024",
        status: "Active",
    },
    {
        id: 4,
        code: "FLASH25",
        type: "Percentage",
        value: "25%",
        expiry: "Sep 30, 2023",
        status: "Expired",
    },
    {
        id: 5,
        code: "VIPONLY",
        type: "Fixed Amount",
        value: "$50.00",
        expiry: "Jun 30, 2025",
        status: "Disabled",
    },
];

const AdminCouponsPage = () => {
    const [coupons, setCoupons] = useState(initialCoupons);

    // Helper to delete coupon
    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this coupon?")) {
            setCoupons(coupons.filter((c) => c.id !== id));
        }
    };

    // Helper for status styles
    const getStatusStyle = (status: string) => {
        switch (status) {
            case "Active":
                return "bg-green-100 text-green-800";
            case "Expired":
                return "bg-gray-200 text-gray-700";
            case "Disabled":
                return "bg-yellow-100 text-yellow-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="bg-background-light font-display text-text-light text-text-main min-h-screen flex">
            {/* --- SideNavBar --- */}
            <Sidebar />

            {/* --- Main Content --- */}
            <main className="flex flex-1 flex-col">
                <AdminHeader />

                <div className="flex-1 space-y-4 p-6 lg:p-8">
                    {/* PageHeading */}
                    <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                        <h1 className="text-3xl font-bold text-text-primary">Coupon Management</h1>
                        <Link
                            href={"/admin/coupons/add"}
                            className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold leading-normal shadow-sm hover:bg-primary/90 transition-colors"
                        >
                            <span className="material-symbols-outlined">add_circle</span>
                            <span className="truncate">Add New Coupon</span>
                        </Link>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        {/* SearchBar and Chips */}
                        <div className="flex flex-col md:flex-row gap-4 mb-4">
                            <div className="grow">
                                <label className="flex flex-col min-w-40 h-11 w-full">
                                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                                        <div className="text-gray-500 flex bg-gray-100 items-center justify-center pl-4 rounded-l-lg border border-gray-300 border-r-0">
                                            <span className="material-symbols-outlined">search</span>
                                        </div>
                                        <input
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary/50 border border-gray-300 bg-gray-100 h-full placeholder:text-gray-500 px-4 text-sm font-normal leading-normal"
                                            placeholder="Search by coupon code..."
                                        />
                                    </div>
                                </label>
                            </div>
                            <div className="flex gap-3 items-center flex-wrap">
                                <button className="flex h-11 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 border border-gray-300 px-4 hover:bg-gray-200 transition-colors">
                                    <p className="text-gray-800 text-sm font-medium leading-normal">Status</p>
                                    <span className="material-symbols-outlined text-gray-600">expand_more</span>
                                </button>
                                <button className="flex h-11 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 border border-gray-300 px-4 hover:bg-gray-200 transition-colors">
                                    <p className="text-gray-800 text-sm font-medium leading-normal">Discount Type</p>
                                    <span className="material-symbols-outlined text-gray-600">expand_more</span>
                                </button>
                                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-secondary text-white text-sm font-bold leading-normal shadow-sm hover:bg-secondary/90 transition-colors">
                                    <span className="truncate">Apply Filters</span>
                                </button>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[800px]">
                                <thead>
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Code
                                        </th>
                                        <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Discount Type
                                        </th>
                                        <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Value
                                        </th>
                                        <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Expiry Date
                                        </th>
                                        <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {coupons.map((coupon) => (
                                        <tr
                                            key={coupon.id}
                                            className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                                        >
                                            <td className="px-5 py-4 text-sm font-medium text-gray-900">{coupon.code}</td>
                                            <td className="px-5 py-4 text-sm text-gray-600">{coupon.type}</td>
                                            <td className="px-5 py-4 text-sm text-gray-600">{coupon.value}</td>
                                            <td className="px-5 py-4 text-sm text-gray-600">{coupon.expiry}</td>
                                            <td className="px-5 py-4 text-sm">
                                                <span
                                                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                                                        coupon.status
                                                    )}`}
                                                >
                                                    {coupon.status}
                                                </span>
                                            </td>
                                            <td className="px-5 py-4 text-sm font-medium">
                                                <div className="flex items-center gap-4">
                                                    <Link href={`/admin/coupons/${coupon.id}`} className="text-secondary hover:text-secondary/80 transition-colors">
                                                        <span className="material-symbols-outlined">edit</span>
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(coupon.id)}
                                                        className="text-primary hover:text-primary/80 transition-colors"
                                                    >
                                                        <span className="material-symbols-outlined">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {coupons.length === 0 && (
                                        <tr>
                                            <td colSpan={6} className="px-5 py-8 text-center text-gray-500">
                                                No coupons found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-between mt-6 px-1">
                            <p className="text-sm text-gray-600">
                                Showing <span className="font-medium">1</span> to{" "}
                                <span className="font-medium">{coupons.length}</span> of{" "}
                                <span className="font-medium">20</span> results
                            </p>
                            <div className="flex items-center gap-2">
                                <button className="flex items-center justify-center size-9 rounded-lg border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 transition-colors">
                                    <span className="material-symbols-outlined text-base">chevron_left</span>
                                </button>
                                <button className="flex items-center justify-center size-9 rounded-lg border border-gray-300 bg-secondary text-white text-sm font-bold">
                                    1
                                </button>
                                <button className="flex items-center justify-center size-9 rounded-lg border border-gray-300 bg-white text-gray-600 text-sm font-medium hover:bg-gray-100 transition-colors">
                                    2
                                </button>
                                <button className="flex items-center justify-center size-9 rounded-lg border border-gray-300 bg-white text-gray-600 text-sm font-medium hover:bg-gray-100 transition-colors">
                                    3
                                </button>
                                <button className="flex items-center justify-center size-9 rounded-lg border border-gray-300 bg-white text-gray-600 text-sm font-medium hover:bg-gray-100 transition-colors">
                                    4
                                </button>
                                <button className="flex items-center justify-center size-9 rounded-lg border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 transition-colors">
                                    <span className="material-symbols-outlined text-base">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminCouponsPage;
