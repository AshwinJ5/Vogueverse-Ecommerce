"use client";

import React, { useState } from "react";
import Link from "next/link";
import AdminHeader from "@/app/components/AdminHeader";
import Sidebar from "@/app/components/Sidebar";

const EditCouponPage = () => {
    // --- State Management ---
    const [couponCode, setCouponCode] = useState("SUMMER2024");
    const [discountType, setDiscountType] = useState("percentage");
    const [discountValue, setDiscountValue] = useState(20);
    const [minPurchase, setMinPurchase] = useState(50);
    const [expiryDate, setExpiryDate] = useState("2024-08-31");
    const [usageLimitPerUser, setUsageLimitPerUser] = useState(1);
    const [totalUsageLimit, setTotalUsageLimit] = useState(1000);
    const [isActive, setIsActive] = useState(true);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Updating Coupon:", {
            couponCode,
            discountType,
            discountValue,
            minPurchase,
            expiryDate,
            usageLimitPerUser,
            totalUsageLimit,
            isActive,
        });
    };

    return (
        <div className="flex min-h-screen font-display bg-background-light text-text-light">
            <Sidebar />

            <main className="flex flex-1 flex-col">
                <AdminHeader />
                <main className="flex-1 space-y-4 p-6 lg:p-8 overflow-y-auto">
                    {/* PageHeading */}
                    <div className="flex flex-wrap justify-between gap-3 mb-6">
                        <p className="text-text-light text-3xl font-bold leading-tight tracking-tight">
                            Edit Coupon: {couponCode}
                        </p>
                    </div>

                    {/* Form Container */}
                    <div className="bg-white border border-border-light rounded-xl p-6 lg:p-8 mx-auto">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {/* Coupon Code (Read Only) */}
                            <div className="md:col-span-2">
                                <label className="flex flex-col">
                                    <p className="text-text-light text-sm font-medium leading-normal pb-2">Coupon Code</p>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-500 focus:outline-none border border-border-light bg-gray-100 h-12 p-3 text-base font-normal leading-normal cursor-not-allowed"
                                        readOnly
                                        value={couponCode}
                                    />
                                </label>
                            </div>

                            {/* Discount Type */}
                            <label className="flex flex-col gap-2">
                                <p className="text-sm font-medium text-text-primary">Discount Type</p>

                                {/* Container */}
                                <div className="grid grid-cols-2 gap-1 rounded-xl bg-gray-100/80 p-1.5 border border-border-light">
                                    {/* Percentage Option */}
                                    <label
                                        className={`relative flex cursor-pointer items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-all duration-200 ease-in-out focus-within:ring-2 focus-within:ring-primary/50 ${
                                            discountType === "Percentage"
                                                ? "bg-white text-primary shadow-sm ring-1 ring-black/5"
                                                : "text-text-secondary hover:bg-gray-200/50 hover:text-text-primary"
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name="discount-type"
                                            value="Percentage"
                                            className="sr-only" // Hide default radio, use label for styling
                                            checked={discountType === "Percentage"}
                                            onChange={() => setDiscountType("Percentage")}
                                        />
                                        <span className="material-symbols-outlined text-lg">percent</span>
                                        <span>Percentage</span>
                                    </label>

                                    {/* Fixed Amount Option */}
                                    <label
                                        className={`relative flex cursor-pointer items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-all duration-200 ease-in-out focus-within:ring-2 focus-within:ring-primary/50 ${
                                            discountType === "Fixed Amount"
                                                ? "bg-white text-primary shadow-sm ring-1 ring-black/5"
                                                : "text-text-secondary hover:bg-gray-200/50 hover:text-text-primary"
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name="discount-type"
                                            value="Fixed Amount"
                                            className="sr-only"
                                            checked={discountType === "Fixed Amount"}
                                            onChange={() => setDiscountType("Fixed Amount")}
                                        />
                                        <span className="material-symbols-outlined text-lg">attach_money</span>
                                        <span>Fixed Amount</span>
                                    </label>
                                </div>
                            </label>

                            {/* Discount Value */}
                            <div>
                                <label className="flex flex-col">
                                    <p className="text-text-light text-sm font-medium leading-normal pb-2">
                                        Discount Value
                                    </p>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-white h-12 p-3 text-base font-normal leading-normal"
                                        placeholder="e.g., 20"
                                        type="number"
                                        value={discountValue}
                                        onChange={(e) => setDiscountValue(parseFloat(e.target.value))}
                                    />
                                </label>
                            </div>

                            {/* Minimum Purchase */}
                            <div>
                                <label className="flex flex-col">
                                    <p className="text-text-light text-sm font-medium leading-normal pb-2">
                                        Minimum Purchase Amount ($)
                                    </p>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-white h-12 p-3 text-base font-normal leading-normal"
                                        placeholder="e.g., 50"
                                        type="number"
                                        value={minPurchase}
                                        onChange={(e) => setMinPurchase(parseFloat(e.target.value))}
                                    />
                                </label>
                            </div>

                            {/* Expiry Date */}
                            <div>
                                <label className="flex flex-col">
                                    <p className="text-text-light text-sm font-medium leading-normal pb-2">Expiry Date</p>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-white h-12 p-3 text-base font-normal leading-normal"
                                        type="date"
                                        value={expiryDate}
                                        onChange={(e) => setExpiryDate(e.target.value)}
                                    />
                                </label>
                            </div>

                            {/* Usage Limit Per User */}
                            <div>
                                <label className="flex flex-col">
                                    <p className="text-text-light text-sm font-medium leading-normal pb-2">
                                        Usage Limit (Per User)
                                    </p>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-white h-12 p-3 text-base font-normal leading-normal"
                                        placeholder="e.g., 1"
                                        type="number"
                                        value={usageLimitPerUser}
                                        onChange={(e) => setUsageLimitPerUser(parseInt(e.target.value))}
                                    />
                                </label>
                            </div>

                            {/* Total Usage Limit */}
                            <div>
                                <label className="flex flex-col">
                                    <p className="text-text-light text-sm font-medium leading-normal pb-2">
                                        Total Usage Limit
                                    </p>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-white h-12 p-3 text-base font-normal leading-normal"
                                        placeholder="e.g., 1000"
                                        type="number"
                                        value={totalUsageLimit}
                                        onChange={(e) => setTotalUsageLimit(parseInt(e.target.value))}
                                    />
                                </label>
                            </div>

                            {/* Status Toggle */}
                            <div className="md:col-span-2 flex items-center justify-between mt-2">
                                <p className="text-text-light text-sm font-medium leading-normal">Status</p>
                                <div className="flex items-center gap-4">
                                    <span
                                        className={`text-sm ${!isActive ? "text-text-light font-medium" : "text-gray-500"}`}
                                    >
                                        Inactive
                                    </span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={isActive}
                                            onChange={(e) => setIsActive(e.target.checked)}
                                        />
                                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-primary/50 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                    </label>
                                    <span
                                        className={`text-sm ${isActive ? "text-text-light font-medium" : "text-gray-500"}`}
                                    >
                                        Active
                                    </span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="md:col-span-2 flex justify-end gap-3 mt-6 pt-6 border-t border-border-light">
                                <Link href="/admin/coupons">
                                    <button
                                        type="button"
                                        className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-gray-100 text-text-light gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 px-6 hover:bg-gray-200 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </Link>
                                <button
                                    type="submit"
                                    className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 px-6 hover:bg-primary/90 transition-colors"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </main>
        </div>
    );
};

export default EditCouponPage;
