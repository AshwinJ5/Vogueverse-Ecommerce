"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ProductDetail = () => {
    // --- State Management ---
    const [mainImage, setMainImage] = useState(
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAJveWpJyiKxznS6uDwuWG7MkxAmlcyC4QdUS2xkAg5pHIaCCjK2_JDKCdbUmF_v5OwZzk_GRcJxjol52wfgPntE9Vl04tSU9HaRj_c-QOffF_2ZBesvoX6Auykp8KaY6c0Jq7dwNyDQH7I3wHNvXRojOu9qsyUdS8Vs_Pwe6du1Ze_oBlygpLCDDXSL96Twyb0L66Wyw7Ln0ZtGuJWK6fgYviKDzDYx1w7SCIKuzvyQL5edjD_0dSugpnuX1Pw46a9XNNHUhGcSwsX"
    );
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("S");
    const [activeTab, setActiveTab] = useState("Description");

    // --- Mock Data ---
    const thumbnails = [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAJveWpJyiKxznS6uDwuWG7MkxAmlcyC4QdUS2xkAg5pHIaCCjK2_JDKCdbUmF_v5OwZzk_GRcJxjol52wfgPntE9Vl04tSU9HaRj_c-QOffF_2ZBesvoX6Auykp8KaY6c0Jq7dwNyDQH7I3wHNvXRojOu9qsyUdS8Vs_Pwe6du1Ze_oBlygpLCDDXSL96Twyb0L66Wyw7Ln0ZtGuJWK6fgYviKDzDYx1w7SCIKuzvyQL5edjD_0dSugpnuX1Pw46a9XNNHUhGcSwsX",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAQaTkVwtpT0vr4WWXqKZ-EGrfVcMIAm5VSj9Y38_5OqfZk2Brnd2Ok-JPjtNiQaJS8fyZLfIJBplz4q9R2Ez_JttaR325OTFpyuI9fAqHep1l1gtffI0NhPgwKVf0212Gc0TWMajMA4LYWTdF6Xk-365fyrNaoKOg7vmMlWdNDrqb5cJcpM_pXRVRxD9yVKSUErBsOAntj81mX1DKyQYxAzFuURIapdKVVWH8GCui3mycSrM-_futijbfJezgb6TX7Gt3b267J6DzE",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ5xx5K59scJA5XjPTJ3hWimr798quy6YotO1Ba2CpldK2yGe1ipv8Tg8z6lAaufIQv0IxPw6o6U38lrnf1lfxd-KjAf3D7y5LktS4zB2jsKNNwSvSROnPdxODMqBHMVmSB8ze7uKeh5V1AQUty5xmiAAvDxbm00piBid7hbVdJNy3YDlBGa5PvX24RC6Ns0JN3Dm36bB0nr74AvOnCsOpM73D6x8Adi-m6VNg1hZO4Bt6NiIlfH4_wE0NYFEjmFK9bEwMcCsyZ9HD",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCEtgRFHjKzvb7zkwdziyYndtjP_KhumddoV51fxpzvSvbZxvFfIeSp_4QXxnayGa0fRhLnDglXPww11HnOmkojbej0HFHDDKdTIdec9BSWzkO_owWi8gSanDX3-neRER8TTdx4jp1ajPf3NuutDrNkwitSTOkpI9zzeDL4J9yhOTdhe9tYZyVuSJfOYG-23HoASnl3IPO7nhK7-FB6gYI2fBSJUgXs-ujIWjEuZhmMY8XUNC9LlZhElecnfDi-q8yHj4pTNLHMzxEK",
    ];

    const sizes = ["XS", "S", "M", "L", "XL"];
    const tabs = ["Description", "Sizing Guide", "Reviews (128)"];

    // --- Handlers ---
    const handleQuantity = (type: "inc" | "dec") => {
        if (type === "dec" && quantity > 1) setQuantity(quantity - 1);
        if (type === "inc") setQuantity(quantity + 1);
    };

    return (
        <div className="font-display bg-background-light text-text-light min-h-screen flex flex-col w-full overflow-x-hidden">
            <Navbar />

            <main className="w-full container mx-auto px-4 py-8 grow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* --- LEFT: IMAGE GALLERY --- */}
                    <div className="flex flex-col-reverse md:flex-row gap-4">
                        {/* Thumbnails (Left on Desktop / Bottom on Mobile) */}
                        <div className="flex md:flex-col gap-3 w-full md:w-20 shrink-0 overflow-x-auto md:overflow-visible hide-scrollbar">
                            {thumbnails.map((src, index) => (
                                <div
                                    key={index}
                                    onClick={() => setMainImage(src)}
                                    className={`relative w-20 h-24 md:w-full md:h-24 shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                                        mainImage === src
                                            ? "border-primary opacity-100"
                                            : "border-transparent opacity-70 hover:opacity-100"
                                    }`}
                                >
                                    <Image
                                        fill
                                        src={src}
                                        alt={`Thumbnail ${index}`}
                                        className="object-cover"
                                        sizes="80px"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="grow relative aspect-4/5 md:aspect-3/4 rounded-xl overflow-hidden bg-gray-100 ">
                            <Image
                                fill
                                src={mainImage}
                                alt="Product View"
                                className="object-cover transition-all duration-500"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* --- RIGHT: PRODUCT INFO --- */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-start">
                                <div>
                            <p className="text-sm font-medium text-secondary-text-light">Vogue Collection</p>
                            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-text-light">
                                Floral Print Midi Dress
                            </h1>

                                </div>
                                <button className="h-8 w-8 rounded-full bg-white/90 shadow-sm flex items-center justify-center md:hover:bg-primary md:hover:text-white transition-colors text-text-light cursor-pointer border border-gray-200">
                                        <span className="material-symbols-outlined text-lg">share</span>
                                    </button>
                            </div>

                            {/* Ratings */}
                            <div className="flex items-center gap-2 mt-2">
                                <div className="flex items-center">
                                    {[1, 2, 3, 4].map((star) => (
                                        <span
                                            key={star}
                                            className="material-symbols-outlined text-secondary fill-current text-[20px]"
                                            style={{ fontVariationSettings: "'FILL' 1" }}
                                        >
                                            star
                                        </span>
                                    ))}
                                    <span className="material-symbols-outlined text-secondary text-[20px]">star_half</span>
                                </div>
                                <p className="text-sm text-secondary-text-light">4.5 (128 reviews)</p>
                            </div>

                            <p className="text-3xl font-bold mt-4 text-primary">
                                ₹ 89.99
                                <span className="text-xl font-normal text-gray-400 line-through ml-2">₹ 120.00</span>
                            </p>
                        </div>

                        <div className="border-t border-border-light pt-6 space-y-6">

                            {/* Size Selector */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-sm font-semibold text-text-light">Size</h3>
                                    <button className="text-xs text-primary hover:underline font-medium">Size Guide</button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-4 py-2 text-sm font-medium border rounded-lg transition-colors ${
                                                selectedSize === size
                                                    ? "border-primary bg-primary/10 text-primary"
                                                    : "border-border-light text-text-light hover:border-primary"
                                            } ${size === "XL" ? "opacity-50 cursor-not-allowed bg-gray-100" : ""}`}
                                            disabled={size === "XL"}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity Selector */}
                            <div>
                                <h3 className="text-sm font-semibold mb-2 text-text-light">Quantity</h3>
                                <div className="flex items-center border border-border-light rounded-lg w-fit bg-white">
                                    <button
                                        onClick={() => handleQuantity("dec")}
                                        className="px-3 py-2 text-gray-500 hover:text-primary transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-[20px]">remove</span>
                                    </button>
                                    <input
                                        className="w-12 text-center border-0 bg-transparent text-text-light focus:ring-0 font-medium"
                                        readOnly
                                        type="text"
                                        value={quantity}
                                    />
                                    <button
                                        onClick={() => handleQuantity("inc")}
                                        className="px-3 py-2 text-gray-500 hover:text-primary transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-[20px]">add</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-row sm:flex-row gap-3 pt-6 border-t border-border-light">
                            <button className="flex-1 w-full flex items-center justify-center gap-2 rounded-lg bg-primary h-12 text-white text-base font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                                <span className="material-symbols-outlined">shopping_cart</span>
                                Add to Cart
                            </button>
                            <button className="flex-1 w-full flex items-center justify-center rounded-lg bg-secondary h-12 text-white text-base font-bold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- BOTTOM SECTION: TABS & CONTENT --- */}
                <div className="mt-16">
                    <div className="border-b border-border-light overflow-x-auto hide-scrollbar">
                        <nav className="flex gap-8 min-w-max">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                                        activeTab === tab
                                            ? "text-primary border-primary"
                                            : "text-secondary-text-light border-transparent hover:text-text-light hover:border-gray-300"
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="py-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        {activeTab === "Description" && (
                            <>
                                <h3 className="text-xl font-bold mb-4 text-text-light">Product Description</h3>
                                <p className="text-secondary-text-light leading-relaxed max-w-4xl">
                                    Embrace timeless elegance with our Floral Print Midi Dress. Crafted from a lightweight,
                                    breathable fabric, this dress features a delicate all-over floral pattern, a flattering
                                    V-neckline, and subtle puff sleeves. The cinched waist flows into a graceful A-line
                                    skirt that falls to a chic midi length. Perfect for garden parties, brunches, or any
                                    sun-drenched occasion.
                                </p>
                                <ul className="list-disc list-inside mt-4 space-y-1 text-secondary-text-light">
                                    <li>Material: 100% Viscose</li>
                                    <li>Care: Machine wash cold, hang to dry</li>
                                    <li>Fit: True to size</li>
                                    <li>Model is 5&apos;9&quot; and wearing a size S</li>
                                </ul>
                            </>
                        )}
                        {activeTab === "Reviews (128)" && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="md:col-span-1">
                                    <h3 className="text-2xl font-bold text-text-light">Customer Reviews</h3>
                                    <div className="flex items-baseline gap-2 mt-2">
                                        <p className="text-4xl font-bold text-text-light">4.5</p>
                                        <p className="text-secondary-text-light">out of 5</p>
                                    </div>
                                    {/* Star Graphics */}
                                    <div className="flex items-center mt-1">
                                        {[1, 2, 3, 4].map((i) => (
                                            <span
                                                key={i}
                                                className="material-symbols-outlined text-secondary text-[20px]"
                                                style={{ fontVariationSettings: "'FILL' 1" }}
                                            >
                                                star
                                            </span>
                                        ))}
                                        <span className="material-symbols-outlined text-secondary text-[20px]">
                                            star_half
                                        </span>
                                    </div>
                                    <p className="text-sm text-secondary-text-light mt-2">Based on 128 reviews</p>
                                </div>

                                {/* Review List */}
                                <div className="md:col-span-2 space-y-8">
                                    {/* Review 1 */}
                                    <div className="flex gap-4">
                                        <div className="relative size-12 rounded-full overflow-hidden">
                                            <Image
                                                fill
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDT5WeBTV3Qcx5z3NiwqegjriWIrrT5uo4ikEXGsre4rkCA5I26peYdd8pYV069IemPUdDXYAiegxPmIYiH-tEXoVwGfoEaw2VXuzVZkGj2nclY_qWvgAITIqXVicCt7iHR7CtXxFcYvocnS84i-dsjaf7h9vOD6MF3Uibh-R5gEwCV6A00nIXTgNl-wNoJ_zseUe3ZCVYaCbBRIiIyGvZwrVNbY8yKdD5fiygKsc66LYvAqN30ehX1-JCLXcLodZfRTpw9O1vHjIC"
                                                alt="User"
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <p className="font-semibold text-text-light">Sarah K.</p>
                                                <span className="text-xs text-secondary-text-light">June 12, 2024</span>
                                            </div>
                                            <p className="mt-1 text-secondary-text-light leading-relaxed">
                                                Absolutely stunning dress! The fabric is so light and comfortable.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {(activeTab === "Sizing Guide" || activeTab === "Shipping & Returns") && (
                            <p className="text-secondary-text-light italic">Content for {activeTab} goes here...</p>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetail;
