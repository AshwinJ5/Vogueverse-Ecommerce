"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/app/components/Sidebar";
import AdminHeader from "@/app/components/AdminHeader";

// Mock Types
type Address = {
    id: number;
    label: string;
    street: string;
    cityStateZip: string;
    country: string;
};

const AddUserPage = () => {
    // --- Profile State ---
    const [fullName, setFullName] = useState("Amelia Earhart");
    const [email, setEmail] = useState("amelia.e@example.com");

    // --- Addresses State ---
    const [addresses, setAddresses] = useState<Address[]>([
        {
            id: 1,
            label: "Primary Residence",
            street: "123 Aviation Way",
            cityStateZip: "Atchison, Kansas, 66002",
            country: "United States",
        },
        {
            id: 2,
            label: "Workshop",
            street: "456 Propeller Ave",
            cityStateZip: "Oakland, California, 94621",
            country: "United States",
        },
    ]);

    // --- Handlers ---
    const handleDeleteAddress = (id: number) => {
        if (confirm("Are you sure you want to delete this address?")) {
            setAddresses(addresses.filter((addr) => addr.id !== id));
        }
    };

    const handleAddAddress = () => {
        // For demo purposes, adding a mock address
        const newId = Math.max(...addresses.map((a) => a.id), 0) + 1;
        setAddresses([
            ...addresses,
            {
                id: newId,
                label: "New Address",
                street: "789 New St",
                cityStateZip: "New City, NY, 10001",
                country: "United States",
            },
        ]);
    };

    return (
        <div className="flex min-h-screen font-display bg-background-light text-text-light">
            <Sidebar />

            <main className="flex flex-1 flex-col">
                <AdminHeader />
                <div className="flex-1 space-y-4 p-6 lg:p-8">
                    {/* Page Heading */}
                    <div className="flex flex-wrap justify-between gap-4 items-center mb-8">
                        <div className="flex flex-col">
                            <h1 className="text-text-light text-3xl font-bold leading-tight">Add User</h1>
                            <p className="text-gray-500 text-base font-normal leading-normal mt-1">
                                Add user profile details and shipping addresses.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Link href="/admin/users">
                                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white text-text-light border border-border-light text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 transition-colors">
                                    <span className="truncate">Cancel</span>
                                </button>
                            </Link>
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                                <span className="truncate">Add User</span>
                            </button>
                        </div>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white rounded-xl border border-border-light p-8">
                        {/* Profile Information Section */}
                        <section>
                            <h2 className="text-text-light text-xl font-bold leading-tight tracking-[-0.015em]">
                                Profile Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div className="flex flex-col h-18">
                                    <label className="text-text-light text-sm font-medium leading-normal pb-2">
                                        User ID
                                    </label>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-500 focus:outline-none border border-border-light bg-background-light h-12 px-4 text-base font-normal leading-normal cursor-not-allowed"
                                        readOnly
                                        value="USER-10238"
                                    />
                                </div>
                                <div className="flex flex-col h-18">
                                    <label className="text-text-light text-sm font-medium leading-normal pb-2">
                                        Full Name
                                    </label>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-secondary/50 border border-border-light bg-white h-12 px-4 text-base font-normal leading-normal"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col h-18">
                                    <label className="text-text-light text-sm font-medium leading-normal pb-2">
                                        Email Address
                                    </label>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-secondary/50 border border-border-light bg-white h-12 px-4 text-base font-normal leading-normal"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                        </section>

                        <hr className="border-border-light my-8" />

                        {/* Shipping Addresses Section */}
                        <section>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-text-light text-xl font-bold leading-tight tracking-[-0.015em]">
                                    Shipping Addresses
                                </h2>
                                <button
                                    onClick={handleAddAddress}
                                    className="flex items-center gap-2 min-w-[84px] cursor-pointer justify-center overflow-hidden rounded-lg h-10 px-4 bg-secondary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-secondary/90 transition-colors"
                                >
                                    <span className="material-symbols-outlined text-lg">add</span>
                                    <span className="truncate">Add New Address</span>
                                </button>
                            </div>

                            <div className="space-y-4">
                                {addresses.length === 0 && (
                                    <p className="text-gray-500 italic">No addresses saved for this user.</p>
                                )}
                                {addresses.map((address) => (
                                    <div
                                        key={address.id}
                                        className="border border-border-light rounded-lg p-4 flex justify-between items-start hover:bg-gray-50 transition-colors"
                                    >
                                        <div>
                                            <p className="font-semibold text-text-light">{address.label}</p>
                                            <p className="text-gray-600">{address.street}</p>
                                            <p className="text-gray-600">{address.cityStateZip}</p>
                                            <p className="text-gray-600">{address.country}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="p-2 rounded-md hover:bg-gray-100 text-secondary transition-colors">
                                                <span className="material-symbols-outlined text-xl">edit</span>
                                            </button>
                                            <button
                                                onClick={() => handleDeleteAddress(address.id)}
                                                className="p-2 rounded-md hover:bg-gray-100 text-primary transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-xl">delete</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AddUserPage;
