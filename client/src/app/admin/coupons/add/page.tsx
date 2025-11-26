"use client";

import React, { useState } from "react";
import AdminHeader from "@/app/components/AdminHeader";
import Sidebar from "@/app/components/Sidebar";
import Link from "next/link";

const AddCouponPage = () => {
    // --- State Management ---
    const [couponCode, setCouponCode] = useState("");
    const [discountType, setDiscountType] = useState("Percentage");
    const [discountValue, setDiscountValue] = useState("");
    const [minPurchase, setMinimumPurchase] = useState("");
    const [totalLimit, setTotalLimit] = useState("");
    const [userLimit, setUserLimit] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [isActive, setIsActive] = useState(true);

    // Mock Generator Function
    const generateCode = () => {
        const random = Math.random().toString(36).substring(2, 8).toUpperCase();
        setCouponCode(`SALE${random}`);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            couponCode,
            discountType,
            discountValue,
            minPurchase,
            totalLimit,
            userLimit,
            expiryDate,
            isActive,
        });
    };

    return (
        <div className="flex min-h-screen font-display bg-background-light text-text-light">
            <Sidebar />

            <main className="flex flex-1 flex-col">
                <AdminHeader />

                <div className="flex-1 space-y-4 p-6 lg:p-8 overflow-y-auto">
                    {/* PageHeading */}
                    <div className="mb-8">
                        <p className="text-text-primary text-3xl font-bold tracking-tight">Create New Coupon</p>
                        <p className="text-text-secondary mt-1">Create a new discount coupon for your store.</p>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white rounded-xl shadow-sm border border-border-light p-8">
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            {/* Section: Coupon Details */}
                            <div>
                                <h3 className="text-lg font-semibold text-text-primary mb-4 border-b border-border-light pb-3">
                                    Coupon Details
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Coupon Code */}
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium text-text-primary pb-2">Coupon Code</p>
                                        <div className="flex w-full items-stretch rounded-lg">
                                            <input
                                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light h-12 placeholder:text-text-secondary p-3 rounded-r-none border-r-0 text-sm font-normal transition-all"
                                                placeholder="e.g., SUMMER25"
                                                value={couponCode}
                                                onChange={(e) => setCouponCode(e.target.value)}
                                            />
                                            <button
                                                type="button"
                                                onClick={generateCode}
                                                className="text-primary flex border border-border-light bg-white items-center justify-center px-4 rounded-r-lg border-l-0 hover:bg-primary/10 transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-xl">auto_awesome</span>
                                            </button>
                                        </div>
                                    </label>
                                    <div></div>

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
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium text-text-primary pb-2">Discount Value</p>
                                        <div className="relative">
                                            <input
                                                className="form-input w-full rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light h-12 placeholder:text-text-secondary px-3 pr-10 text-sm transition-all"
                                                placeholder="25"
                                                type="number"
                                                value={discountValue}
                                                onChange={(e) => setDiscountValue(e.target.value)}
                                            />
                                            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-text-secondary text-sm">
                                                {discountType === "Percentage" ? "%" : "$"}
                                            </span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* Section: Usage Rules & Limits */}
                            <div>
                                <h3 className="text-lg font-semibold text-text-primary mb-4 border-b border-border-light pb-3">
                                    Usage Rules & Limits
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Minimum Purchase */}
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium text-text-primary pb-2">
                                            Minimum Purchase Amount
                                        </p>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-text-secondary text-sm">
                                                $
                                            </span>
                                            <input
                                                className="form-input w-full rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light h-12 placeholder:text-text-secondary px-3 pl-8 text-sm transition-all"
                                                placeholder="100.00"
                                                type="number"
                                                value={minPurchase}
                                                onChange={(e) => setMinimumPurchase(e.target.value)}
                                            />
                                        </div>
                                    </label>
                                    <div></div>

                                    {/* Total Usage Limit */}
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium text-text-primary pb-2">Total Usage Limit</p>
                                        <input
                                            className="form-input w-full rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light h-12 placeholder:text-text-secondary px-3 text-sm transition-all"
                                            placeholder="Leave blank for unlimited"
                                            type="number"
                                            value={totalLimit}
                                            onChange={(e) => setTotalLimit(e.target.value)}
                                        />
                                    </label>

                                    {/* Usage Limit Per User */}
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium text-text-primary pb-2">Usage Limit Per User</p>
                                        <input
                                            className="form-input w-full rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light h-12 placeholder:text-text-secondary px-3 text-sm transition-all"
                                            placeholder="e.g., 1"
                                            type="number"
                                            value={userLimit}
                                            onChange={(e) => setUserLimit(e.target.value)}
                                        />
                                    </label>
                                </div>
                            </div>

                            {/* Section: Scheduling */}
                            <div>
                                <h3 className="text-lg font-semibold text-text-primary mb-4 border-b border-border-light pb-3">
                                    Scheduling
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                                    {/* Expiry Date */}
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium text-text-primary pb-2">Expiry Date</p>
                                        <div className="relative">
                                            <input
                                                className="form-input w-full rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light h-12 placeholder:text-text-secondary px-3 text-sm transition-all"
                                                type="date"
                                                value={expiryDate}
                                                onChange={(e) => setExpiryDate(e.target.value)}
                                            />
                                        </div>
                                    </label>

                                    {/* Status Toggle */}
                                    <div className="flex items-center justify-between bg-background-light border border-border-light rounded-lg p-3 h-12">
                                        <p className="text-sm font-medium text-text-primary">Active Status</p>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="sr-only peer"
                                                checked={isActive}
                                                onChange={(e) => setIsActive(e.target.checked)}
                                            />
                                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:outline-none peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-end gap-4 pt-6 border-t border-border-light">
                                <Link href="/admin/coupons"
                                    className="px-6 py-2.5 rounded-lg text-sm font-semibold text-text-secondary bg-gray-100 hover:bg-gray-200 transition-colors"
                                    type="button"
                                >
                                    Cancel
                                </Link>
                                <button
                                    className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-colors"
                                    type="submit"
                                >
                                    Save Coupon
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AddCouponPage;
