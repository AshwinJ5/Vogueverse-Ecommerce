"use client";

import AdminHeader from "@/app/components/AdminHeader";
import Sidebar from "@/app/components/Sidebar";
import Link from "next/link";
import React, { useState } from "react";

// Mock Data Interface
interface User {
    id: number;
    name: string;
    email: string;
    role: "Admin" | "Customer" | "Manager";
    date: string;
}

const AdminUsersPage = () => {
    // Mock Data
    const initialUsers: User[] = [
        { id: 1, name: "Olivia Martin", email: "olivia.martin@example.com", role: "Admin", date: "2023-05-15" },
        { id: 2, name: "Liam Johnson", email: "liam.johnson@example.com", role: "Customer", date: "2023-06-01" },
        { id: 3, name: "Noah Williams", email: "noah.williams@example.com", role: "Customer", date: "2023-07-22" },
        { id: 4, name: "Emma Brown", email: "emma.brown@example.com", role: "Customer", date: "2023-08-10" },
        { id: 5, name: "James Taylor", email: "james.taylor@example.com", role: "Admin", date: "2023-09-05" },
    ];

    const [users, setUsers] = useState<User[]>(initialUsers);

    // Handler for deleting a user
    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this user?")) {
            setUsers(users.filter((user) => user.id !== id));
        }
    };

    // Helper for role badges
    const getRoleBadge = (role: string) => {
        switch (role) {
            case "Admin":
                return "bg-secondary/20 text-secondary-800"; // Using custom secondary color
            case "Manager":
                return "bg-purple-100 text-purple-800";
            default: // Customer
                return "bg-blue-100 text-blue-800";
        }
    };

    return (
        <div className="flex min-h-screen font-display bg-background-light text-text-light">
            <Sidebar />

            <main className="flex flex-1 flex-col">
                <AdminHeader />
                <div className="flex-1 space-y-4 p-6 lg:p-8">
                    {/* PageHeading */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-3xl font-bold text-text-primary">User Management</h1>
                            <p className="text-gray-500">Manage all registered users in the system.</p>
                        </div>
                        <Link href={'/admin/users/add'} className="flex h-10 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-4 text-white text-sm font-bold shadow-sm hover:bg-primary/90 transition-colors">
                            <span className="material-symbols-outlined text-xl">add</span>
                            <span className="truncate">Add New User</span>
                        </Link>
                    </div>

                    {/* Toolbar and Filters */}
                    <div className="mb-4 rounded-xl border border-border-light bg-white p-4 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* SearchBar */}
                            <div className="col-span-1 md:col-span-3">
                                <label className="flex flex-col w-full">
                                    <div className="flex w-full flex-1 items-stretch rounded-lg h-18">
                                        <div className="text-gray-500 flex bg-background-light items-center justify-center pl-3 rounded-l-lg border border-r-0 border-border-light">
                                            <span className="material-symbols-outlined">search</span>
                                        </div>
                                        <input
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light h-10 placeholder:text-gray-400 pl-2 text-sm font-normal"
                                            placeholder="Search by name or email..."
                                        />
                                    </div>
                                </label>
                            </div>
                            {/* Chips */}
                            {/* <div className="col-span-1 md:col-span-3 flex flex-wrap gap-3">
                                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 pl-3 pr-2 text-text-primary hover:bg-gray-200 transition-colors">
                                    <span className="material-symbols-outlined text-xl text-gray-600">badge</span>
                                    <p className="text-sm font-medium">Role: All</p>
                                    <span className="material-symbols-outlined text-xl text-gray-600">expand_more</span>
                                </button>
                                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 pl-3 pr-2 text-text-primary hover:bg-gray-200 transition-colors">
                                    <span className="material-symbols-outlined text-xl text-gray-600">calendar_today</span>
                                    <p className="text-sm font-medium">Registration Date</p>
                                    <span className="material-symbols-outlined text-xl text-gray-600">expand_more</span>
                                </button>
                            </div> */}
                        </div>
                    </div>

                    {/* User Data Table */}
                    <div className="overflow-hidden rounded-xl border border-border-light bg-white shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm min-w-[800px]">
                                <thead className="border-b border-border-light bg-gray-50 text-xs uppercase text-gray-600">
                                    <tr>
                                        <th className="px-6 py-3 font-medium" scope="col">
                                            Name
                                        </th>
                                        <th className="px-6 py-3 font-medium" scope="col">
                                            Email
                                        </th>
                                        <th className="px-6 py-3 font-medium" scope="col">
                                            Role
                                        </th>
                                        <th className="px-6 py-3 font-medium" scope="col">
                                            Registration Date
                                        </th>
                                        <th className="px-6 py-3 font-medium text-center" scope="col">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border-light">
                                    {users.map((user) => (
                                        <tr key={user.id} className="bg-white hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-text-primary whitespace-nowrap">
                                                {user.name}
                                            </td>
                                            <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{user.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${getRoleBadge(
                                                        user.role
                                                    )}`}
                                                >
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{user.date}</td>
                                            <td className="px-6 py-4 text-center whitespace-nowrap">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button
                                                        className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
                                                        title="View Details"
                                                    >
                                                        <span className="material-symbols-outlined text-xl">
                                                            visibility
                                                        </span>
                                                    </button>
                                                    <Link
                                                        href={`/admin/users/${user.id}`}
                                                        className="p-1 text-gray-500 hover:text-green-600 transition-colors"
                                                        title="Edit"
                                                    >
                                                        <span className="material-symbols-outlined text-xl">edit</span>
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(user.id)}
                                                        className="p-1 text-gray-500 hover:text-primary transition-colors"
                                                        title="Delete"
                                                    >
                                                        <span className="material-symbols-outlined text-xl">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {users.length === 0 && (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                                No users found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <nav
                            aria-label="Pagination"
                            className="flex items-center justify-between border-t border-border-light bg-white px-4 py-3 sm:px-6"
                        >
                            <div className="hidden sm:block">
                                <p className="text-sm text-gray-700">
                                    Showing <span className="font-medium">1</span> to{" "}
                                    <span className="font-medium">{users.length}</span> of{" "}
                                    <span className="font-medium">20</span> results
                                </p>
                            </div>
                            <div className="flex flex-1 justify-between sm:justify-end gap-3">
                                <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                    Previous
                                </button>
                                <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                    Next
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminUsersPage;
