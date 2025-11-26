"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/app/components/Sidebar";
import AdminHeader from "@/app/components/AdminHeader";

const EditOrderPage = () => {
    // --- State Management ---
    // In a real application, these would be initialized from props or an API fetch
    const [orderStatus, setOrderStatus] = useState("Processed");
    const [trackingId, setTrackingId] = useState("");

    // --- Mock Data ---
    const order = {
        id: "#OD12345",
        customer: {
            name: "Alex Doe",
            email: "alex.doe@example.com",
            phone: "+1 (555) 123-4567",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu7NbYzDhpg9Y_agKe3NFhTibt-G9lhj9Q4zxBen4857qvxLgli9ohS8a6fwAP-TAPxirgniL9rSttaiIkRuomTk2t9l752Iax6-kXwiijeXn5SCTnoZmEXb5nq7G81UyLtcHcnJy18Zbma6vGoGzRQzHBhn1z3PKu7ivLtrcvgEzn8s7Kjl4DJKO4qjxB2qR3a7Oti_P-Qau4YqJoS4yBpidEY2BXrWl-GXQVubJKLWk8Tp96gZ2_orSUQct5ooAotq74PxvYEEtU",
        },
        shippingAddress: {
            name: "Alex Doe",
            lines: ["123 Serenity Lane", "Apt 4B", "Meadowville, ST 12345", "United States"]
        },
        billingAddress: {
            name: "Alex Doe",
            lines: ["123 Serenity Lane", "Apt 4B", "Meadowville, ST 12345", "United States"]
        },
        items: [
            {
                id: 1,
                name: "Classic White Tee",
                variant: "Size: M / Color: White",
                sku: "CWT-M-WHT",
                qty: 1,
                price: 35.00,
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA96_uBV7Ola-8NEt2I6pJyZ_liUuu4C1i8RjfR9Y-7dMdN23vqT6csVM-JUfhjqZ7irQA-dnx7eI3SLCO-IDyfZMzelZTPgCjIAOrs2jcgjKp6JwHQXpb6LDqiBjNDcBAop8DdPZpJdhEMZ-Vdw4ky3kEB02WhBGG6KK9p2epuTI3NPmKVfaWqWja01JXNA_GnJhZ5bdIkKGI71oXo9N8Fbr6KSQZC9K1T_5VbFEbj05mFYuBLdXaYO6pKvOVUtW7oUgmV_1Ume_n3"
            },
            {
                id: 2,
                name: "Vintage Denim Jacket",
                variant: "Size: L / Color: Blue Denim",
                sku: "VDJ-L-BLU",
                qty: 1,
                price: 89.99,
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXDuWtov0Ofn3E43cZLxWmXrxErNp9gLpOCUACoVJK-u77dKy2D1G7Vtgmbadc8kXoJYQ2c12VlMpjbwWVYYfxbQmO8bqm-9bhGRT5k9A-Tw6duj1di3HkQxgMEBXQ6omNEYF5sjODbUx-j_aZxxglJcSSRs2UAlHNguEJujZafp9vI_aDMuSOxm_kNTQE65ygWuWpJKHX2zx17djDoq9V3jf8l61dwtP8_7OK0-ZJKkGN0vJf3g0hxl9nT61Fie4XxMbkZhG75aYJ"
            }
        ],
        history: [
            { status: "Processed", date: "October 27, 2023, 10:30 AM", user: "AdminUser", active: true, icon: "check" },
            { status: "Order placed", date: "October 26, 2023, 08:45 PM", user: "", active: false, icon: "receipt" }
        ]
    };

    const handleSave = () => {
        console.log("Saving Order Changes:", { orderStatus, trackingId });
    };

    return (
        <div className="flex min-h-screen font-display bg-background-light text-text-light">
            <Sidebar />

            <main className="flex flex-1 flex-col">
                <AdminHeader />

                <div className="flex-1 space-y-4 p-6 lg:p-8 overflow-y-auto">
                    {/* PageHeading & Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                        <div className="flex flex-col">
                            <h1 className="text-3xl font-bold leading-tight tracking-tight text-text-light">Edit Order {order.id}</h1>
                            <p className="text-base font-normal leading-normal text-text-muted-light">Update order status, tracking information, and other details.</p>
                        </div>
                        <div className="flex gap-3">
                            <Link href="/admin/orders">
                                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white text-text-light text-sm font-bold leading-normal border border-border-light hover:bg-gray-50 transition-colors">
                                    <span className="truncate">Cancel</span>
                                </button>
                            </Link>
                            <button 
                                onClick={handleSave}
                                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-sm"
                            >
                                <span className="truncate">Save Changes</span>
                            </button>
                        </div>
                    </div>

                    {/* Main Grid Layout */}
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        
                        {/* --- Left Column (Products, Address, History) --- */}
                        <div className="flex flex-col gap-8 lg:col-span-2">
                            
                            {/* Products Card */}
                            <div className="rounded-xl border border-border-light bg-white shadow-sm">
                                <div className="border-b border-border-light p-5">
                                    <h2 className="text-lg font-bold text-text-light">Products</h2>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-left text-sm">
                                        <thead className="border-b border-border-light bg-background-light">
                                            <tr>
                                                <th className="px-6 py-3 font-semibold text-text-light">Product</th>
                                                <th className="px-6 py-3 font-semibold text-text-light">SKU</th>
                                                <th className="px-6 py-3 font-semibold text-text-light text-center">Quantity</th>
                                                <th className="px-6 py-3 font-semibold text-text-light text-right">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.items.map((item) => (
                                                <tr key={item.id} className="border-b border-border-light last:border-0">
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        <div className="flex items-center gap-4">
                                                            <div className="relative h-14 w-14 rounded-lg overflow-hidden border border-border-light">
                                                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                                                            </div>
                                                            <div>
                                                                <p className="font-medium text-text-light">{item.name}</p>
                                                                <p className="text-text-muted-light">{item.variant}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-text-muted-light">{item.sku}</td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-center text-text-light">{item.qty}</td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-right font-medium text-text-light">${item.price.toFixed(2)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot className="bg-background-light/50">
                                            <tr>
                                                <td className="px-6 py-3 text-right font-medium text-text-muted-light" colSpan={3}>Subtotal</td>
                                                <td className="px-6 py-3 text-right font-medium text-text-light">$124.99</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-3 text-right font-medium text-text-muted-light" colSpan={3}>Shipping</td>
                                                <td className="px-6 py-3 text-right font-medium text-text-light">$10.00</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-right text-base font-bold text-text-light" colSpan={3}>Total</td>
                                                <td className="px-6 py-4 text-right text-base font-bold text-text-light">$134.99</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>

                            {/* Addresses Grid */}
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                {/* Shipping Address */}
                                <div className="rounded-xl border border-border-light bg-white p-5 shadow-sm">
                                    <h3 className="mb-4 text-lg font-bold text-text-light">Shipping Address</h3>
                                    <div className="space-y-1 text-sm text-text-light">
                                        <p className="font-medium">{order.shippingAddress.name}</p>
                                        {order.shippingAddress.lines.map((line, i) => (
                                            <p key={i} className="text-text-muted-light">{line}</p>
                                        ))}
                                    </div>
                                </div>
                                {/* Billing Address */}
                                <div className="rounded-xl border border-border-light bg-white p-5 shadow-sm">
                                    <h3 className="mb-4 text-lg font-bold text-text-light">Billing Address</h3>
                                    <div className="space-y-1 text-sm text-text-light">
                                        <p className="font-medium">{order.billingAddress.name}</p>
                                        {order.billingAddress.lines.map((line, i) => (
                                            <p key={i} className="text-text-muted-light">{line}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Order History */}
                            <div className="rounded-xl border border-border-light bg-white shadow-sm">
                                <div className="border-b border-border-light p-5">
                                    <h2 className="text-lg font-bold text-text-light">Order History</h2>
                                </div>
                                <div className="p-5">
                                    <ul className="space-y-4">
                                        {order.history.map((entry, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${entry.active ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>
                                                    <span className="material-symbols-outlined text-sm">{entry.icon}</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-text-light">
                                                        {index === 0 ? 'Order status changed to ' : ''}
                                                        <span className={entry.active ? 'font-bold' : ''}>{entry.status}</span>
                                                    </p>
                                                    <p className="text-xs text-text-muted-light">{entry.date}{entry.user ? ` by ${entry.user}` : ''}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* --- Right Column (Management, Customer, Payment) --- */}
                        <div className="flex flex-col gap-8 lg:col-span-1">
                            
                            {/* Order Management */}
                            <div className="rounded-xl border border-border-light bg-white shadow-sm">
                                <div className="border-b border-border-light p-5">
                                    <h2 className="text-lg font-bold text-text-light">Order Management</h2>
                                </div>
                                <div className="space-y-6 p-5">
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium leading-normal text-text-light pb-2">Order Status</p>
                                        <select 
                                            value={orderStatus}
                                            onChange={(e) => setOrderStatus(e.target.value)}
                                            className="form-select w-full rounded-lg border-border-light bg-background-light py-2 text-text-light placeholder:text-text-muted-light focus:border-primary focus:ring-primary/50 focus:outline-none"
                                        >
                                            <option>Pending</option>
                                            <option value="Processed">Processed</option>
                                            <option>Shipped</option>
                                            <option>Delivered</option>
                                            <option>Cancelled</option>
                                        </select>
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium leading-normal text-text-light pb-2">Tracking ID</p>
                                        <div className="relative">
                                            <input 
                                                value={trackingId}
                                                onChange={(e) => setTrackingId(e.target.value)}
                                                className="form-input w-full rounded-lg border-border-light bg-background-light py-2 pl-3 pr-10 text-text-light placeholder:text-text-muted-light focus:border-primary focus:ring-primary/50 focus:outline-none" 
                                                placeholder="Add tracking ID" 
                                                type="text" 
                                            />
                                            <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-text-muted-light hover:text-text-light transition-colors">
                                                <span className="material-symbols-outlined text-xl">content_copy</span>
                                            </button>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* Customer Info */}
                            <div className="rounded-xl border border-border-light bg-white shadow-sm">
                                <div className="border-b border-border-light p-5">
                                    <h2 className="text-lg font-bold text-text-light">Customer</h2>
                                </div>
                                <div className="space-y-4 p-5">
                                    <div className="flex items-center gap-3">
                                        <div className="relative size-12 rounded-full overflow-hidden border border-border-light">
                                            <Image src={order.customer.avatar} alt="Customer avatar" fill className="object-cover" />
                                        </div>
                                        <div>
                                            <Link href="#" className="font-semibold text-text-light hover:text-primary transition-colors">
                                                {order.customer.name}
                                            </Link>
                                            <p className="text-sm text-text-muted-light">2 previous orders</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-text-light">Contact Information</h3>
                                        <p className="text-sm text-primary mt-1">{order.customer.email}</p>
                                        <p className="text-sm text-text-muted-light">{order.customer.phone}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Details */}
                            <div className="rounded-xl border border-border-light bg-white shadow-sm">
                                <div className="border-b border-border-light p-5">
                                    <h2 className="text-lg font-bold text-text-light">Payment</h2>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-text-muted-light">Paid via Stripe</p>
                                        <div className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800">
                                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                            Paid
                                        </div>
                                    </div>
                                    <p className="mt-1 text-xs text-text-muted-light">Transaction ID: pi_3P...xyz</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default EditOrderPage;