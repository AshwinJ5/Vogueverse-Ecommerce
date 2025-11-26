"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/app/components/Sidebar";
import AdminHeader from "@/app/components/AdminHeader";

const AddOrderPage = () => {
    // --- State Management ---
    const [customerType, setCustomerType] = useState<"existing" | "new">("existing");
    
    // Mock Items State
    const [items, setItems] = useState([
        {
            id: 1,
            name: "Classic White T-Shirt",
            sku: "TSH-WHT-M",
            price: 25.0,
            quantity: 1,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMmaypzAWbUqVsuXPUTn1XfrML4kQu2Awh7e_-fY6DmQkXXMlGzVfEqMVNsnB0CUa8v_zM83_CB2BtPcXBN2KaKGWPQ5Fsc-un6C3PVNnbwRkCxsOiiarXVjaLj9suiHrne0HLcRFXo7kY5VnQInW0GAhndjl1mFjZ8ZRUHHLJafrmQyXwHVv4LkmeLg86ASNf7qCKgnjOirllbHhsGdM9nHGcA03hTMaMpWdEJh-dzYglcwil8C7uegUXMSteIniDyrD-beSXU0LO",
        },
        {
            id: 2,
            name: "Denim Jeans",
            sku: "JNS-BLU-32",
            price: 70.0,
            quantity: 1,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0799jW8j6G6CV_QMo3Ka9dkmNmijJZXZbPeyqsAdiwYxwRPIwOY1aWsVtLWFBt9ss5Tqc5mUfHymuKFLvMWk4H4BJFEsR2SGCJTGz28oXE4QEWLNY3mCtqjXzA3ookrhpKR7d1PlP44UdA6SQcuzwtnY3Nlhjumdsaws-06-ZLrcH9pbIM6KZy7RD27TKEQFU-o2Vi6rZP_FSbxHkI3Rph1A26i0Tnr7vhrN_DAIQUg0ST4XFen6WCCy-PYEAEWq3MyLyX0m7qRMT",
        },
    ]);

    // --- Logic ---
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 10.0;
    const total = subtotal + shipping;

    const handleQuantityChange = (id: number, val: number) => {
        setItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, val) } : item
            )
        );
    };

    const handleRemoveItem = (id: number) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Order Created", { customerType, items, total });
    };

    return (
        <div className="flex min-h-screen font-display bg-background-light text-text-light">
            <Sidebar />

            <main className="flex flex-1 flex-col">
                <AdminHeader />

                <div className="flex-1 space-y-4 p-6 lg:p-8 overflow-y-auto">
                    {/* PageHeading */}
                    <div className="mb-8">
                        <p className="text-text-light text-3xl font-bold tracking-tight">Create New Order</p>
                        <p className="text-text-secondary-light mt-1">Create a new order for a customer.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        
                        {/* Customer Information Section */}
                        <div className="bg-white rounded-xl shadow-sm border border-border-light">
                            <div className="px-6 py-4 border-b border-border-light">
                                <h3 className="text-lg font-semibold text-text-light">Customer Information</h3>
                            </div>
                            <div className="p-6">
                                {/* Toggle Switch */}
                                <div className="mb-6 flex">
                                    <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-background-light border border-border-light p-1 sm:max-w-xs">
                                        <button
                                            type="button"
                                            onClick={() => setCustomerType("existing")}
                                            className={`flex h-full flex-1 cursor-pointer items-center justify-center rounded-md px-2 text-sm font-medium transition-all ${
                                                customerType === "existing"
                                                    ? "bg-white text-primary shadow-sm ring-1 ring-black/5"
                                                    : "text-text-secondary-light hover:text-text-light"
                                            }`}
                                        >
                                            Existing Customer
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setCustomerType("new")}
                                            className={`flex h-full flex-1 cursor-pointer items-center justify-center rounded-md px-2 text-sm font-medium transition-all ${
                                                customerType === "new"
                                                    ? "bg-white text-primary shadow-sm ring-1 ring-black/5"
                                                    : "text-text-secondary-light hover:text-text-light"
                                            }`}
                                        >
                                            New Customer
                                        </button>
                                    </div>
                                </div>

                                {/* Toggle Content */}
                                {customerType === "existing" ? (
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium text-text-light pb-2">Search Customer</p>
                                        <div className="relative flex w-full items-stretch rounded-lg">
                                            <input
                                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light h-12 placeholder:text-text-secondary-light p-3 rounded-r-none border-r-0 text-sm font-normal transition-all"
                                                placeholder="Search by name, email, or phone"
                                                type="text"
                                            />
                                            <div className="flex border border-border-light bg-white items-center justify-center px-4 rounded-r-lg border-l-0">
                                                <span className="material-symbols-outlined text-xl text-text-secondary-light">search</span>
                                            </div>
                                        </div>
                                    </label>
                                ) : (
                                    <div className="space-y-4 animate-fadeIn">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <label className="flex flex-col">
                                                <p className="text-sm font-medium text-text-light pb-2">First Name</p>
                                                <input className="form-input w-full rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light h-12 px-3 text-sm transition-all" type="text" />
                                            </label>
                                            <label className="flex flex-col">
                                                <p className="text-sm font-medium text-text-light pb-2">Last Name</p>
                                                <input className="form-input w-full rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light h-12 px-3 text-sm transition-all" type="text" />
                                            </label>
                                        </div>
                                        <label className="flex flex-col">
                                            <p className="text-sm font-medium text-text-light pb-2">Email</p>
                                            <input className="form-input w-full rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light h-12 px-3 text-sm transition-all" type="email" />
                                        </label>
                                        <label className="flex flex-col">
                                            <p className="text-sm font-medium text-text-light pb-2">Phone</p>
                                            <input className="form-input w-full rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light h-12 px-3 text-sm transition-all" type="tel" />
                                        </label>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Order Items Section */}
                        <div className="bg-white rounded-xl shadow-sm border border-border-light">
                            <div className="px-6 py-4 border-b border-border-light">
                                <h3 className="text-lg font-semibold text-text-light">Order Items</h3>
                            </div>
                            <div className="p-6">
                                <label className="mb-6 flex flex-col">
                                    <p className="text-sm font-medium text-text-light pb-2">Add Product</p>
                                    <div className="relative flex w-full items-stretch rounded-lg">
                                        <input
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light h-12 placeholder:text-text-secondary-light p-3 rounded-r-none border-r-0 text-sm font-normal transition-all"
                                            placeholder="Search by product name or SKU"
                                            type="text"
                                        />
                                        <button type="button" className="text-primary flex border border-border-light bg-white items-center justify-center px-4 rounded-r-lg border-l-0 hover:bg-primary/10 transition-colors">
                                            <span className="material-symbols-outlined text-xl">add_shopping_cart</span>
                                        </button>
                                    </div>
                                </label>

                                {/* Items Table */}
                                <div className="overflow-x-auto border border-border-light rounded-lg">
                                    <table className="min-w-full text-left text-sm">
                                        <thead className="bg-background-light border-b border-border-light text-xs uppercase text-text-secondary-light">
                                            <tr>
                                                <th className="py-3 px-4 font-semibold">Product</th>
                                                <th className="py-3 px-4 font-semibold">SKU</th>
                                                <th className="py-3 px-4 font-semibold">Price</th>
                                                <th className="py-3 px-4 font-semibold">Quantity</th>
                                                <th className="py-3 px-4 font-semibold text-right">Total</th>
                                                <th className="py-3 px-4"></th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border-light">
                                            {items.map((item) => (
                                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                                    <td className="py-3 px-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="relative size-10 rounded-lg overflow-hidden bg-gray-100 border border-border-light">
                                                                <Image
                                                                    src={item.image}
                                                                    alt={item.name}
                                                                    fill
                                                                    className="object-cover"
                                                                />
                                                            </div>
                                                            <span className="font-medium text-text-light">{item.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-4 text-text-secondary-light">{item.sku}</td>
                                                    <td className="py-3 px-4 text-text-secondary-light">${item.price.toFixed(2)}</td>
                                                    <td className="py-3 px-4">
                                                        <input
                                                            className="form-input h-9 w-16 rounded-lg border border-border-light text-center text-sm focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none bg-white"
                                                            type="number"
                                                            value={item.quantity}
                                                            min={1}
                                                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                                        />
                                                    </td>
                                                    <td className="py-3 px-4 text-right font-medium text-text-light">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </td>
                                                    <td className="py-3 px-4 text-right">
                                                        <button
                                                            type="button"
                                                            onClick={() => handleRemoveItem(item.id)}
                                                            className="text-text-secondary-light hover:text-primary transition-colors"
                                                        >
                                                            <span className="material-symbols-outlined text-lg">delete</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Summary */}
                                <div className="mt-6 flex justify-end">
                                    <div className="w-full max-w-xs space-y-3 bg-background-light/50 p-4 rounded-lg border border-border-light">
                                        <div className="flex justify-between text-sm text-text-secondary-light">
                                            <span>Subtotal</span>
                                            <span className="font-medium text-text-light">${subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-text-secondary-light">
                                            <span>Shipping</span>
                                            <span className="font-medium text-text-light">${shipping.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between border-t border-border-light pt-3 text-base font-bold text-text-light">
                                            <span>Grand Total</span>
                                            <span className="text-primary">${total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Shipping & Status Section */}
                        <div className="bg-white rounded-xl shadow-sm border border-border-light">
                            <div className="px-6 py-4 border-b border-border-light">
                                <h3 className="text-lg font-semibold text-text-light">Shipping & Status</h3>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <label className="flex flex-col md:col-span-2">
                                        <p className="text-sm font-medium text-text-light pb-2">Street Address</p>
                                        <input className="form-input w-full rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light h-12 px-3 text-sm transition-all" type="text" />
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium text-text-light pb-2">City</p>
                                        <input className="form-input w-full rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light h-12 px-3 text-sm transition-all" type="text" />
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium text-text-light pb-2">State / Province</p>
                                        <input className="form-input w-full rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light h-12 px-3 text-sm transition-all" type="text" />
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium text-text-light pb-2">ZIP / Postal Code</p>
                                        <input className="form-input w-full rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light h-12 px-3 text-sm transition-all" type="text" />
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium text-text-light pb-2">Country</p>
                                        <input className="form-input w-full rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light h-12 px-3 text-sm transition-all" type="text" />
                                    </label>
                                    <label className="flex flex-col md:col-span-2">
                                        <p className="text-sm font-medium text-text-light pb-2">Order Status</p>
                                        <select className="form-select w-full rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light h-12 px-3 text-sm transition-all">
                                            <option>Pending</option>
                                            <option>Processing</option>
                                            <option>Shipped</option>
                                            <option>Delivered</option>
                                            <option>Cancelled</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end gap-4 pt-2">
                            <Link
                                href="/admin/orders"
                                className="px-6 py-2.5 rounded-lg text-sm font-semibold text-text-secondary-light bg-white border border-border-light hover:bg-gray-50 transition-colors shadow-sm"
                            >
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-colors shadow-sm"
                            >
                                Save Order
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default AddOrderPage;