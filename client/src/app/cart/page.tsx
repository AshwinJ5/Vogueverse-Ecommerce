"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EmptyCart from "../components/EmptyCart";
import Link from "next/link";

const ShoppingCart = () => {
    // --- Mock Data & State ---
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Floral Summer Dress",
            brand: "Brand Name",
            size: "M",
            color: "Red",
            price: 89.99,
            quantity: 1,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADUIvmnMFHsih5GvKjJHvyUQ4RGakEGwwVa2LbyM3ff3u9AK7mMf44loHSbcRORT85xXSWHa-4BQd44BLmOQtWPRFl0srtmuECCk5EhwQsYJ2suXQB8tphsnQja5rCwsmC4BZ77XrIRjfBQzkz34tMM-nxAzPD0sKVg3OXTXZKnJoV2j15ocRYBRjuR8WVRkJvikN5PLDeNcLt4_28GUqLUVNFueW3Lhhw92Vow61e6ZP1zJ20lVnFwyQpVXkXkKYXStrdpnB7NeW4",
        },
        {
            id: 2,
            name: "Leather Ankle Boots",
            brand: "Brand Name",
            size: "10",
            color: "Brown",
            price: 120.0,
            quantity: 1,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIbNwfrrSUqiOgtdX_LUs0F5uzQwWWx4iZ7j6wcNAryyIUR-_DTvKE-qtqAC1eGjepQ-wAWAvEWkmHuq3Wmp4iTSqLCMxZW0IQMgFVcbW8RV9r-3WJTwrZNDmjO09dTXlYBxPMJHsKt1oGEC3LzKY7wFs92I2-kcH3dO0U6w9ZK8H5fpc1ZOLOr-OtCf-zuJSsPxOoWD-Jz1THsmDmHVN0aXxhBHrgZd2xPZKzURk7gIMFLfZN4hxJMgeFosgptgK_-EKLB3xMHox3",
        },
    ]);

    const [couponCode, setCouponCode] = useState("");

    // --- Logic ---
    const updateQuantity = (id: number, delta: number) => {
        setCartItems((items) =>
            items.map((item) => {
                if (item.id === id) {
                    const newQuantity = Math.max(1, item.quantity + delta);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        );
    };

    const removeItem = (id: number) => {
        setCartItems((items) => items.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = 0; // Logic for coupons could go here
    const total = subtotal - discount;

    return (
        <div className="font-display bg-background-light text-text-light min-h-screen flex flex-col">
            <Navbar />

            <main className="grow">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

                    {/* Page Heading */}
                    <div className="flex flex-wrap justify-between gap-3 mb-8">
                        <h1 className="text-3xl md:text-4xl font-black tracking-tighter">My Bag</h1>
                        <span className="text-gray-500 self-end pb-1">{cartItems.length} items</span>
                    </div>

                    {cartItems.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 items-start">
                            {/* Left Column: Cart Items */}
                            <div className="lg:col-span-2 space-y-4">
                                <div className="rounded-lg border border-border-light bg-white">
                                    {cartItems.map((item, index) => (
                                        <div
                                            key={item.id}
                                            className={`flex flex-col sm:flex-row gap-4 p-4 md:p-6 justify-between ${
                                                index !== cartItems.length - 1 ? "border-b border-border-light" : ""
                                            }`}
                                        >
                                            <div className="flex items-start gap-4">
                                                {/* Product Image */}
                                                <div className="relative aspect-square size-24 shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover"
                                                        sizes="96px"
                                                    />
                                                </div>

                                                {/* Product Info */}
                                                <div className="flex flex-1 flex-col justify-center gap-1">
                                                    <p className="text-base font-bold leading-normal">{item.name}</p>
                                                    <p className="text-gray-500 text-sm font-normal leading-normal">
                                                        {item.brand}
                                                    </p>
                                                    <p className="text-gray-500 text-sm font-normal leading-normal">
                                                        Size: {item.size}, Color: {item.color}
                                                    </p>
                                                    <p className="text-base font-semibold leading-normal pt-1">
                                                        ${item.price.toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Actions (Quantity & Delete) */}
                                            <div className="flex sm:flex-col items-center justify-between sm:justify-start gap-4 sm:items-end">
                                                <div className="shrink-0">
                                                    <div className="flex items-center gap-2 text-text-light border border-border-light rounded-full p-1">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, -1)}
                                                            className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer transition-colors"
                                                        >
                                                            -
                                                        </button>
                                                        <input
                                                            className="text-sm font-medium w-6 p-0 text-center bg-transparent focus:outline-0 focus:ring-0 focus:border-none border-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                                            type="number"
                                                            value={item.quantity}
                                                            readOnly
                                                        />
                                                        <button
                                                            onClick={() => updateQuantity(item.id, 1)}
                                                            className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer transition-colors"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-gray-500 hover:text-primary transition-colors"
                                                >
                                                    <span className="material-symbols-outlined text-xl">delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="/categories"
                                    className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                                >
                                    <span className="material-symbols-outlined">arrow_back</span>
                                    Continue Shopping
                                </Link>
                            </div>

                            {/* Right Column: Order Summary */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-28 rounded-lg border border-border-light bg-white p-6 space-y-6">
                                    <h2 className="text-xl font-bold">Order Summary</h2>

                                    {/* Coupon Code */}
                                    <div>
                                        <label className="block text-sm font-medium mb-2" htmlFor="coupon-code">
                                            Have a Coupon Code?
                                        </label>
                                        <div className="flex gap-2">
                                            <input
                                                className="grow rounded-lg border-border-light bg-background-light focus:border-secondary focus:ring-secondary text-sm px-3 py-2"
                                                id="coupon-code"
                                                placeholder="Enter code"
                                                type="text"
                                                value={couponCode}
                                                onChange={(e) => setCouponCode(e.target.value)}
                                            />
                                            <button className="shrink-0 px-4 py-2 rounded-lg bg-secondary text-white font-bold text-sm hover:bg-secondary/90 transition-colors">
                                                Apply
                                            </button>
                                        </div>
                                    </div>

                                    {/* Price Breakdown */}
                                    <div className="space-y-3 border-t border-border-light pt-4">
                                        <div className="flex justify-between text-sm">
                                            <p className="text-gray-600">Subtotal</p>
                                            <p className="font-medium">${subtotal.toFixed(2)}</p>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <p className="text-gray-600">Shipping</p>
                                            <p className="font-medium">Calculated at next step</p>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <p className="text-gray-600">Discount</p>
                                            <p className="font-medium text-primary">-${discount.toFixed(2)}</p>
                                        </div>
                                    </div>

                                    {/* Total */}
                                    <div className="flex justify-between items-center border-t border-border-light pt-4">
                                        <p className="text-lg font-bold">Order Total</p>
                                        <p className="text-2xl font-black text-primary">${total.toFixed(2)}</p>
                                    </div>

                                    {/* CTA */}
                                    <div className="pt-2">
                                        <button className="w-full flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
                                            <span>Secure Checkout</span>
                                            <span className="material-symbols-outlined text-[20px]">lock</span>
                                        </button>
                                        <p className="text-xs text-gray-500 mt-3 text-center">
                                            Taxes and shipping calculated at checkout
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Empty Cart State
                       <EmptyCart/>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ShoppingCart;
