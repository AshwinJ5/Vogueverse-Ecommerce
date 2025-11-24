"use client";

import Link from "next/link";
import React, { useState } from "react";

const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Register:", { name, email, password });
    };

    return (
        <div className="flex min-h-screen w-full bg-white font-body text-text-main">
            {/* --- Left Side (Image) --- */}
            {/* Using a different image but exact same dimensions/style as login */}
            <div
                className="hidden lg:block lg:w-1/2 bg-cover bg-center relative"
                style={{
                    backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDc64QmHhepqy-n9_B4a363lLZl_XdR-YJv5Izd-Z9WQpY26WdgJMJ-erDifxoqc9v7dC2s2FJ4k0TxmWAyKQO_ienxUXxHTKybljv6cGfoF8dp9S3EL6X0_gJ0nirsL79XhRhDITJ9CVUlCM7sjhT5a0eXMPidE0jdHVl6bLd2pkPAcdoDKqEtHEaBxL85y2vizWgMGGl7r3NBzz-ugxxc9HniMPDWNBdhQD6Jnvy9k8YLgLxvqUEXznbEMTnOnzaYJQnsqRyk0FoM')",
                }}
            >
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* --- Right Side (Form) --- */}
            <div className="flex w-full lg:w-1/2 flex-col items-center justify-center px-8 py-12 sm:px-12">
                <div className="w-full max-w-md space-y-8">
                    {/* Header */}
                    <div className="text-center">
                        <h1 className="font-display text-4xl font-black tracking-tight text-text-main text-primary">
                            Create Account
                        </h1>
                        <p className="mt-2 text-sm text-gray-500">Join us and discover new fashion trends.</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    placeholder="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="relative block w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none sm:text-sm transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="relative block w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none sm:text-sm transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="relative block w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none sm:text-sm transition-colors"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-end">
                            <span className="text-sm font-medium text-gray-400 cursor-default">
                                By registering, you agree to terms.
                            </span>
                        </div>

                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all"
                        >
                            Register
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    {/* Social Login */}
                    <button
                        type="button"
                        className="cursor-pointer flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>
                        <span className="text-sm font-semibold leading-6">Google</span>
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link href="/auth/login" className="font-semibold text-primary hover:text-red-700 hover:underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
